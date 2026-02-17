import { useState } from "react"
import { Link } from "react-router-dom";


export const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/registre`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        setEmail(""), setPassword("")

        if (resp.ok) {
            alert("Usuario creado");
        } else {
            alert("Error en registro");
        }

    };

    return (
        <div className="container-sm w-25 p-3">
            <div class="registre-box">
                <h1>Registrarse</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" id="inputEmail4" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" id="inputPassword4" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" >Resgistrarse</button>
                </form>
                <Link to={"/Login"}>Iniciar Sesión</Link>

            </div>
        </div>

    )
}