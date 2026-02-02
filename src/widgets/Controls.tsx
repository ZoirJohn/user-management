export default function Controls({ deleteUsers, blockUsers }: { deleteUsers: () => void; blockUsers: () => void }) {
	return (
		<div className="d-flex justify-content-start w-100 gap-2 position-sticky" style={{ top: "4px", zIndex: 2 }}>
			<button type="button" className="btn btn-outline-primary" style={{ transition: "all 300ms" }} onClick={blockUsers}>
				<i className="bi bi-lock-fill me-1"></i>
				Block
			</button>
			<button type="button" className="btn btn-outline-primary" style={{ transition: "all 300ms" }}>
				<i className="bi bi-unlock-fill"></i>
			</button>
			<button type="button" className="btn btn-outline-danger" style={{ transition: "all 300ms" }} onClick={deleteUsers}>
				<i className="bi bi-trash-fill"></i>
			</button>
			<button type="button" className="btn btn-outline-danger" style={{ transition: "all 300ms" }}>
				<i className="bi bi-x-circle-fill"></i>
			</button>
		</div>
	);
}
