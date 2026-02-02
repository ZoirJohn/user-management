import { useNavigate } from "react-router";

export async function getUsers() {
	const navigate = useNavigate();
	try {
		const token = localStorage.getItem("token");

		const response = await fetch("http://localhost:5000/api/users", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (!data.success && data.redirect === "/login") {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			navigate("/login", { replace: true });
		}
	} catch (error) {
		console.error("Error getting users:", error);
	}
}
