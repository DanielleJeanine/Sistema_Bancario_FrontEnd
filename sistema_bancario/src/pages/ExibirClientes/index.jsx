import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela";
import './exibirClientes.css'

export default function ExibirCliente(){

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/funcionario/allclientes")
        .then(resposta => resposta.json())
        .then(resposta_convertida => setClientes(resposta_convertida));

    }, []);

    return(
        <>
        <main className="tela_principal">
            <div className="titulo">
                <h1>Lista de Clientes</h1>
            </div>
            <div className="tabela_clientes">
                <Tabela listar={clientes} />
            </div>
        </main>
        </>
    );
}