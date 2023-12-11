import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import deposito from '../../assets/deposito.png';
import detalhes from '../../assets/detalhes.png';
import extrato from '../../assets/extrato.png';
import saque from '../../assets/saque.png';
import trasnferencia from '../../assets/transferencia.png';
import './telaInicialCliente.css';

export default function TelaInicialCliente() {
   
    const { id } = useParams();
    const [cliente, setCliente] = useState();
    const [conta, setConta] = useState([]);
    const navigate = useNavigate();
    const idConta = conta[0]?.id;


    function verDetalhes(idCliente){
        navigate(`/detalhesCliente/${idCliente}`);
    }

    function sacar() {
        navigate(`/saque/${idConta}`);
    }

    function depositar(){
        navigate(`/deposito`)
    }

    function transferir(){
        navigate(`/transferencia/${idConta}`);
    }

    function verExtrato(){
        navigate(`/extrato/${idConta}`)
    }

    useEffect(() =>{
        fetch(`http://localhost:8080/conta/all/${id}`)
        .then((resposta) => resposta.json())
        .then((resposta_convertida) => setConta(resposta_convertida))
        .catch((erro) => {
            console.error("Erro ao obter detalhes da conta:", erro);
        });
    }, [id]);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/cliente/perfil/${id}`)
                .then((resposta) => resposta.json())
                .then((resposta_convertida) => setCliente(resposta_convertida))
                .catch((erro) => {
                    console.error("Erro ao obter detalhes do cliente:", erro);
                });
        }
    }, [id]);

    return (
        <>
            <main>
                <header className="cabecalho" >
                    <h1>Tela Inicial Cliente</h1>
                    <h3>Bem vindo(a)</h3>
                    <h2>{cliente?.nome}</h2>
                </header>

                <div className='menu_cliente'>

                    <div className="icones_operacoes">
                        <div className='fileira1'>
                            <h3>Dados da Conta</h3>
                            <p>
                                <span>Número: </span>
                                {conta[0]?.numeroDaConta}
                            </p>
                            <p>
                                <span>Saldo: </span>
                                R$ {conta[0]?.saldo}
                            </p>

                            <p>
                                <span>Tipo de Conta: </span>
                                {conta[0]?.tipoDaConta}
                            </p>
                        </div>
                        <div className='fileira2'>

                            <div className='div_dados'>
                                <img src={detalhes} alt="" onClick={() => verDetalhes(id)} />
                                <p>Ver dados detalhados</p>
                            </div>
                            <div className='div_saque'>
                                <img src={saque} alt="" onClick={sacar} />
                                <p>Realizar Saque</p>
                            </div>
                            <div className='div_deposito'>
                                <img src={deposito} alt="" onClick={depositar} />
                                <p>Realizar Depósito</p>
                            </div>
                            <div className='div_transferencia'>
                                <img src={trasnferencia} alt="" onClick={transferir} />
                                <p>Realizar Transferência</p>
                            </div>
                            <div className='div_extrato'>
                                <img src={extrato} alt="" onClick={verExtrato} />
                                <p> Visualizar Extrato</p>
                            </div>

                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}