import { getLastActivity } from "../entities/lib/getLastActivity";
import type { User } from "../entities/types";

export default function Row({ checked, onChange, user: { email, lastSeen, name, status } }: { checked: boolean; onChange: (value: boolean) => void; user: User }) {
	return (
		<tr>
			<td>
				<input className="form-check-input ms-1 me-1" role="button" type="checkbox" aria-label="Checkbox for following cell" onChange={(e) => onChange(e.target.checked)} checked={checked} />
			</td>
			<td>{name}</td>
			<td>{email}</td>
			<td className="text-capitalize">{status}</td>
			<td>{getLastActivity(lastSeen)}</td>
		</tr>
	);
}
