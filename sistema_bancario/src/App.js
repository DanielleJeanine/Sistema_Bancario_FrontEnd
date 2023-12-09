import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ModalDeposito from './components/ModalDeposito';
import ModalSaque from './components/ModalSaque';
import ModalTransferencia from './components/ModalTranferencia';
import ExibirCliente from './pages/ExibirClientes';
import TelaInicialCliente from './pages/TelaInicialCliente';
import CadastroCliente from './pages/CadastroCliente';
import CadastroFuncionario from './pages/CadastroFuncionario';
import DetalhesCliente from './pages/DetalhesCliente';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ExibirCliente />} />
        <Route path="/detalhesCliente/:id" element={<DetalhesCliente />} />
        <Route path="/inicialCliente" element={<TelaInicialCliente/>}/>
        <Route path="/saque" element={<ModalSaque/>}/>
        <Route path="/deposito" element={<ModalDeposito/>}/>
        <Route path="/transferencia" element={<ModalTransferencia/>}/>
        <Route path="/cadastroCliente" element= {<CadastroCliente/>} />
        <Route path="/cadastroFuncinario" element= {<CadastroFuncionario/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
