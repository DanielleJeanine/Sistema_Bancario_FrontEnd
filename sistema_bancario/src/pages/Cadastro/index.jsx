import { useEffect, useState } from "react";
import Formulario from "../../components/Formulario";
import { ExibirCliente } from "../ExibirClientes";
import "./style.css";

export default function Cadastro() {
    //Cadastro de  clientes


    const cliente = {
        "nome": '',
        "cpf": '',
        "email": ''
    }

    const [objCliente, setObjCliente] = useState(cliente);

    //Obtendo dados do Formulario

    function aoDigitar(e) {
        console.log(e.target);
        setObjCliente({ ...objCliente, [e.target.name]: e.target.value })
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

        // alert("Cliente cadastrado com sucesso")
    }





    //Cadastro de Endereço
    const verificarNumero = (numero) => /^[0-9]+$/.test(numero);
    const validaCep = (cep) => cep.length == 8 && verificarNumero(cep);

    function preencherEndereco(endereco) {
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
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
                <p>{JSON.stringify(objCliente)}</p>
                <section>
                    <form onSubmit={cadastrarCliente}>
                        <div className="dados_pessoais">
                            <h2>Dados Pessoais</h2>
                            <Formulario
                                label='Nome:'
                                type='text'
                                name='nome'
                                placeholder='Digite seu nome'
                                aoDigitar={aoDigitar}

                            />

                            <Formulario
                                label='Cpf:'
                                type='text'
                                name='cpf'
                                placeholder='Digite seu cpf'
                                aoDigitar={aoDigitar}

                            />

                            <Formulario
                                label='E-mail:'
                                type='email'
                                name='email'
                                placeholder='Digite seu email'
                                aoDigitar={aoDigitar}

                            />
                        </div>
                        <div className="endereco">
                            <h2>Endereço</h2>

                            <div className="div_cep">

                                <Formulario
                                    id="cep"
                                    label='Cep:'
                                    type='text'
                                    placeholder='Informe seu CEP'
                                />
                            </div>


                            <Formulario
                                id='rua'
                                label='Rua:'
                                type='text'
                                placeholder='Logradouro'
                            />

                            <Formulario
                                id='numero'
                                label='Número:'
                                type='text'
                                placeholder='Número'
                            />

                            <Formulario
                                id='bairro'
                                label='Bairro:'
                                type='text'
                                placeholder='Bairro'
                            />

                            <Formulario
                                id='cidade'
                                label='Cidade:'
                                type='text'
                                placeholder='Cidade'
                            />

                            <Formulario
                                id='estado'
                                label='UF:'
                                type='text'
                                placeholder='Unidade Federal'
                            />



                        </div>

                        <div className="submeter">
                            <Formulario

                            type='submit'
                            placeholder='Enviar'
                            on
                            />
                        </div>
                    </form>


                    <div>
                        <ExibirCliente/>
                    </div>
                </section>
            </main>
        </>

    );

}