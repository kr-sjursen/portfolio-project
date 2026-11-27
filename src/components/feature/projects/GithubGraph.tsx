import { Suspense } from 'react';
import { connection } from 'next/server';
import { cacheLife } from 'next/cache';
import { ContributionGrid } from './ContributionGrid';

// TODO: Clean up the file and maybe move Streak elsewhere

type ContributionDay = {
  date: string;
  weekday: number;
  contributionCount: number;
  color: string;
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: {
    contributionDays: ContributionDay[];
  }[];
};

type GitHubResponse = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    } | null;
  };
  errors?: { message: string }[];
};

const WEEKS_TO_SHOW = 24;

const query = `
  query Contributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

function getCurrentStreak(days: ContributionDay[]): number {
  const today = new Date().toISOString().slice(0, 10);
  const pastDays = days.filter((day) => day.date <= today);

  let index = pastDays.length - 1;

  // Today with no contributions yet doesn't break the streak
  if (index >= 0 && pastDays[index].contributionCount === 0) {
    index--;
  }

  let streak = 0;
  while (index >= 0 && pastDays[index].contributionCount > 0) {
    streak++;
    index--;
  }

  return streak;
}

async function Streak({ days }: { days: ContributionDay[] }) {
  await connection(); // opt into request-time rendering so new Date() is allowed
  const streak = getCurrentStreak(days);

  return (
    <>
      Current streak: {streak} {streak === 1 ? 'day' : 'days'}
    </>
  );
}

async function getContributionCalendar(): Promise<ContributionCalendar> {
  'use cache';
  cacheLife('hours');

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error('GITHUB_TOKEN is not configured');
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: { login: 'kr-sjursen' },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  const result: GitHubResponse = await response.json();

  if (result.errors?.length) {
    throw new Error(
      `GitHub GraphQL error: ${result.errors.map((error) => error.message).join(', ')}`
    )
  }

  const calendar = result.data?.user?.contributionsCollection.contributionCalendar;

  if (!calendar) {
    throw new Error('GitHub contribution calendar not found');
  }

  return calendar;
}

export async function GithubGraph() {
  await connection();

  let calendar: ContributionCalendar;
  try {
    calendar = await getContributionCalendar();
  } catch (error) {
    console.error('Unable to load GitHub contributions:', error);
    return <p>GitHub contributions are temporarily unavailable.</p>;
  }
  const days = calendar.weeks.flatMap((week) => week.contributionDays);
  const activeDays = days.filter((day) => day.contributionCount > 0).length;

  return (
    <section
      id='github-contributions'
      className='
        flex flex-col mx-auto w-max mb-8 px-4 py-2
        bg-portfolio-primary
        border border-portfolio-tertiary rounded-lg
      '
      aria-labelledby='github-contributions-title'
    >
      <h2
        id='github-contributions-title'
        className='order-first text-xl text-center'
      >
        GitHub Contributions
      </h2>
      <p className='order-2'>{calendar.totalContributions} contributions in the past year</p>
      <p className='order-3'>{activeDays} active days in the past year</p>
      <p className='order-4'>
        <Suspense fallback='Current streak: …'>
          <Streak days={days} />
        </Suspense>
      </p>

      <ContributionGrid weeks={calendar.weeks.slice(-WEEKS_TO_SHOW)} />
    </section>
  );
}
