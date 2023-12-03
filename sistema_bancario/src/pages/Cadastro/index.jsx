import { useEffect } from "react";
import Formulario from "../../components/Formulario";
import "./style.css";

export default function Cadastro() {

    const verificarNumero = (numero) => /^[0-9]+$/.test(numero);
    const validaCep = (cep) => cep.length == 8 && verificarNumero(cep);

    function preencherEndereco(endereco) {
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }

    function limparEndereco(endereco) {
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

            if(endereco.hasOwnProperty('erro')){
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
                <section>
                    <form>
                        <div className="dados_pessoais">
                            <h2>Dados Pessoais</h2>
                            <Formulario
                                label='Nome:'
                                type='text'
                                placeholder='Digite seu nome'

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
                            />
                        </div>
                    </form>
                </section>
            </main>
        </>

    );

}