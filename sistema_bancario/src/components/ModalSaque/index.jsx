import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../Input';
import './modalSaque.css';

export default function ModalSaque() {

    const saque = {
        "valor" : 0
    }
    
    const {id} = useParams();
    const [objSaque, setObjSaque] = useState(saque);


    function aoDigitar(e) {
        const { name, value } = e.target;

            setObjSaque(prevState => ({
                ...prevState,
                [name]:parseFloat(value)
            }));
    }


    const realizarSaque = (elemento) => {
        elemento.preventDefault();
        fetch(`http://localhost:8080/saque/saque/${id}`, {
            method: 'post',
            body: JSON.stringify(objSaque),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(retorno => retorno.json())
            .then(retorno_convertido => {
            console.log(retorno_convertido);})
            .catch((erro) => {
            console.error("Saque não realizo", erro);
        });
        document.getElementById('valor').value = '';
    }

    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Saque</h1>
                    <form onSubmit={realizarSaque}>
                        <Input
                            id='valor'
                            label='Valor do Saque (R$): '
                            type='text'
                            name='valor'
                            placeholder='R$ 0.00'
                            aoDigitar={aoDigitar}
                        />

                        <div className='botoes'>
                            <button className='confirmar'>Confirmar</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );

}