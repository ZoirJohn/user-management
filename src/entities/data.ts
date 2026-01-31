import type { User } from "./types";

export const data: User[] = [
	{
		name: "John Doe",
		email: "johndoe@email.com",
		status: "active",
		lastSeen: new Date("2023-01-01"),
	},
	{
		name: "Jane Smith",
		email: "janesmith@email.com",
		status: "unverified",
		lastSeen: new Date("2023-01-02"),
	},
	{
		name: "Bob Johnson",
		email: "bobjohnson@email.com",
		status: "blocked",
		lastSeen: new Date("2023-01-03"),
	},
];
