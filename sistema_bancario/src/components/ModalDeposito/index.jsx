import { useState } from 'react';
import Input from '../Input';
import './modalDeposito.css';

export default function ModalDeposito() {

    
    const deposito = {
        "valor" : 0
    }
    
    const [id, setId] = useState();
    const [objDeposito, setObjDeposito] = useState(deposito);

    console.log(id);

    function pegarId(e){
        setId(e.target.value);

    }


    function aoDigitar(e) {
        const { name, value } = e.target;

            setObjDeposito(prevState => ({
                ...prevState,
                [name]: parseFloat(value)
            }));
    }


    const realizarDeposito = (elemento) => {
        elemento.preventDefault();
        fetch(`http://localhost:8080/deposito/realizar/${id}`, {
            method: 'post',
            body: JSON.stringify(objDeposito),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(retorno => retorno.json())
            .then(retorno_convertido => {
            console.log(retorno_convertido);})
            .catch((erro) => {
            console.error("Deposito não realiazado", erro);
        });
        document.getElementById('conta').value = '';
        document.getElementById('valor').value = '';
    }


    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Depósito</h1>
                    <form onSubmit={realizarDeposito}>
                    <Input
                            id='conta'
                            label='Id da Conta: '
                            type='text'
                            name='conta'
                            placeholder='Informe o id da conta que deseja depositar'
                            value={id}
                            aoDigitar={pegarId}
                        />

                        <Input
                            id='valor'
                            label='Valor do Depósito (R$): '
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