import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { verifyEmail } from "../entities/api/auth.api";

export default function VerifyEmail() {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const token = params.get("token");

		if (!token) {
			navigate("/login", { replace: true });
			return;
		}

		verifyEmail(token).finally(() => {
			navigate("/login", { replace: true });
		});
	}, []);

	return <p>Verifying email…</p>;
}
