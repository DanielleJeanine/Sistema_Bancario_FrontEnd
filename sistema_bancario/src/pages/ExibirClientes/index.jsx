import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela";

export function ExibirCliente(){

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/funcionario/allclientes")
        .then(resposta => resposta.json())
        .then(resposta_convertida => setClientes(resposta_convertida));

    }, []);

    return(
        <>
        <main>
            <div>
                <h1>Lista de Clientes</h1>
            </div>
            <div>
                <Tabela listar={clientes} />
            </div>
        </main>
        </>
    );
}