import { useEffect, useState } from "react";
import { getMe } from "../entities/api/auth.api";
import UsersTable from "../widgets/UsersTable";

export default function App() {
	const [user, setUser] = useState();
	useEffect(() => {
		getMe().then((res) => setUser(res));
	}, []);

	return (
		<div className="d-flex flex-column align-items-center gap-1 p-1 w-100 min-vh-100">
			<UsersTable />
		</div>
	);
}
