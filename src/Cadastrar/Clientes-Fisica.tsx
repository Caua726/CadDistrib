import React, { useState } from "react";
import "./Clientes.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { message } from '@tauri-apps/plugin-dialog';
import { IMaskInput } from 'react-imask';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Chip,
  Box,
} from "@mui/material";

interface CustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}


const MascaraCEP = React.forwardRef<HTMLInputElement, CustomProps>(
  function MascaraCEP(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00000-000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={inputRef}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } } as React.ChangeEvent<HTMLInputElement>)
        }
        overwrite
      />
    );
  }
);

function ClientesFisica() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [categoria, setCategoria] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [observations, setObservations] = useState("");
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(
    undefined
  );

  const viaCEP = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response: { json: () => any; }) => response.json())
      .then((data: any) => {
        const endereco = `${data.logradouro}, "Numero" ${data.localidade} - ${data.uf}`;
        setEndereco(endereco);
      })
      .catch(async (error: any) => { 
        message('File not found', { title: 'Tauri', kind: 'error' });
     });
  };
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
  };

  return (
    <div className="div-cadastro">
      <form onSubmit={handleSubmit}>
        <div className="formulario">
        <div className="formulario-inputs">
          <div className="formulario-inputs-row">
            <TextField
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              fullWidth
              variant="outlined"
              />
            <TextField
              label="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              fullWidth
              variant="outlined"
              />
          </div>

          <div className="formulario-inputs-row">
            <FormControl fullWidth variant="outlined">
              <InputLabel id="categoria-label">Categoria</InputLabel> 
              <Select
                multiple
                labelId="categoria-label"
                value={categoria}
                label="Categoria"
                onChange={(e) => setCategoria(e.target.value as string[])}
                renderValue={(selected) => (  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} sx={{
                        backgroundColor: '#fbfbfb', // Fundo branco
                        color: '#000',           // Texto preto
                        border: '1px solid #ccc',
                      }} />
                    ))}
                  </div>
                )}  
                >
                  <em style={{ display: "flex", justifyContent: "center"}}>Selecione</em>
                <MenuItem value="categoria1">Categoria 1</MenuItem>
                <MenuItem value="categoria2">Categoria 2</MenuItem>
                <MenuItem value="categoria3">Categoria 3</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Data de Nascimento"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
              />

            <FormControl fullWidth variant="outlined">
              <InputLabel id="gender-label">Gênero</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                label="Gênero"
                onChange={(e) => setGender(e.target.value as string)}
                >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="formulario-inputs-row">
            <TextField
              label="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              fullWidth
              variant="outlined"
              />
            <TextField
              label="Celular"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
              fullWidth
              variant="outlined"
              />
          </div>

          <div className="formulario-inputs-row">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
              />
            <TextField
              label="Site"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              fullWidth
              variant="outlined"
              />
          </div>

          <div
            className="formulario-inputs-row"
            style={{ flexDirection: "column" }}
            >
            <TextField
              label="Observações"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              />
          </div>
        </div>

        <div className="formulario-img">
          <div
            className="photo-section"
            onClick={() => document.getElementById("photo-input")?.click()}
            >
            <input
              type="file"
              id="photo-input"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handlePhotoChange}
              />
            <div
              className="photo-preview"
              style={{ width: "100%", height: "100%" }}
              >
              {photoPreview ? (
                <img
                src={photoPreview}
                alt="Pré-visualização da foto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                />
              ) : (
                <span style={{ color: "#fff" }}>
                  Clique para adicionar uma foto
                </span>
              )}
            </div>
          </div>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </div>
        </div>
        <div  >
          <Accordion className="acordeao">
            <AccordionSummary>
              Endereço
            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{    display: 'flex', gap: 2,}}>
              <TextField
                label="CEP"
                type="cep"
                name="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                sx={{ width: 1 / 3, gridRow: '1' }}
                variant="outlined"
                InputProps={{
                  inputComponent: MascaraCEP as any,
                }}
              />
              <Button variant="contained" type="button" onClick={viaCEP}>
                Procurar CEP
             </Button>
              <TextField  
                label="Endereço"
                type="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                sx={{ width: 1, gridRow: '1' }} 
                variant="outlined"
              />
          </Box>
            </AccordionDetails> 
          </Accordion>
        </div>
      </form>
    </div>  
  );
}

export default ClientesFisica;