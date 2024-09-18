    import "./Clientes.css";
    import "../Cadastrar.css";
    import ClientesFisica from "./Clientes-Fisica";
    import ClientesJuridica from "./Clientes-Juridica"
    import "./Clientes-Juridica";
    import { invoke } from '@tauri-apps/api/core';
    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    function Campo(){
        <label>
            Nome:
            <input type="text" name="name" />
        </label>
    }

    function Cadastrar(){   

    const [tipo_cadastro, setTipo_cadastro] = useState(10);
    function Tipocadastro(){
        if (tipo_cadastro === 0){
            return(<ClientesFisica />)
        } else if (tipo_cadastro === 1){
            return(<ClientesJuridica />)
        } else {
            return("foi")
        }
        return("vaisefoder")
    }

        return(
            <div>
                <div className="Voltar">
                    <Link to="../Cadastrar">Voltar</Link>
                </div>
                <label>
                Tipo de Cadastro:
                <select
    name="tipodecadastro"
    onChange={(event) => {
        if (event.target.value === "fisica"){
        setTipo_cadastro(0);
        }else{
        setTipo_cadastro(1  );
        }
    }}
    >
                        <option value="fisica">Pessoa Fisica</option>
                        <option value="juridica">Pessoa Juridica</option>
                    </select>   
                </label>
                <div>{Tipocadastro()}</div>
                <show> if select tipodecadastro.v   alue == juridica: ./Clientes-Juridica else: ./Clietnes-Fisica</show>
            </div>
        )
    }
    export default Cadastrar;