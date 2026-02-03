import { getIsTokenTruthy } from "../entities/lib/getIsTokenTruthy";
import { ProtectedRoute } from "../widgets/ProtectedRoute";
import UsersTable from "../widgets/UsersTable";

export default function App() {
	return (
		<ProtectedRoute isProtected={!getIsTokenTruthy()} redirect="/login">
			<div className="d-flex flex-column align-items-center gap-1 p-1 w-100 min-vh-100">
				<UsersTable />
			</div>
		</ProtectedRoute>
	);
}
