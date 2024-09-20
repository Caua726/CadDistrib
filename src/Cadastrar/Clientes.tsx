
   import React, { useState } from 'react';
   import "./Clientes.css";
   import "../Cadastrar.css";
   import ClientesFisica from "./Clientes-Fisica";
   import ClientesJuridica from "./Clientes-Juridica";
   import { Link } from "react-router-dom";
   import { RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material";

   function Cadastrar() {
     const [tipoCadastro, setTipoCadastro] = useState("fisica");

     const handleTipoCadastroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTipoCadastro(event.target.value);
     };

     return (
       <div style={{ textAlign: "center" }}>
         <FormControl component="fieldset" style={{ marginBottom: "20px" }}>
           <RadioGroup
             row
             value={tipoCadastro}
             onChange={handleTipoCadastroChange}
           >
             <FormControlLabel
               value="fisica"
               control={<Radio color="primary" />}
               label="Pessoa Física"
             />
             <FormControlLabel
               value="juridica"
               control={<Radio color="primary" />}
               label="Pessoa Jurídica"
             />
           </RadioGroup>
         </FormControl>

         <div className="Voltar">
           <Link to="../Cadastrar">Voltar</Link>
         </div>

         <div>
           {tipoCadastro === "fisica" && <ClientesFisica />}
           {tipoCadastro === "juridica" && <ClientesJuridica />}
         </div>
       </div>
     );
   }

   export default Cadastrar;