import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <Routes>
      {/* Default route: Redirect to login if no matching route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Defined routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />

      {/* Handle unknown routes */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;