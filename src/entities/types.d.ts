export interface User {
	name: string;
	email: string;
	status: "active" | "unverified" | "blocked";
	lastSeen: Date;
}
