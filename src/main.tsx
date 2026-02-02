import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./css/style.css";
import Register from "./pages/Register.tsx";
import { ProtectedRoute } from "./widgets/ProtectedRoute.tsx";
import VerifyEmail from "./pages/VerifyEmail.tsx";

const isPublic = !localStorage.getItem("token");
const isPrivate = !localStorage.getItem("token");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoute children={<Home />} isProtected={isPrivate} />} />
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />} />
				<Route path="/verify-email" element={<VerifyEmail />} />
				<Route path="*" element={<Navigate to="/not-found" />} />
				<Route path="/not-found" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
