import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importe o useParams corretamente

import './detalhesCliente.css';

export default function DetalhesCliente() {
    const { id } = useParams();

    const [cliente, setCliente] = useState();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/cliente/perfil/${id}`)
                .then((resposta) => resposta.json())
                .then((resposta_convertida) => setCliente(resposta_convertida))
                .catch((erro) => {
                    console.error("Erro ao obter detalhes do cliente:", erro);
                    // Lida com o erro, por exemplo, redireciona para uma página de erro ou exibe uma mensagem ao usuário
                });
        }
    }, [id]);
    

    return (
        <>
            <main className='principal'>
                <section >
                    <div className='dados'>
                        <h1>Dados Pessoais</h1>
                        <div className='fileira'>
                            <p>
                                <span>Nome:</span>
                                {cliente?.nome}
                            </p>
                            <p>
                                <span>Email: </span>
                                {cliente?.email}
                            </p>
                            <p>
                                <span>Telefone:</span>
                                {cliente?.telefone}
                            </p>
                        </div>
                        <div>
                            <h1>Endereço</h1>
                            <div className='fileira'>
                                <p>
                                    <span>Rua: </span>
                                    {cliente?.endereco.rua}
                                </p>
                                <p>
                                    <span>Numero:</span>
                                    {cliente?.endereco.numero}
                                </p>
                                <p>
                                    <span>Bairro:</span>
                                    {cliente?.endereco.bairro}
                                </p>
                            </div>

                            <div className='fileira'>
                                <p>
                                    <span>Cidade:</span>
                                    {cliente?.endereco.cidade}
                                </p>
                                <p>
                                    <span>UF:</span>
                                    {cliente?.endereco.estado}
                                </p>
                                <p>
                                    <span>CEP:</span>
                                    {cliente?.endereco.cep}
                                </p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
