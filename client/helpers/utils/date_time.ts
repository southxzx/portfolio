import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

function UTCToDate(utc: string) {
  const date = new Date(utc);
  return date;
}

function timeAgo(dateString: string) {
  const date = UTCToDate(dateString);
  return dayjs(date).fromNow(true)
}

export {
  UTCToDate,
  timeAgo
}