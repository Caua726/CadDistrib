import "./Cadastrar.css"
import "./App.css";
function Cadastrar(){
    return(
        <div className="container">
            <div className="row">
            <div className="Item a">
                        <a href="./Cadastrar/Clientes-Fisica">
                        <img className="logo importar" src="./Cadastrar/Clientes.svg" />
                        <p>Clientes</p>
                        </a>
                        </div>
            <div className="Item a">
                        <a>
                        <img className="logo importar" src="./Cadastrar/Fornecedores.svg" />
                        <p>Fornecedores</p>
                        </a>
                        </div>
            <div className="Item a">
                        <a>
                        <img className="logo importar" src="./Cadastrar/Produto.svg" />
                        <p>Produtos</p>
                        </a>
                        </div>
            <div className="Item a">
                        <a>
                        <img className="logo importar" src="./Cadastrar/Imposto.svg" />
                        <p>Imposto</p>
                        </a>
                        </div>
            <div className="Item a">
                        <a>
                        <img className="logo importar" src="./Cadastrar/Preço.svg" />
                        <p>Preço</p>
                        </a>
                        </div>      
                <div className="Item a">
                        <a>
                        <img className="logo importar" src="./Cadastrar/Distribuidores.svg" />
                        <p>Distribuidores</p>
                        </a>
                        </div>
                <div className="Item a">
                    <a>
                    <img className="logo importar" src="./Cadastrar/Fabricantes.svg" />
                    <p>Fabricantes</p>
                    </a>
                    </div>
                <div className="Item a">
                    <a>
                    <img className="logo importar" src="./Cadastrar/NCM.svg" />
                    <p>NCM</p>
                    </a>
                    </div>
                <div className="Item a">
                    <a>
                    <img className="logo importar" src="./Cadastrar/Personalizado.svg" />
                    <p>Campos Perso.</p>
                    </a>
                    </div>
          </div>  

            <div className="Voltar">
                <a href="./">Voltar</a>
            </div>
        </div>
        )        
}
export default Cadastrar;