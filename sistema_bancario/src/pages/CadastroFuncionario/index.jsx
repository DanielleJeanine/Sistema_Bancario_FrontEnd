import { useEffect, useState } from "react";
import Input from "../../components/Input";
import "./cadastroFuncionario.css";

export default function CadastroFuncionario() {

    const funcionario = {
        "nome": '',
        "cpf": '',
        "email": '',
        "data_nascimento": '',
        "ctps": '',
        "enderecoFuncionario": {
            "cep": '',
            "estado": '',
            "cidade": '',
            "bairro": '',
            "rua": '',
            "numero": ''
        }
    }


    const [objFuncionario, setObjFuncionario] = useState(funcionario);


    function aoDigitar(e) {
        const { name, value, type } = e.target;

        if (type === 'date') {
            setObjFuncionario(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (name.startsWith('endereco.')) {
            const enderecoField = name.split('.')[1];
            setObjFuncionario(prevState => ({
                ...prevState,
                enderecoFuncionario: {
                    ...prevState.enderecoFuncionario,
                    [enderecoField]: value
                }
            }));
        } else {
            setObjFuncionario(prevState => ({
                ...prevState,
                [name]: value
            }));
        }

        console.log(objFuncionario);
    }



    const cadastrarFuncionario = (elemento) => {
        fetch("http://localhost:8080/funcionario/cadastro/funcionario", {
            method: 'post',
            body: JSON.stringify(objFuncionario),
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
        const enderecoFuncionario = {
            cep: endereco.cep || '',
            estado: endereco.uf || '',
            cidade: endereco.localidade || '',
            bairro: endereco.bairro || '',
            rua: endereco.logradouro || '',
            complemento: ''
        };

        setObjFuncionario(prevState => ({
            ...prevState,
            enderecoFuncionario
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
            <main className="telaToda">

                <h1>FICHA DE CADASTRO</h1>

                <section className="contem_formulario">
                    <form className="formulario" onSubmit={cadastrarFuncionario}>
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

                                <Input
                                    label='Ctps: '
                                    type='text'
                                    name='ctps'
                                    placeholder='Digite ctps'
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

                                <Input
                                    label='Data de Nascimento: '
                                    type='date'
                                    name='data_nascimento'
                                    placeholder='Digite sua data de Nascimento'
                                    aoDigitar={aoDigitar}

                                />

                            </div>

                            <div className="fileira">
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

                                <Input
                                    label='Ativo: '
                                    type='checkbox'
                                    name='ativo'
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

                        <div className="submeter">
                            <button className="botao_enviar">Enviar</button>
                        </div>

                    </form>

                </section>

            </main>
        </>

    );

}