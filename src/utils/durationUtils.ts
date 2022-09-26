/**
 * Sums a list of duration strings into one duration
 * @param durations a list of duration string
 */
function sumDurations(durations: string[]): string
{
  // calculate total time in seconds
  let totalTime = 0;
  for (let duration of durations) {
    duration = duration.split('.')[0];
    const durationSplit = duration.split(':')
    let pow = 0;
    for (const segment of durationSplit.reverse()) {
      totalTime += parseInt(segment) * Math.pow(60, pow);
      pow++;
    }
  }

  // calculate hour
  // const totalHours = Math.floor(totalTime / 3600);
  // totalTime -= 3600 * totalHours;
  // const totalMin = Math.floor(totalTime / 60);
  // totalTime -= 60 * totalMin;
  // return `${pad(totalHours, 2)}:${pad(totalMin, 2)}:${pad(totalTime, 2)}`
  return secondsToDuration(totalTime);
}

function pad(num: number, size: number) {
  let n = num.toString();
  while (n.length < size) n = '0' + n;
  return n;
}

/**
 * Format 00:04:35.5460000 duration into 04:35
 * @param duration the duration string
 */
function formatDuration(duration: string): string
{
  duration = duration.split('.')[0];
  return duration.split(':').slice(1).join(':')
}

/**
 * Calculate the number of seconds given a duration string like 00:04:35.5460000
 * The Decimal part will be cut out
 * @param duration The duration string
 */
function durationToSeconds(duration: string): number {
  duration = duration.split('.')[0]
  const segments = duration.split(':')
  let seconds = 0;
  let pow = 0;
  segments.reverse().forEach(seg => {
    seconds += Math.pow(60, pow) * parseInt(seg);
    pow++;
  })

  return seconds;
}

/**
 * Convert # of seconds into a duration string HH:MM:SS
 * @param seconds The number of seconds
 */
function secondsToDuration(seconds: number): string {
  let totalTime = seconds;
  const totalHours = Math.floor(totalTime / 3600);
  totalTime -= 3600 * totalHours;
  const totalMin = Math.floor(totalTime / 60);
  totalTime -= 60 * totalMin;
  return `${pad(totalHours, 2)}:${pad(totalMin, 2)}:${pad(Math.floor(totalTime), 2)}`
}

export {
  formatDuration,
  sumDurations,
  durationToSeconds,
  secondsToDuration
}
