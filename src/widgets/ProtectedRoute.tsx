import type { JSX } from "react";
import { Navigate } from "react-router";

export function ProtectedRoute({ children, isProtected, redirect }: { children: JSX.Element; isProtected: boolean; redirect: string }) {
	if (isProtected) return <Navigate to={redirect} replace />;
	return children;
}
