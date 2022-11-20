type IconProps = {
  color?: string,
  size?: number,
}
const defaultIconProps: IconProps = {
  color: '#292929',
  size: 24
}
const IconMoon: React.FC<IconProps> = (defaultIconProps) => {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 14.8442C19.6866 15.4382 18.2286 15.7688 16.6935 15.7688C10.9153 15.7688 6.23116 11.0847 6.23116 5.30654C6.23116 3.77135 6.5618 2.3134 7.15577 1C3.52576 2.64163 1 6.2947 1 10.5377C1 16.3159 5.68414 21 11.4623 21C15.7053 21 19.3584 18.4742 21 14.8442Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
}

const IconArrowBack: React.FC<IconProps> = (defaultIconProps) => {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#4D4DDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

const IconClock: React.FC<IconProps> = (defaultIconProps) => {
  return <svg width={defaultIconProps.size} height={defaultIconProps.size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
      stroke={defaultIconProps.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
}

export {
  IconMoon,
  IconArrowBack,
  IconClock
}