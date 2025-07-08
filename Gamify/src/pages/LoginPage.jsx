import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (!role) return;

    if (role === 'admin') {
      Cookies.set('id', 'admin', { expires: 7 });
    } else if(role === 'super-admin'){
      Cookies.set('id', 'super-admin', { expires: 7 });
    } else {
      Cookies.set('id', 'user', { expires: 7 });
    }

    window.location.href = "/dashboard";

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
          Select Login Role
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
        >
          <option value="">-- Choose Role --</option>
          <option value="admin">Admin</option>
          <option value="super-admin">Super Admin</option>
          <option value="user">User</option>
        </select>

        <button
          onClick={handleLogin}
          disabled={!role}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
            role
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
}
