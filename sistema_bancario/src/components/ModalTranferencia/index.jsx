import Input from '../Input';
import './modalTransferencia.css'

export default function ModalTransferencia() {

    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Transferência</h1>
                    <form>
                    <Input
                            label='Numero da Conta: '
                            type='text'
                            name='conta'
                            placeholder='Informe o numero da conta para qual deseja transferir'
                        />

                        <Input
                            label='Valor da Transferencia (R$): '
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