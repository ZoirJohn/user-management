import type { JSX } from "react";
import { Navigate } from "react-router";

export function ProtectedRoute({ children, isProtected }: { children: JSX.Element; isProtected: boolean }) {
	if (isProtected) return <Navigate to="/login" replace />;
	return children;
}
