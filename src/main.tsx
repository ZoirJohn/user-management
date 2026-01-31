import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./css/style.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<App />} />
				<Route path="*" element={<Navigate to="/not-found" />} />
				<Route path="/not-found" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
