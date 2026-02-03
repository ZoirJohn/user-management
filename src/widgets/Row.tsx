import { getLastActivity } from "../entities/lib/getLastActivity";
import type { User } from "../entities/types";

export default function Row({ checked, onChange, user: { email, last_login_time, name, status } }: { checked: boolean; onChange: (value: boolean) => void; user: User }) {
	return (
		<tr className="position-relative">
			<td>
				<input className="form-check-input ms-1 me-1" role="button" type="checkbox" aria-label="Checkbox for following cell" onChange={(e) => onChange(e.target.checked)} checked={checked} />
			</td>
			<td>{name}</td>
			<td>{email}</td>
			<td className="text-capitalize">
				<span className={"badge" + " " + (status === "active" ? "text-bg-success" : status === "unverified" ? "text-bg-warning" : "text-bg-danger")}>{status}</span>
			</td>
			<td>{getLastActivity(new Date(last_login_time))}</td>
			{status === "blocked" && <td className="position-absolute end-0 top-50 p-0 border-black" style={{ width: "98%", height: "1px" }}></td>}
		</tr>
	);
}
