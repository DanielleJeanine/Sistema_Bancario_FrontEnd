import './style.css';

export default function Tabela({listar}, props) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listar.map((cliente, index)=>(
                            <tr key={index}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}