import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import './inicio.css';
import { useState } from 'react';

export default function Inicio() {

    const [id, setId] = useState();
    const navigate = useNavigate();

    function pegarId(e){
        setId(e.target.value);

    }

    function entrarcomoCliente(idCliente) {
        navigate(`/inicialCliente/${idCliente}`);

    }



    return (
        <>
            <main className='main'>
                <h1>BEM VINDO(A)</h1>

                <div className='login_falso'>
                    <Input
                        label="Informe seu id:"
                        name="id"
                        type="text"
                        placeholder="Digite seu id"
                        value={id}
                        aoDigitar={pegarId}

                    />

                </div>

                <div className='entrar'>
                    <h3>Deseja entrar como:</h3>

                    <button>Funcionario</button>
                    <button onClick={() => entrarcomoCliente(id)}>Cliente</button>
                </div>
            </main>
        </>
    );
}