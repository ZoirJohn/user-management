const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(path: string, options: RequestInit = {}) {
	const token = localStorage.getItem("token");
	const res = await fetch(`${API_URL}${path}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
			...options.headers,
		},
	});
	const data = await res.json();
	if (!res.ok && (res.status === 401 || data.redirect === "/login")) {
		localStorage.clear();
	}
	return data;
}
