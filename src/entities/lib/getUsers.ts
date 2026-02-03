export async function getUsers() {
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
			window.location.href = "/login";
		}

		return data;
	} catch (error) {
		console.error("Error getting users:", error);
	}
}
