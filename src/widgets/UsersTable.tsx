import { useState } from "react";
import Row from "./Row";
import type { User } from "../entities/types";
import { getLastActivity } from "../entities/lib/getLastActivity";

export default function UsersTable({ users }: { users: User[] }) {
	const [checkedRows, setCheckedRows] = useState<boolean[]>(new Array(users.length).fill(false));
	// const [sortBy, setSortBy] = useState<string>("email");

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
	console.log(getLastActivity(users[0].lastSeen));
	return (
		<table className="table w-50 mx-auto">
			<colgroup>
				<col style={{ width: "40px" }} />
			</colgroup>
			<thead className="fs-6 fixed table-dark sticky-header">
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
			<tbody className="align-items-center fs-5">
				{users.map((user, currentRowIndex) => (
					<Row user={user} checked={checkedRows[currentRowIndex]} onChange={(value) => toggleRowChecked(currentRowIndex, value)} key={user.email} />
				))}
			</tbody>
		</table>
	);
}

// minute, week, day
