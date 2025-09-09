import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/register", { email, password });
            alert("Usuário criado!");
        } catch (err) {
            alert("Erro ao registrar");
        }
    };

    return (
        <div className="bg-brand-black text-brand-white min-h-screen flex items-center justify-center">
            <form
                onSubmit={register}
                className="max-w-md w-full mx-auto mt-16 p-8 border border-brand-gray rounded shadow-lg bg-gray-900"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Registro
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
                    Registrar
                </button>
            </form>
        </div>
    );
}