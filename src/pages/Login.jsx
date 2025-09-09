import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/login", {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user);
            navigate("/");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch {
            alert("Login inválido");
        }
    };

    return (
        <div className="bg-brand-black text-brand-white min-h-screen flex items-center justify-center">
            <form
                onSubmit={login}
                className="max-w-md w-full mx-auto mt-16 p-8 border border-brand-gray rounded shadow-lg bg-gray-900"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Entrar na sua conta
                </h2>

                <label className="block mb-1 text-sm">Email</label>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    className="border border-brand-gray p-2 w-full rounded mb-4 text-sm bg-gray-800 outline-none focus:ring-2 focus:ring-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="block mb-1 text-sm">Senha</label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="border border-brand-gray p-2 w-full rounded mb-6 text-sm bg-gray-800 outline-none focus:ring-2 focus:ring-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-white text-black text-sm py-2 rounded hover:bg-gray-300 transition font-bold"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}