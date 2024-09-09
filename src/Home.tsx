import "./App.css";
function Home() {
return(
<div className="container">
    <h1>Importação e Venda</h1>

    <div className="row">
        <div className="Item">
            <a href="">
            <img className="logo importar" src="/importar.svg"/>
            <p>Importar</p>
            </a>
        </div>
        <div className="Item">
            <a href="./Cadastrar"   >
            <img className="logo importar" src="/cadastrar.svg"/>
            <p>Cadastrar</p>
            </a>  
        </div>
        <div className="Item">
            <a href="#"   >
            <img className="logo importar" src="/listar.svg"/>
            <p>Listar</p>
            </a>
        </div>
        <div className="Item">
            <a href="#"   >
            <img className="logo importar" src="/orcamento.svg"/>
            <p>Orcamento</p>
            </a>  
        </div>
    </div>
</div>
  );
  }
export default Home;