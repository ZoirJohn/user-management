export default function Controls({ unblockSelectedUsers, blockSelectedUsers, deleteSelectedUsers, logout }: { unblockSelectedUsers: () => void; blockSelectedUsers: () => void; deleteSelectedUsers: () => void; deleteUnverifiedUsers: () => void; logout: () => void }) {
	return (
		<div className="d-flex justify-content-start w-100 gap-2 position-sticky" style={{ top: "4px", zIndex: 2 }}>
			<button type="button" className="btn btn-outline-primary" style={{ transition: "all 300ms" }} onClick={blockSelectedUsers}>
				<i className="bi bi-lock-fill me-1"></i>
				Block
			</button>
			<button type="button" className="btn btn-outline-primary" style={{ transition: "all 300ms" }} onClick={unblockSelectedUsers}>
				<i className="bi bi-unlock-fill"></i>
			</button>
			<button type="button" className="btn btn-outline-danger" style={{ transition: "all 300ms" }} onClick={deleteSelectedUsers}>
				<i className="bi bi-trash-fill"></i>
			</button>
			<button type="button" className="btn btn-outline-danger" style={{ transition: "all 300ms" }} onClick={deleteSelectedUsers}>
				<i className="bi bi-x-circle-fill"></i>
			</button>
			<button type="button" className="ms-auto btn btn-secondary" onClick={logout}>
				Logout
			</button>
		</div>
	);
}
