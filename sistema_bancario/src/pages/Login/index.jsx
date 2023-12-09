import Input from "../../components/Input";
import './login.css';

export default function Login() {

    return (
        <>
            <main className="container">
                <section>
                    <div className="caixa_login">
                        <form className="formulario">
                            <div>
                                <Input
                                    label='Login: '
                                    type='text'
                                    name='login'
                                    placeholder='Digite seu login'
                                />
                            </div>
                            <div>
                                <Input
                                    label='Senha: '
                                    type='password'
                                    name='senha'
                                    placeholder='Digite sua senha'
                                />
                            </div>

                            <div className="enviar">
                            <button>Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}