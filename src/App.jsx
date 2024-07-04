import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/Login"
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RegisterPage />} index path="/" />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
