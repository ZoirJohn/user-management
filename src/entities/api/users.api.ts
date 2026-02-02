import { apiFetch } from "../client";

export const getUsers = () => apiFetch("/users");

export const blockUsers = (ids: number[]) =>
	apiFetch("/users/block", {
		method: "POST",
		body: JSON.stringify({ userIds: ids }),
	});

export const unblockUsers = (ids: number[]) =>
	apiFetch("/users/unblock", {
		method: "POST",
		body: JSON.stringify({ userIds: ids }),
	});

export const deleteUsers = (ids: number[]) =>
	apiFetch("/users", {
		method: "DELETE",
		body: JSON.stringify({ userIds: ids }),
	});

export const deleteUnverified = () => apiFetch("/users/unverified", { method: "DELETE" });
