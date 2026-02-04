import { useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { register } from "../entities/api/auth.api";
import { ProtectedRoute } from "../widgets/ProtectedRoute";
import { getIsTokenTruthy } from "../entities/lib/getIsTokenTruthy";

export default function Register() {
	const [errorMsg, setErrorMsg] = useState<string>("");
	const navigate = useNavigate();
	const form = useRef(null);
	async function submit(e: FormEvent) {
		// @ts-ignore
		if (!form.current?.checkValidity?.()) {
			e.preventDefault();
			e.stopPropagation();
		}
		// @ts-ignore
		form.current!.classList?.add("was-validated");

		const { name, email, password } = {
			//@ts-ignore
			name: form.current!.querySelector("#name").value,
			//@ts-ignore
			email: form.current!.querySelector("#email").value,
			//@ts-ignore
			password: form.current!.querySelector("#password").value,
		};
		e.preventDefault();

		try {
			const res = await register(name, email, password);
			if (!res.success) {
				throw new Error(res.message);
			}
			navigate("/login");
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(error);
				setErrorMsg(error.message);
			}
		}
	}
	return (
		<ProtectedRoute isProtected={getIsTokenTruthy()} redirect="/">
			<form className="d-flex flex-column gap-4 p-4 border rounded-2 needs-validation" style={{ width: "20%" }} onSubmit={submit} noValidate ref={form} method="POST">
				<h1 className="m-0">Register</h1>
				<div>
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input type="text" className="form-control" id="name" required autoComplete="name" />
					<p className="invalid-feedback">Please provide a name</p>
				</div>
				<div>
					<label htmlFor="email" className="mb-0 form-label">
						Email
					</label>
					<input type="email" className="form-control" id="email" autoComplete="email" required />
					<p className="invalid-feedback">Please provide an email</p>
				</div>
				<div>
					<label htmlFor="password" className="mb-0 form-label">
						Password
					</label>
					<input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" autoComplete="new-password" required />
					<p className="invalid-feedback">Please provide a password</p>
				</div>
				{errorMsg && <span className="text-danger">{errorMsg}</span>}
				<Link to="/login" className="text-center">
					Already have an account? Login
				</Link>
				<button type="submit" className="align-self-end btn btn-primary">
					Register
				</button>
			</form>
		</ProtectedRoute>
	);
}
