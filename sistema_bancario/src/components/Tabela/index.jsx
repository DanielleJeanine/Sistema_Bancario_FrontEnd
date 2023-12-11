import { useNavigate } from "react-router-dom";
import './tabela.css';


export default function Tabela({listar}) {

    const navigate = useNavigate();

    function verDetalhes(idCliente) {
        navigate(`/detalhesCliente/${idCliente}`);
    }

    function cadastrarConta(idCliente){
        navigate(`/cadastrarConta/${idCliente}`);
    }
    
    


    return (
        <>
        
            <table className='tabela'>
                <thead className='cabecalho'>
                    <tr>
                        <th>Id</th>
                        <th className='nome'>Nome</th>
                        <th className='cpf'>Cpf</th>
                        <th className='email'>Email</th>
                        <th>Ver Detalhes</th>
                        <th>Adicionar Conta</th>
                        {/* <th>Excluir</th> */}
                    </tr>
                </thead>

                <tbody className='corpo'>
                    {
                        listar.map((cliente, index)=>(
                            <tr key={index}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>
                                <td><button className="detalhes" onClick={() => verDetalhes(cliente.id)}>Ver detalhes</button></td>
                                <td><button className="detalhes" onClick={() => cadastrarConta(cliente.id)}>Adicionar Conta</button></td>
                                {/* <td><button className="excluir">Excluir</button></td> */}

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}