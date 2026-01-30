import { useState } from "react";
import Row from "./widgets/Row";

export default function App() {
	const [checked, setChecked] = useState<boolean[]>([false, true]);

	const allChecked = checked.length > 0 && checked.every(Boolean);

	const toggleAllChecked = (value: boolean) => {
		setChecked(new Array(checked.length).fill(value));
	};
	const toggleRowChecked = (index: number, value: boolean) => {
		setChecked((prev) => {
			const next = [...prev];
			next[index] = value;
			return next;
		});
	};
	return (
		<table className="table table-bordered w-50 mx-auto">
			<colgroup>
				<col style={{ width: "40px" }} />
			</colgroup>
			<thead className="fs-6 fixed table-dark sticky-header">
				<tr>
					<th>
						<input className="form-check-input m-1" role="button" type="checkbox" value="" aria-label="Checkbox for following cell" onChange={(e) => toggleAllChecked(e.target.checked)} checked={allChecked} />
					</th>
					<th>First</th>
					<th>Last</th>
					<th>Handle</th>
				</tr>
			</thead>
			<tbody className="align-items-center fs-5">
				{checked.map((_, index) => (
					<Row checked={checked[index]} onChange={(value) => toggleRowChecked(index, value)} key={crypto.randomUUID()} />
				))}
			</tbody>
		</table>
	);
}
