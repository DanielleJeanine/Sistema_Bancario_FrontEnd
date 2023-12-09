import Input from '../Input';
import './modalDeposito.css'

export default function ModalDeposito() {

    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Depósito</h1>
                    <form>
                    <Input
                            label='Numero da Conta: '
                            type='text'
                            name='conta'
                            placeholder='Informe o numero da conta que deseja depositar'
                        />

                        <Input
                            label='Valor do Depósito (R$): '
                            type='number'
                            name='saque'
                            placeholder='R$ 0.00'
                            step="0.01"
                        />

                        <div className='botoes'>
                            <button className='confirmar'>Confirmar</button>
                            <button className='cancelar'>Cancelar</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );

}