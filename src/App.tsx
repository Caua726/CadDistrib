import "./App.css";
import Cadastrar from "./Cadastrar";
import Home from "./Home"
import { Routes, Route} from "react-router-dom";
import CadastrarClientesFisica from "./Cadastrar/Clientes-Fisica";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/Cadastrar/Clientes-Fisica" element={<CadastrarClientesFisica />} />
      </Routes>
    </div>
  );
}
export default App;
