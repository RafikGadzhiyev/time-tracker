import {
  MINUTES_IN_ONE_HOURS,
  SECONDS_IN_ONE_MINUTE,
  SECONDS_IN_ONE_HOUR,
  HOURS_IN_ONE_DAY
} from '~/lib/consts/time.const'

function getTimeFromSeconds(seconds: number) {
  let hours = getHoursFromSeconds(seconds)
  let minutes = getMinutesFromSeconds(seconds)
  let remainSeconds = getMinuteSecondsFromSeconds(seconds)

  return `${hours}:${minutes}:${remainSeconds}`
}

function getHoursFromSeconds(seconds: number) {
  let resultAsNumber = Math.floor(seconds / SECONDS_IN_ONE_HOUR) % HOURS_IN_ONE_DAY;
  let result = '';

  if (resultAsNumber < 10) {
    result += '0'
  }

  result += resultAsNumber
    .toString()

  return result
}

function getMinutesFromSeconds(seconds: number) {
  let resultAsNumber = Math.floor(seconds / SECONDS_IN_ONE_MINUTE) % MINUTES_IN_ONE_HOURS
  let result = ''

  if (resultAsNumber < 10) {
    result += '0'
  }

  result += resultAsNumber
    .toString()

  return result
}

function getMinuteSecondsFromSeconds(seconds: number) {
  let resultAsNumber = Math.trunc(seconds % SECONDS_IN_ONE_MINUTE)
  let result = '';

  if (resultAsNumber < 10) {
    result += '0'
  }

  result += resultAsNumber
    .toString()


  return result
}

export {
  getTimeFromSeconds,
  getHoursFromSeconds,
  getMinutesFromSeconds,
  getMinuteSecondsFromSeconds
}
