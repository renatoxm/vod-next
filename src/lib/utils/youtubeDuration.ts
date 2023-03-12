export const youtubeDurationFormat = (duration: string) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let str = ``;

  if (duration === `P0D`) return `Live`;
  // Remove PT from string ref: https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration
  duration = duration.replace(`PT`, ``);

  // If the string contains hours parse it and remove it from our duration string
  if (duration.indexOf(`H`) > -1) {
    const hours_split = duration.split(`H`);
    hours = parseInt(hours_split[0]);
    duration = hours_split[1];
  }

  // If the string contains minutes parse it and remove it from our duration string
  if (duration.indexOf(`M`) > -1) {
    const minutes_split = duration.split(`M`);
    minutes = parseInt(minutes_split[0]);
    duration = minutes_split[1];
  }

  // If the string contains seconds parse it and remove it from our duration string
  if (duration.indexOf(`S`) > -1) {
    const seconds_split = duration.split(`S`);
    seconds = parseInt(seconds_split[0]);
  }

  if (hours != 0) {
    str += hours + ` : `;
  }

  if (!minutes) {
    str += `00` + ` : `;
  } else if (minutes < 10) {
    str += (!!hours ? `0` : ``) + minutes + ` : `;
  } else if (minutes > 10) {
    str += minutes + ` : `;
  }

  if (seconds > 0 && seconds < 10) {
    str += `0` + seconds;
  } else if (seconds < 10) {
    str += `0` + seconds;
  } else if (seconds > 10) {
    str += +seconds;
  } else if (seconds == 0) {
    str += `00`;
  }

  return str;
};
