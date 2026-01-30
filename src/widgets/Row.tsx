export default function Row({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) {
	return (
		<tr>
			<td>
				<input className="form-check-input ms-1 me-1" role="button" type="checkbox" aria-label="Checkbox for following cell" onChange={(e) => onChange(e.target.checked)} checked={checked} />
			</td>
			<td>John</td>
			<td>Doe</td>
			<td>Email</td>
		</tr>
	);
}
