import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login"); 
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white rounded p-2 my-2 w-max"
    >
      Log Out
    </button>
  );
}
