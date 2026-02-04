import { useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../entities/api/auth.api";
import { ProtectedRoute } from "../widgets/ProtectedRoute";
import { getIsTokenTruthy } from "../entities/lib/getIsTokenTruthy";

export default function Login() {
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [isSuccess, setSuccess] = useState<boolean>(false);
	const form = useRef(null);
	async function submit(e: FormEvent) {
		// @ts-ignore
		if (!form.current?.checkValidity?.()) {
			e.preventDefault();
			e.stopPropagation();
		}
		// @ts-ignore
		form.current!.classList?.add("was-validated");
		const { email, password } = {
			//@ts-ignore
			email: form.current!.querySelector("#email").value,
			//@ts-ignore
			password: form.current!.querySelector("#password").value,
		};
		e.preventDefault();
		try {
			const res = await login(email, password);
			if (!res.success) {
				throw new Error(res.message);
			}
			localStorage.setItem("token", res.data.token);
			setSuccess(true);
			navigate("/");
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(error);
				setErrorMsg(error.message);
			}
		}
	}
	return (
		<ProtectedRoute isProtected={getIsTokenTruthy()} redirect="/">
			<form className="d-flex flex-column gap-4 p-4 border rounded-2 needs-validation" style={{ width: "20%" }} action="" onSubmit={submit} noValidate ref={form} method="POST">
				<h1 className="m-0">Login</h1>
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
					<input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" autoComplete="current-password" required />
					<p className="invalid-feedback">Please provide a password</p>
				</div>
				{errorMsg && <span className="text-danger">{errorMsg}</span>}
				{isSuccess && <span className="text-success">Registration successful, please login</span>}
				<Link to="/register" className="text-center">
					Don't have an account? Register
				</Link>
				<button type="submit" className="btn btn-primary align-self-end">
					Login
				</button>
			</form>
		</ProtectedRoute>
	);
}
