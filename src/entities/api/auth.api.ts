import { apiFetch } from "../client";

export const login = (email: string, password: string) =>
	apiFetch("/auth/login", {
		method: "POST",
		body: JSON.stringify({ email, password }),
	});

export const register = (name: string, email: string, password: string) =>
	apiFetch("/auth/register", {
		method: "POST",
		body: JSON.stringify({ name, email, password }),
	});

export const getMe = () => apiFetch("/auth/me");
