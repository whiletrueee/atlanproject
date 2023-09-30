import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.setDefaultLocale(en.locale);
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const formatTime = (time: string) => {
  const timeAgoString = timeAgo.format(new Date(time), "mini-now");
  return timeAgoString;
};
