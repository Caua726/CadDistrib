import /*React,*/ { useState } from "react";
import "./Clientes.css";
import {
  TextField,/*
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Chip,
  */
} from "@mui/material";
function ClientesJuridica(){
    const [nome, setNome] = useState("");
    return(
        <div>
            oi
            <form className="formulario">
                <div className="formulario-inputs">
                    <div className="formulario-inputs-row">
                    <TextField
                    label="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    fullWidth
                    variant="outlined"
                    />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ClientesJuridica;