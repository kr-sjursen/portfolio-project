import { cacheLife } from 'next/cache';

// TODO: Fetch and display GitHub graph
// TODO: Show how many contributions in total (or this year)
// TODO: Show total amount of active days total (or this year)
// TODO: Show my current streak
// TODO: Ensure that the data is not updated too often

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
  const calendar = await getContributionCalendar();
  const days = calendar.weeks.flatMap((week) => week.contributionDays);
  const activeDays = days.filter((day) => day.contributionCount > 0).length;

  return (
    <section
      id='github-contributions'
      className='
        mx-auto w-max mb-8 px-4 py-2
        bg-portfolio-primary
        border border-portfolio-tertiary rounded-lg
      '
      aria-labelledby='github-contributions-title'
    >
      <h2
        id='github-contributions-title'
        className='text-xl text-center'
      >
        GitHub Contributions
      </h2>
      <p>{calendar.totalContributions} contributions in the past year</p>
      <p>{activeDays} active days in the past year</p>

      <div className='overflow-x-auto'>
        <div
          className='flex w-max gap-1'
          aria-hidden='true'
        >
          {calendar.weeks.map((week) => (
            <div
              key={week.contributionDays[0].date}
              className='grid grid-rows-7 gap-1'
            >
              {week.contributionDays.map((day) => (
                <span
                  key={day.date}
                  className='h-3 w-3 rounded-sm'
                  style={{backgroundColor: day.color, gridRowStart:  day.weekday + 1}}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

{/*
  TODO: Remove daily counts section, and add a hover tooltip for each day instead.
 */}
      <details>
        <summary>View daily contribution counts</summary>
        <ul>
          {days.map((day) => (
            <li key={day.date}>
              {day.date}: {day.contributionCount} contributions
            </li>
          ))}
        </ul>
      </details>

      <a href="https://github.com/kr-sjursen">View my GitHub profile</a>
    </section>
  );
}
