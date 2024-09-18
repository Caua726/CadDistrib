import "./Cadastrar.css"
import "./App.css";
import { Link } from "react-router-dom";
function Cadastrar(){
    return(
        <div className="container">
            <div className="row">
            <div className="Item a">
                        <Link to="./Clientes">
                        <img className="logo importar" src="./Cadastrar/Clientes.svg" />
                        <p>Clientes</p>
                        </Link>
                        </div>
            <div className="Item a">
                        <Link to="">
                        <img className="logo importar" src="./Cadastrar/Fornecedores.svg" />
                        <p>Fornecedores</p>
                        </Link>
                        </div>
            <div className="Item a">
                        <Link to="">
                        <img className="logo importar" src="./Cadastrar/Produto.svg" />
                        <p>Produtos</p>
                        </Link>
                        </div>
            <div className="Item a">
                        <Link to="">
                        <img className="logo importar" src="./Cadastrar/Imposto.svg" />
                        <p>Imposto</p>
                        </Link>
                        </div>
            <div className="Item a">
                        <Link to="">
                        <img className="logo importar" src="./Cadastrar/Preço.svg" />
                        <p>Preço</p>
                        </Link>
                        </div>      
                <div className="Item a">
                        <Link to="">
                        <img className="logo importar" src="./Cadastrar/Distribuidores.svg" />
                        <p>Distribuidores</p>
                        </Link>
                        </div>
                <div className="Item a">
                    <Link to="">
                    <img className="logo importar" src="./Cadastrar/Fabricantes.svg" />
                    <p>Fabricantes</p>
                    </Link>
                    </div>
                <div className="Item a">
                    <Link to="">
                    <img className="logo importar" src="./Cadastrar/NCM.svg" />
                    <p>NCM</p>
                    </Link>
                    </div>
                <div className="Item a">
                    <Link to="">
                    <img className="logo importar" src="./Cadastrar/Personalizado.svg" />
                    <p>Campos Perso.</p>
                    </Link>
                    </div>
          </div>  

            <div className="Voltar">
                <Link to="../">Voltar</Link>
            </div>
        </div>
        )        
}
export default Cadastrar;