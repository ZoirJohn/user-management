export function getLastActivity(lastActivity: Date) {
	const now = new Date();
	const [minutes, hours, days, months, years] = [now.getMinutes(), now.getHours(), now.getDate(), now.getMonth(), now.getUTCFullYear()];

	const [lastActivityMinutes, lastActivityHours, lastActivityDays, lastActivityMonths, lastActivityYears] = [lastActivity.getMinutes(), lastActivity.getHours(), lastActivity.getDate(), lastActivity.getMonth(), lastActivity.getUTCFullYear()];

	const yearDiff = years - lastActivityYears;
	const monthDiff = months - lastActivityMonths;
	const dayDiff = days - lastActivityDays;
	const hourDiff = hours - lastActivityHours;
	const minDiff = minutes - lastActivityMinutes;

	if (yearDiff > 0) return `${yearDiff} year${yearDiff > 1 ? "s" : ""} ago`;
	else if (yearDiff < 0) return;

	if (monthDiff > 0) return `${monthDiff} month${monthDiff > 1 ? "s" : ""} ago`;
	else if (monthDiff < 0) return;

	if (dayDiff > 0) return `${dayDiff} day${dayDiff > 1 ? "s" : ""} ago`;
	else if (dayDiff < 0) return;

	if (hourDiff > 0) return `${hourDiff} hour${hourDiff > 1 ? "s" : ""} ago`;
	else if (hourDiff < 0) return;

	if (minDiff > 0) return `${minDiff} minute${minDiff > 1 ? "s" : ""} ago`;
	else if (minDiff < 0) return;

	return "less than a minute ago";
}
