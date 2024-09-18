import { Link } from "react-router-dom";
import "./App.css";
function Home() {
return(
<div className="container">
    <h1>Importação e Venda</h1>

    <div className="row">
        <div className="Item">
            <Link to="">
            <img className="logo importar" src="/importar.svg"/>
            <p>Importar</p>
            </Link>
        </div>
        <div className="Item">
            <Link to="./Cadastrar"   >
            <img className="logo importar" src="/cadastrar.svg"/>
            <p>Cadastrar</p>
            </Link>  
        </div>
        <div className="Item">
            <Link to="#"   >
            <img className="logo importar" src="/listar.svg"/>
            <p>Listar</p>
            </Link>
        </div>
        <div className="Item">
            <Link to="#"   >
            <img className="logo importar" src="/orcamento.svg"/>
            <p>Orcamento</p>
            </Link>  
        </div>
    </div>
</div>
  );
  }
export default Home;