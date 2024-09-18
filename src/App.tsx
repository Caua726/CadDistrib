import "./App.css";
import Cadastrar from "./Cadastrar";
import Home from "./Home"
import { Routes, Route} from "react-router-dom";
import CadastrarClientes from "./Cadastrar/Clientes";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/Cadastrar/Clientes" element={<CadastrarClientes />} />
      </Routes>
    </div>
  );
}
export default App;
