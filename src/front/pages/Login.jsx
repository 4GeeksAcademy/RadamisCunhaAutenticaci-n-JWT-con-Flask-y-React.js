import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(import.meta.env.VITE_BACKEND_URL)
        const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!resp.ok) {
            alert("Datos incorrectos");
            return
        }
        const data = await resp.json();

        sessionStorage.setItem("token", data.access_token);

        navigate("/private");
    };

    return (
        <div className="container-sm w-25 p-3">
            <div className="login-box">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" id="inputEmail4" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" id="inputPassword4" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <Link to={"/registro"}>Registrarse</Link>

            </div>

        </div>

    )
}