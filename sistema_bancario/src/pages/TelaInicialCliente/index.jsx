import { useNavigate } from 'react-router-dom';
import './telaInicialCliente.css';
import saque from '../../assets/saque.png';
import deposito from '../../assets/deposito.png';
import trasnferencia from '../../assets/transferencia.png';
import detalhes from '../../assets/detalhes.png';

export default function TelaInicialCliente() {
    const navigate = useNavigate();

    function sacar() {
        navigate('/saque');
    }

    return (
        <>
            <main>
                <header className="cabecalho" >
                    <h1>Tela Inicial Cliente</h1>
                    <h3>Bem vindo(a), Cliente</h3>
                </header>

                <div className='menu_cliente'>
                    <h1>MENU</h1>
                    <div className="icones_operacoes">
                        <div className='fileira1'>
                            <button>Visualizar Saldo</button>
                            <div className='div_dados'>
                                <img src={detalhes} alt="" />
                                <p>Ver dados detalhados</p>
                            </div>
                        </div>
                        <div className='fileira2'>
                            <div className='div_saque'>
                                <img src={saque} alt="" onClick={sacar} />
                                <p>Realizar Saque</p>
                            </div>
                            <div className='div_deposito'>
                                <img src={deposito} alt="" />
                                <p>Realizar Depósito</p>
                            </div>
                            <div className='div_transferencia'>
                                <img src={trasnferencia} alt="" />
                                <p>Realizar Transferência</p>
                            </div>

                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}