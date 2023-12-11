import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ModalDeposito from './components/ModalDeposito';
import ModalSaque from './components/ModalSaque';
import ModalTransferencia from './components/ModalTranferencia';
import TabelaExtrato from './components/TabelaExtrato';
import CadastroCliente from './pages/CadastroCliente';
import CadastroFuncionario from './pages/CadastroFuncionario';
import DetalhesCliente from './pages/DetalhesCliente';
import ExibirCliente from './pages/ExibirClientes';
import Inicio from './pages/Inicio';
import TelaInicialCliente from './pages/TelaInicialCliente';
import TelaInicialFuncionario from './pages/TelaInicialFuncionario';
import CadastrarConta from './pages/CadastarConta';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path="/exibircliente" element={<ExibirCliente />} />
        <Route path="/detalhesCliente/:id" element={<DetalhesCliente />} />
        <Route path="/inicialCliente/:id" element={<TelaInicialCliente/>}/>
        <Route path='/inicialFuncionario' element={<TelaInicialFuncionario/>} />
        <Route path="/saque/:id" element={<ModalSaque/>}/>
        <Route path="/deposito" element={<ModalDeposito/>}/>
        <Route path="/transferencia/:idContaOrigem" element={<ModalTransferencia/>}/>
        <Route path="/cadastroCliente" element= {<CadastroCliente/>} />
        <Route path="/cadastroFuncinario" element= {<CadastroFuncionario/>} />
        <Route path="/cadastrarConta/:id" element={<CadastrarConta/>} />
        <Route path='/extrato/:id' element={<TabelaExtrato/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
