import React, { useState } from "react";
import "./Clientes.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { confirm } from '@tauri-apps/plugin-dialog';
import { IMaskInput } from 'react-imask';
import { open } from '@tauri-apps/plugin-shell';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Chip,
  Box,
  Autocomplete,
} from "@mui/material";
interface CustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Estados = [
  {"nome": "Acre", "sigla": "AC"},
  {"nome": "Alagoas", "sigla": "AL"},
  {"nome": "Amapá", "sigla": "AP"},
  {"nome": "Amazonas", "sigla": "AM"},
  {"nome": "Bahia", "sigla": "BA"},
  {"nome": "Ceará", "sigla": "CE"},
  {"nome": "Distrito Federal", "sigla": "DF"},
  {"nome": "Espírito Santo", "sigla": "ES"},
  {"nome": "Goiás", "sigla": "GO"},
  {"nome": "Maranhão", "sigla": "MA"},
  {"nome": "Mato Grosso", "sigla": "MT"},
  {"nome": "Mato Grosso do Sul", "sigla": "MS"},
  {"nome": "Minas Gerais", "sigla": "MG"},
  {"nome": "Pará", "sigla": "PA"},
  {"nome": "Paraíba", "sigla": "PB"},
  {"nome": "Paraná", "sigla": "PR"},
  {"nome": "Pernambuco", "sigla": "PE"},
  {"nome": "Piauí", "sigla": "PI"},
  {"nome": "Rio de Janeiro", "sigla": "RJ"},
  {"nome": "Rio Grande do Norte", "sigla": "RN"},
  {"nome": "Rio Grande do Sul", "sigla": "RS"},
  {"nome": "Rondônia", "sigla": "RO"},
  {"nome": "Roraima", "sigla": "RR"},
  {"nome": "Santa Catarina", "sigla": "SC"},
  {"nome": "São Paulo", "sigla": "SP"},
  {"nome": "Sergipe", "sigla": "SE"},
  {"nome": "Tocantins", "sigla": "TO"}
]


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
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [rua, setRua] = useState("");
  const [referencia, setReferencia] = useState("")
  const [estado, setEstado] = useState<{ nome: string; sigla: string } | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(
    undefined
  );
  const messageErroCEP = 'CEP Não encontrado, por favor verifique se o CEP está correto, e tente novamente. Se estiver correto, por favor crie uma issue no GitHub'
      const viaCEP = () => {
        const cepSemFormatacao = cep.replace('-', '');
        fetch(`https://opencep.com/v1/${cepSemFormatacao  }`)
          .then((response: { json: () => any; }) => response.json())
          .then(async (data) => {
            if (data.error){ 
              const issuenogithub = await confirm(messageErroCEP, { title: 'CadDistrib - Erro, CEP', kind: 'warning' });
              if (issuenogithub === true){
                await open('https://github.com/Caua726/CadDistrib/issues/new'); 
                  } else {
                console.log("Não Foi Criado");
              }
            } else {
              const cidade = data.localidade;
              setCidade(cidade);
              const complemento = data.complemento
              setComplemento(complemento);
              let complementoFormatado = ", " + complemento;
              const rua = data.logradouro 
              setRua(rua);  
              const bairro = data.bairro;
              setBairro(bairro);
              const estado = data.uf
              const estadoObj = Estados.find(e => e.sigla === estado);
              if (estadoObj) {
                setEstado(estadoObj);
              }
              let enderecoParts = [];

              // Verifica cada campo e adiciona ao endereço se estiver ativo
              if (rua) {
                enderecoParts.push(rua);
              }
            
              if (numeroEndereco) {
                enderecoParts.push(numeroEndereco);
              }
            
              if (complemento) {
                enderecoParts.push(complemento);
              }
            
              if (bairro) {
                enderecoParts.push(bairro);
              }
            
              if (cidade) {
                enderecoParts.push(cidade);
              }
            
              if (estado) {
                enderecoParts.push(estado);
              }
            
              // Junta as partes do endereço com vírgulas e espaços
              const endereco = enderecoParts.join(', ');    
              
            
            setEndereco(endereco);
          }
          })
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
                label="Numero"
                type="numeroEndereco"
                name="numeroEndereco"
                value={numeroEndereco}
                onChange={(e) => setNumeroEndereco(e.target.value)}
                sx={{ width: 1 / 8, gridRow: '1' }}
                variant="outlined"
                InputProps={{
                  inputComponent: MascaraCEP as any,
                }}
              />
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
              <Button sx={{width: 1/8}} variant="contained" type="button" onClick={viaCEP}>
                Procurar CEP
             </Button>
             <Autocomplete
            id="estado-autocomplete"
            options={Estados}
            getOptionLabel={(option) => option.nome}
            value={estado}
            onChange={(_e, newValue) => {
              setEstado(newValue);
            }}            renderInput={(params) => (
              <TextField {...params} label="Estado" variant="outlined" />
            )}
            sx={{ width: 1 / 3, gridRow: '1' }}
          />

          </Box>
          <Box sx={{    display: 'flex', gap: 2,}}>
          <TextField  
                label="Cidade"
                type="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                sx={{ width: 1/4, marginTop: 1.5, gridRow: '1' }} 
                variant="outlined"
              />          
              <TextField  
              label="Complemento"
              type="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              sx={{ width: 1/4, marginTop: 1.5, gridRow: '1' }} 
              variant="outlined"
            />              
              <TextField  
            label="Bairro"
            type="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            sx={{ width: 1/4, marginTop: 1.5, gridRow: '1' }} 
            variant="outlined"
          />
            <TextField  
              label="Referencia"
              type="referencia"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              sx={{ width: 1/4, marginTop: 1.5, gridRow: '1' }} 
              variant="outlined"
            />
          </Box>
            <Box sx={{display: 'flex', gap: 2,}}>
            <TextField  
              label="Rua"
              type="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              sx={{ width: 1/2, marginTop: 1.5, gridRow: '1' }} 
              variant="outlined"
            />
          <TextField  
                label="Endereço"
                type="endereco"
                value={endereco}  
                onChange={(e) => setEndereco(e.target.value)}
                sx={{ width: 1, marginTop: 1.5, gridRow: '1' }} 
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