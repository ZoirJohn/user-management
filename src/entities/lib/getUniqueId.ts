let counter = 0;

export function getUniqIdValue() {
	counter += 1;
	return `uid-${counter}`;
}
