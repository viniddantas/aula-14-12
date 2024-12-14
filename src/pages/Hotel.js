import { useState } from "react";


function Hotel() {    

    const [mensagem, setMensagem] = useState("")
    const [reserva, setReserva] = useState()
    
    const reservar = () => {

        if (reserva == 1 || reserva == 2) {
            setMensagem("Essa reserva ja foi realizada por outra pessoa");

        } else if(reserva == 3){
            setMensagem("Reserva realizada com sucesso");
        } else {
            setMensagem("Esse codigo de reserva não existe")
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "fit-content", margin: "10% auto"}}>
            <h1>Reserva de Hotel</h1>
            <input
                type="text"
                placeholder="Digite seu nome"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
            <input
                type="date"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
            <input
                type="number"
                placeholder="Digite seu rg"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />    
            <input
                type="number"
                placeholder="Digite seu cpf"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />           
            <input
                type="text"
                placeholder="Digite seu endereço"
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
            <input
                type="number"
                placeholder="Digite o numero da reserva"
                onChange={(e) => setReserva(e.target.value)}
                style={{ padding: "10px", width: "300px", marginBottom: "10px", border: "solid red" }}
            />
            <button style={{padding: "10px"}} onClick={reservar}>Reservar</button>

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
    );
}

export default Hotel;
