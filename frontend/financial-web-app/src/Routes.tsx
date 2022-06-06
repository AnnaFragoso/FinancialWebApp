
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/Widget";

export const DefaultRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/welcome"
          element={<App />}
        />
         <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </Router>
  )
}

export default DefaultRouter;