import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './tabelaExtrato.css';

export default function TabelaExtrato() {
    const [dados, setDados] = useState({
        saques: [],
        depositos: [],
        transferencias: [],
    });

    const { id } = useParams();

    useEffect(() => {
        // Chame a API aqui para obter os dados e atualize o estado
        fetch(`http://localhost:8080/conta/extrato/${id}`)
            .then(response => response.json())
            .then(data => setDados(data))
            .catch(error => console.error('Erro ao obter dados:', error));
    }, [id]);

    return (
        <>
            <main className='tela_principal'>
                <div className='principal'>
                    <h2>Tabela de Operações</h2>

                    <h3>Saques</h3>
                    <table className='tabela_2'>
                        <thead className='cabecalho_2'>
                            <tr>
                                <th>Data</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody className='corpo_2'>
                            {dados.saques.map((saque, index) => (
                                <tr key={index}>
                                    <td>{saque.data}</td>
                                    <td>R${saque.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Depósitos</h3>
                    <table className='tabela_2'>
                        <thead className='cabecalho_2'>
                            <tr>
                                <th>Data</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody className='corpo_2'>
                            {dados.depositos.map((deposito, index) => (
                                <tr key={index}>
                                    <td>{deposito.data}</td>
                                    <td>{deposito.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Transferências</h3>
                    <table className='tabela_2'>
                        <thead className='cabecalho_2'>
                            <tr>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Conta Origem</th>
                                <th>Conta Destino</th>
                            </tr>
                        </thead>
                        <tbody className='corpo_2'>
                            {dados.transferencias.map((transferencia, index) => (
                                <tr key={index}>
                                    <td>{transferencia.data}</td>
                                    <td>{transferencia.valor}</td>
                                    <td>{transferencia.contaOrigem}</td>
                                    <td>{transferencia.contaDestino}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

