import type { JSX } from "react";
import { Navigate } from "react-router";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
	const token = localStorage.getItem("token");
	if (!token) return <Navigate to="/login" replace />;
	return children;
}
