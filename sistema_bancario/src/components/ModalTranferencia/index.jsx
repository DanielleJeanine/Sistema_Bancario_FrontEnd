import { useState } from 'react';
import Input from '../Input';
import './modalTransferencia.css'
import { useParams } from 'react-router-dom';

export default function ModalTransferencia() {

    const {idContaOrigem} = useParams();
    const transferencia = {
        "contaDestino":  {"id": 0},
        "valor": 0
    }

    const [objTransferencia, setObjTransferencia] = useState(transferencia);

    console.log(objTransferencia);

    function aoDigitar(e) {
        const { name, value } = e.target;
    
        if (name === 'id') {
            setObjTransferencia(prevState => ({
                ...prevState,
                contaDestino: {
                    ...prevState.contaDestino,
                    [name]: parseFloat(value)
                }
            }));
        } else if (name === 'valor') {
            setObjTransferencia(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }
    
    const realizarTransferencia = (elemento) => {
        elemento.preventDefault();
        fetch(`http://localhost:8080/transferencia/${idContaOrigem}`, {
            method: 'post',
            body: JSON.stringify(objTransferencia),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(retorno => retorno.json())
            .then(retorno_convertido => {
            console.log(retorno_convertido);})
            .catch((erro) => {
            console.error("Transferência não realiazada", erro);
        });
        document.getElementById('conta').value = '';
        document.getElementById('valor').value = '';
    }




    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Transferência</h1>
                    <form onSubmit={realizarTransferencia}>
                    <Input
                            id='conta'
                            label='Id da Conta: '
                            type='text'
                            name='id'
                            placeholder='Informe o numero da conta para qual deseja transferir'
                            aoDigitar={aoDigitar}
                        />

                        <Input
                            id='valor'
                            label='Valor da Transferencia (R$): '
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