import { useState } from "react";
import { useParams } from "react-router-dom";
import "./cadastrarConta.css";
import Input from "../../components/Input";

export default function CadastrarConta() {



    const { id } = useParams();
    const conta = {
        "numeroDaConta": " ",
        "statusAtivo": true,
        "tipoDeConta": "",
        "saldo": 0
    }

    const [objConta, setObjConta] = useState(conta);

    function aoDigitar(e) {
        const { name, value } = e.target;

        if (name === "saldo") {
            setObjConta(prevState => ({
                ...prevState,
                [name]: parseFloat(value)
            }));


        }

        setObjConta(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    function cadastroConta() {
        fetch(`http://localhost:8080/conta/cadastrar/${id}`, {
            method: 'post',
            body: JSON.stringify(objConta),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(retorno => retorno.json()).then(retorno_convertido => {
            console.log(retorno_convertido);
        })



    }

    return (
        <>
            <main>
                <div className="dados_bancarios">
                    <h2>Dados Bancarios</h2>
                    <form onSubmit={cadastroConta} >


                        <Input
                            label='Numero da Conta: '
                            type='text'
                            name='numeroDaConta'
                            placeholder='Informe numero da conta'
                            aoDigitar={aoDigitar}

                        />
                        <Input
                            label='Ativo: '
                            type='checkbox'
                            name='ativo'
                        />


                        <Input
                            label='Saldo: '
                            type='text'
                            name='saldo'
                            placeholder='Informe saldo inicial'
                            aoDigitar={aoDigitar}

                        />

                        <Input
                            label='Tipo de conta: '
                            type='text'
                            name='tipoDeConta'
                            placeholder='Tipo de Conta'
                            aoDigitar={aoDigitar}

                        />
                        <div className="botao">
                            <button>Cadastrar</button>
                        </div>

                    </form>

                </div>
            </main>
        </>
    );
}