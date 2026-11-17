interface VinduProps {
  x: number
  y: number
}

export function VinduSquare({x, y}: VinduProps) {
  return (
    <rect
      x={x}
      y={y}
      width='18'
      height='25'
      fill='black'
      stroke='brown'
      strokeWidth='2'
    />
  )
}
export function VinduCircle({x, y}: VinduProps) {
  return (
    <circle
      cx={x}
      cy={y}
      r='7'
      fill='black'
      stroke='brown'
      strokeWidth='2'
    />
  )
}

interface HusProps {
  height: number
  color: string
}

// TODO: Make height work while keeping the bottom fixed and the roof correct
export function Hus({height, color}: HusProps) {
  return (
    <svg
      width='100'
      height='200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon
        points='50,10 0,60, 0,160 100,160 100,60'
        fill={color}
      />
      <polygon
        points='0,55 50,0 100,55 100,65 50,10 0,65'
        fill='black'
      />
    </svg>
  )
}

export function Brygge() {
  return (
    <div
      id='brygge'
      className='flex flex-row gap-0'
    >
      <Hus height={100} color='red' />
      <Hus height={120} color='blue' />
      <Hus height={90} color='green' />
      <Hus height={110} color='yellow' />
      <Hus height={100} color='purple' />
    </div>
  )
}