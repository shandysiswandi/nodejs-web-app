import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import InputWithLabel from "../components/InputWithLabel";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center">Masuk</h1>
        <h1 className="text-sm mb-6 text-center">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-semibold hover:text-blue-700"
          >
            Daftar
          </Link>
        </h1>
        <div className="mb-4">
          <InputWithLabel
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukan email Anda"
          />
        </div>
        <div className="mb-6">
          <InputWithLabel
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukan password Anda"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handleLogin} children="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
