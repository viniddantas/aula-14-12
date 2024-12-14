import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function Login() {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("");
    
    const navigate = useNavigate();

    const autenticar = () => {

        const credenciaisSalvas = JSON.parse(localStorage.getItem("credenciais")) || {};

        if (usuario === credenciaisSalvas.usuario && senha === credenciaisSalvas.senha) {
            setMensagem("Login realizado com sucesso!");
            setTimeout(() => navigate("/Reserva"), 1500);
        } else {
            setMensagem("Usuário ou senha incorretos.");
        }
    };

    const cadastrar = () => {
        if (usuario.trim() === "" || senha.trim() === "") {
            setMensagem("Por favor, preencha todos os campos.");
            return;
        }

        localStorage.setItem("credenciais", JSON.stringify({ usuario, senha }));
        setMensagem("Usuário cadastrado com sucesso!");
        
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "fit-content", margin: "10% auto"}}>
            <h1>Tela de Login</h1>
            <input
                type="text"
                placeholder="Digite seu usuário"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite seu usuário"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                onChange={(e) => setSenha(e.target.value)}
            />

            <button 
                style={{padding: "10px"}} 
                onClick={autenticar}
            
            >Login</button>
            <button 
                style={{padding: "10px"}}
                onClick={cadastrar}
            >Cadastrar</button>

        {mensagem && ( // Renderiza a mensagem apenas se houver conteúdo em `mensagem`.
                <p
                    style={{
                        color: mensagem.includes("sucesso") ? "green" : "red",
                        // Define a cor verde para mensagens de sucesso e vermelho para erros.
                    }}
                >
                    {mensagem}
                </p>
            )}
        </div>
    )
} 

export default Login