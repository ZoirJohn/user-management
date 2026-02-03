import { useEffect, useState } from "react";
import type { User, UsersWithSelection } from "../entities/types";
import Row from "./Row";
import Controls from "./Controls";
import { deleteUnverified, deleteUsers, getUsers } from "../entities/api/users.api";
import { ProtectedRoute } from "./ProtectedRoute";
import { getIsTokenTruthy } from "../entities/lib/getIsTokenTruthy";

export default function UsersTable() {
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [users, setUsers] = useState<UsersWithSelection[]>([]);
	const fetchUsers = () => {
		getUsers().then((res) => {
			const usersWithSelection = res.data.users.map((user: User) => ({ ...user, selected: false }));
			setUsers(usersWithSelection);
		});
	};

	const allChecked = users.length > 0 && users.every((user) => user.selected);

	const toggleAllChecked = (value: boolean) => {
		setUsers((prev) => prev.map((u) => ({ ...u, selected: value })));
	};
	const toggleRowChecked = (index: number, value: boolean) => {
		setUsers((prev) => {
			const newUsers = [...prev];
			newUsers[index] = { ...newUsers[index], selected: value };
			return newUsers;
		});
	};

	const deleteSelectedUsers = () => {
		const selectedUsers = users.map((user) => {
			if (user.selected) return user.id;
		});
		if (selectedUsers.length) {
			deleteUsers(selectedUsers as number[])
				.then((res) => {
					if (!res.success) throw new Error(res.message);
				})
				.catch((error) => {
					if (error instanceof Error) {
						console.error(error.message);
						setErrorMsg(error.message);
					}
				});
		}
	};
	const deleteUnverifiedUsers = () => {
		deleteUnverified()
			.then((res) => {
				if (!res.success) throw new Error(res.message);
			})
			.catch((error) => {
				if (error instanceof Error) {
					console.error(error.message);
					setErrorMsg(error.message);
				}
			});
	};
	const blockSelectedUsers = () => {
		setUsers((prev) => prev.map((u) => (u.selected ? { ...u, status: "blocked", selected: false } : u)));
	};

	const unblockSelectedUsers = () => {
		setUsers((prev) => prev.map((u) => (u.selected ? { ...u, status: "unverified", selected: false } : u)));
	};

	useEffect(() => fetchUsers(), []);

	return (
		<ProtectedRoute isProtected={!getIsTokenTruthy()} redirect="/login">
			<>
				<Controls deleteSelectedUsers={deleteSelectedUsers} unblockSelectedUsers={unblockSelectedUsers} blockSelectedUsers={blockSelectedUsers} deleteUnverifiedUsers={deleteUnverifiedUsers} />
				<span className="d-block top-0 position-fixed bg-white w-100" style={{ zIndex: 1, height: "86.5px" }}></span>
				<table className="table">
					<colgroup>
						<col style={{ width: "40px" }} />
						<col style={{ width: "25%" }} />
						<col style={{ width: "25%" }} />
						<col style={{ width: "25%" }} />
					</colgroup>
					<thead className="table-dark fixed position-sticky fs-md-6" style={{ top: "46px", zIndex: 2 }}>
						<tr>
							<th>
								<input className="m-1 form-check-input" role="button" type="checkbox" value="" aria-label="Checkbox for following cell" onChange={(e) => toggleAllChecked(e.target.checked)} checked={allChecked} />
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Status</th>
							<th>Last Seen</th>
						</tr>
					</thead>
					<tbody className="align-items-center">
						{users.map((user, currentRowIndex) => (
							<Row user={user} checked={user.selected} onChange={(value) => toggleRowChecked(currentRowIndex, value)} key={user.email} />
						))}
					</tbody>
				</table>
				{errorMsg && (
					<div className="alert alert-danger" role="alert">
						{errorMsg}
					</div>
				)}
			</>
		</ProtectedRoute>
	);
}
