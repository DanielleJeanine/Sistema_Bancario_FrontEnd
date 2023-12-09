import { useEffect, useState } from "react";
import Input from "../../components/Input";
import "./cadastroCliente.css";

export default function CadastroCliente() {


    const cliente = {
        "nome": '',
        "cpf": '',
        "email": '',
        "data_nascimento": '',
        "enderecoCliente": {
            "cep": '',
            "estado": '',
            "cidade": '',
            "bairro": '',
            "rua": '',
            "complemento": ''
        },
        "conta": {
            "numeroDaConta": " ",
            "statusAtivo": true,
            "tipoDeConta": "",
            "saldo": 0
        }
    }


    const [objCliente, setObjCliente] = useState(cliente);


    function aoDigitar(e) {
        const { name, value, type } = e.target;

        if (type === 'date') {
            // Se o campo é do tipo date, o valor já é a data formatada
            setObjCliente(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (name.startsWith('endereco.')) {
            const enderecoField = name.split('.')[1];
            setObjCliente(prevState => ({
                ...prevState,
                enderecoCliente: {
                    ...prevState.enderecoCliente,
                    [enderecoField]: value
                }
            }));
        } else if (name.startsWith('conta.')) {
            const contaField = name.split('.')[1];
            setObjCliente(prevState => ({
                ...prevState,
                conta: {
                    ...prevState.conta,
                    [contaField]: value
                }
            }));

        } else {
            setObjCliente(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }


    const cadastrarCliente = (elemento) => {
        elemento.preventDefault();
        fetch("http://localhost:8080/cliente/cadastro", {
            method: 'post',
            body: JSON.stringify(objCliente),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(retorno => retorno.json()).then(retorno_convertido => {
            console.log(retorno_convertido);
        })

    }




    //Cadastro de Endereço
    const verificarNumero = (numero) => /^[0-9]+$/.test(numero);
    const validaCep = (cep) => cep.length == 8 && verificarNumero(cep);

    function preencherEndereco(endereco) {
        const enderecoCliente = {
            cep: endereco.cep || '',
            estado: endereco.uf || '',
            cidade: endereco.localidade || '',
            bairro: endereco.bairro || '',
            rua: endereco.logradouro || '',
            complemento: ''
        };

        setObjCliente(prevState => ({
            ...prevState,
            enderecoCliente
        }));

        document.getElementById('rua').value = endereco.logradouro || '';
        document.getElementById('bairro').value = endereco.bairro || '';
        document.getElementById('cidade').value = endereco.localidade || '';
        document.getElementById('estado').value = endereco.uf || '';

        console.log(endereco);
    }

    function limparEndereco() {
        document.getElementById('rua').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';

    }

    async function pesquisarCep() {
        limparEndereco();
        const cep = document.getElementById('cep').value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        if (validaCep(cep)) {
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty('erro')) {
                document.getElementById('rua').value = 'CEP não encontrado!';
            } else {
                console.log(endereco)
                preencherEndereco(endereco);

            }

        } else {
            document.getElementById('rua').value = 'CEP incorreto!';

        }

    }

    useEffect(() => {
        document.getElementById('cep').addEventListener('focusout', pesquisarCep);
    }, []);


    return (
        <>
            <main>

                <h1>FICHA DE CADASTRO</h1>

                <section className="contem_formulario">
                    <form className="formulario" onSubmit={cadastrarCliente}>
                        <div className="dados_pessoais">
                            <h2>Dados Pessoais</h2>
                            <div className="fileira">
                                <Input
                                    label='Nome: '
                                    type='text'
                                    name='nome'
                                    placeholder='Digite seu nome'
                                    aoDigitar={aoDigitar}

                                />

                                <Input
                                    label='Cpf: '
                                    type='text'
                                    name='cpf'
                                    placeholder='Digite seu cpf'
                                    aoDigitar={aoDigitar}

                                />




                            </div>

                            <div className="fileira">


                                <Input
                                    label='E-mail: '
                                    type='email'
                                    name='email'
                                    placeholder='Digite seu email'
                                    aoDigitar={aoDigitar}

                                />



                                <Input
                                    label='Telefone: '
                                    type='tel'
                                    name='telefone'
                                    placeholder='Somente numeros'
                                    aoDigitar={aoDigitar}

                                />


                            </div>

                            <div className="fileira">

                                <Input
                                    label='Data de Nascimento: '
                                    type='date'
                                    name='data_nascimento'
                                    placeholder='Digite sua data de Nascimento'
                                    aoDigitar={aoDigitar}

                                />

                                <Input
                                    label='Login: '
                                    type='text'
                                    name='login'
                                    placeholder='Digite o login'
                                    aoDigitar={aoDigitar}

                                />

                                <Input
                                    label='Senha: '
                                    type='password'
                                    name='senha'
                                    placeholder='Digite a senha'
                                    aoDigitar={aoDigitar}

                                />



                            </div>

                        </div>

                        <div className="endereco">
                            <h2>Endereço</h2>
                            <div className="fileira">
                                <Input
                                    id="cep"
                                    label='Cep:'
                                    type='text'
                                    name='endereco.cep'
                                    placeholder='Informe seu CEP'
                                    aoDigitar={aoDigitar}
                                />

                                <Input
                                    id='rua'
                                    label='Rua:'
                                    type='text'
                                    name='endereco.rua'
                                    placeholder='Logradouro'
                                    aoDigitar={aoDigitar}
                                />

                                <Input
                                    id='numero'
                                    label='Número:'
                                    type='text'
                                    name='endereco.numero'
                                    placeholder='Número'
                                    aoDigitar={aoDigitar}
                                />
                            </div>

                            <div className="fileira">

                                <Input
                                    id='bairro'
                                    label='Bairro:'
                                    type='text'
                                    name="endereco.bairro"
                                    placeholder='Bairro'
                                    aoDigitar={aoDigitar}
                                />

                                <Input
                                    id='cidade'
                                    label='Cidade:'
                                    type='text'
                                    name='endereco.cidade'
                                    placeholder='Cidade'
                                    aoDigitar={aoDigitar}

                                />

                                <Input
                                    id='estado'
                                    label='UF:'
                                    type='text'
                                    name='endereco.estado'
                                    placeholder='Unidade Federal'
                                />

                            </div>

                        </div>

                        <div className="dados_bancario">
                            <h2>Dados Bancarios</h2>
                            <div className="fileira">
                                <Input
                                    label='Numero da Conta: '
                                    type='text'
                                    name='conta.numero'
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
                                    name='conta.saldo'
                                    placeholder='Informe saldo inicial'
                                    aoDigitar={aoDigitar}

                                />

                                <Input
                                    label='Tipo de conta: '
                                    type='text'
                                    name='conta.tipoDeConta'
                                    placeholder='Tipo de Conta'
                                    aoDigitar={aoDigitar}

                                />


                            </div>

                        </div>

                        <div className="submeter">
                            <button className="botao_enviar">Enviar</button>
                        </div>

                    </form>

                </section>

            </main>
        </>

    );

}