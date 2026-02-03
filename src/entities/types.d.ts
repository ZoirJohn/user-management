export interface User {
	created_at: string;
	email: string;
	id: number;
	last_login_time: string;
	name: string;
	registration_time: string;
	status: "active" | "blocked" | "unverified";
}
type UsersWithSelection = User & { selected: boolean };
