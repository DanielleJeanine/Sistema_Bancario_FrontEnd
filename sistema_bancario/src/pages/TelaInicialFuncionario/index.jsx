import './telaInicialFuncionario.css';
import fichaCadastroCliente from '../../assets/fichaCadastroCliente.png';
import fichaCadastroFuncionario from '../../assets/fichaCadastroFuncionario.png';
import editar from '../../assets/editar.png';
import { useNavigate } from 'react-router-dom';


export default function TelaInicialFuncionario(){

    const navigate=useNavigate();

    function cadastrarCliente(){
        navigate("/cadastroCliente");
    }

    function cadastrarFuncionario(){
        navigate("/cadastroFuncinario")
    }

    function editarCliente(){
        navigate("/exibircliente");
    }

    return (
        <>
            <main>
                <header className="cabecalho" >
                    <h1>Tela Inicial Funcionário</h1>
                    <h3>Bem vindo(a)</h3>
                </header>

                <div className='menu_funcionario'>

                    <div className="icones_operacoes">
                        <div className='fileira2'>

                            <div className='div_cadastro_cliente'>
                                <img src={fichaCadastroCliente} alt="" onClick={cadastrarCliente} />
                                <p>Cadastrar Cliente</p>
                            </div>
                            <div className='div_cadastro_funcionario'>
                                <img src={fichaCadastroFuncionario} alt="" onClick={cadastrarFuncionario} />
                                <p>Cadastrar Funcionário</p>
                            </div>
                            <div className='div_editar_cliente'>
                                <img src={editar} alt="" onClick={editarCliente} />
                                <p> Editar Cliente</p>
                            </div>

                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}