
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Settings from "../pages/Settings";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return  <>
   <Routes> 
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
</>
}

export default App;