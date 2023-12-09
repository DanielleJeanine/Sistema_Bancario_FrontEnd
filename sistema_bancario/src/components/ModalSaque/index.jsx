import Input from '../Input';
import './modalSaque.css';

export default function ModalSaque(props) {

    return (
        <>
            <main className='container'>
                <div className='container_reduzido' >
                    <h1>Saque</h1>
                    <form>
                        <Input
                            label='Valor do Saque (R$): '
                            type='number'
                            name='saque'
                            placeholder='R$ 0.00'
                            step="0.01"
                        />

                        <div className='botoes'>
                            <button className='confirmar'>Confirmar</button>
                            <button className='cancelar' onClick={props.fechar}>Cancelar</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );

}