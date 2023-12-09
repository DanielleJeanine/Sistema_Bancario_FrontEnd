import { useNavigate } from "react-router-dom";
import './tabela.css';


export default function Tabela({listar}) {

    const navigate = useNavigate();

    function verDetalhes(idCliente) {
        navigate(`/detalhesCliente/${idCliente}`);
    }
    
    


    return (
        <>
        
            <table className='tabela'>
                <thead className='cabecalho'>
                    <tr>
                        <th className='nome'>Nome</th>
                        <th className='cpf'>Cpf</th>
                        <th className='email'>Email</th>
                        <th>Ver Detalhes</th>
                    </tr>
                </thead>

                <tbody className='corpo'>
                    {
                        listar.map((cliente, index)=>(
                            <tr key={index}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>
                                <td><button onClick={() => verDetalhes(cliente.id)}>Ver detalhes</button></td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}