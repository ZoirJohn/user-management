export function getLastActivity(lastActivity: Date) {
	const now = new Date();
	const [minutes, hours, days, months, years] = [now.getMinutes(), now.getHours(), now.getDate(), now.getMonth(), now.getUTCFullYear()];

	const [lastActivityMinutes, lastActivityHours, lastActivityDays, lastActivityMonths, lastActivityYears] = [lastActivity.getMinutes(), lastActivity.getHours(), lastActivity.getDate(), lastActivity.getMonth(), lastActivity.getUTCFullYear()];

	const yearDiff = years - lastActivityYears;
	const monthDiff = months - lastActivityMonths;
	const dayDiff = days - lastActivityDays;
	const hourDiff = hours - lastActivityHours;
	const minDiff = minutes - lastActivityMinutes;
	console.log(years, lastActivityYears);
	if (yearDiff) return `${yearDiff} years ago`;
	if (monthDiff) return `${monthDiff} months ago`;
	if (dayDiff) return `${dayDiff} days ago`;
	if (hourDiff) return `${hourDiff} hours ago`;
	if (minDiff) return `${minDiff} minutes ago`;

	return "less than a minute ago";
}
