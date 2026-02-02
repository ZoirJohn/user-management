import { useState } from "react";
import type { User } from "../entities/types";
import Row from "./Row";
import Controls from "./Controls";

const data: User[] = [
	{
		name: "John Doe",
		email: "johndoe@email.com",
		status: "active",
		lastSeen: new Date("2026-03-31T12:00:00+05:00"),
	},
	{
		name: "Jane Smith",
		email: "janesmith@email.com",
		status: "unverified",
		lastSeen: new Date("2026-03-31T12:00:00+05:00"),
	},
	{
		name: "Bob Johnson",
		email: "bobjohnson@email.com",
		status: "blocked",
		lastSeen: new Date("2026-03-31T12:00:00+05:00"),
	},
];

export default function UsersTable() {
	const [users, setUsers] = useState<User[]>(data);
	const [checkedRows, setCheckedRows] = useState<boolean[]>(new Array(users.length).fill(false));

	const allChecked = checkedRows.length > 0 && checkedRows.every(Boolean);
	const toggleAllChecked = (value: boolean) => {
		setCheckedRows(new Array(users.length).fill(value));
	};
	const toggleRowChecked = (index: number, value: boolean) => {
		setCheckedRows((prev) => {
			const newCheckedRows = [...prev];
			newCheckedRows[index] = value;
			return newCheckedRows;
		});
	};
	const deleteSelectedUsers = () => {
		const newUsers = [...users.filter((_, i) => !checkedRows[i])];
		setUsers(newUsers);
		setCheckedRows(new Array(users.length).fill(false));
	};
	const blockSelectedUsers = () => {
		const newUsers = [
			...users.map((user, i) => {
				if (checkedRows[i]) user.status = "blocked";
				return user;
			}),
		];
		setUsers(newUsers);
		setCheckedRows(new Array(users.length).fill(false));
	};
	return (
		<>
			<Controls deleteUsers={deleteSelectedUsers} blockUsers={blockSelectedUsers} />
			<span className="d-block bg-white w-100 position-fixed top-0" style={{ zIndex: 1, height: "86.5px" }}></span>
			<table className="table">
				<colgroup>
					<col style={{ width: "40px" }} />
					<col style={{ width: "25%" }} />
					<col style={{ width: "25%" }} />
					<col style={{ width: "25%" }} />
				</colgroup>
				<thead className="fs-md-6 fixed table-dark position-sticky" style={{ top: "46px", zIndex: 2 }}>
					<tr>
						<th>
							<input className="form-check-input m-1" role="button" type="checkbox" value="" aria-label="Checkbox for following cell" onChange={(e) => toggleAllChecked(e.target.checked)} checked={allChecked} />
						</th>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Last Seen</th>
					</tr>
				</thead>
				<tbody className="align-items-center">
					{users.map((user, currentRowIndex) => (
						<Row user={user} checked={checkedRows[currentRowIndex]} onChange={(value) => toggleRowChecked(currentRowIndex, value)} key={user.email} />
					))}
				</tbody>
			</table>
		</>
	);
}
