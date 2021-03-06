
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Dashboard from "../src/layout/DashboardLayout";
import LoginPage from "./pages/Widget";

export const DefaultRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
         <Route
          path="/"
          element={<LoginPage />}
        />
      </Routes>
    </Router>
  )
}

export default DefaultRouter;