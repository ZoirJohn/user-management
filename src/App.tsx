import { Fragment } from "react/jsx-runtime";
import { data } from "./entities/data";
import UsersTable from "./widgets/UsersTable";

export default function App() {
	return (
		<Fragment>
			<Controls />
			<UsersTable users={data} />
		</Fragment>
	);
}
