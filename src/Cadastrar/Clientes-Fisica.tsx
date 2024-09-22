import React, { useState } from "react";
import "./Clientes.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import dayjs, {Dayjs    } from 'dayjs';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import { confirm } from '@tauri-apps/plugin-dialog';
import { IMaskInput } from 'react-imask';
import { open } from '@tauri-apps/plugin-shell';
import {
  Checkbox,
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
dayjs.locale('pt-br')
const OrgaoEmissor = [{"value":"ABNC - Academia Brasileira de Neurocirurgia","label":"ABNC - Academia Brasileira de Neurocirurgia"},{"value":"AGU - Advocacia-Geral da União","label":"AGU - Advocacia-Geral da União"},{"value":"ANAC - Agência Nacional de Aviação Civil","label":"ANAC - Agência Nacional de Aviação Civil"},{"value":"CAER - Clube de Aeronáutica","label":"CAER - Clube de Aeronáutica"},{"value":"CAU - Conselho de Arquitetura e Urbanismo","label":"CAU - Conselho de Arquitetura e Urbanismo"},{"value":"CBM - Corpo de Bombeiro Militar","label":"CBM - Corpo de Bombeiro Militar"},{"value":"CFA - Conselho Federal Administração","label":"CFA - Conselho Federal Administração"},{"value":"CFB - Conselho Federal de Biblioteconomia","label":"CFB - Conselho Federal de Biblioteconomia"},{"value":"CFBIO - Conselho Federal de Biologia","label":"CFBIO - Conselho Federal de Biologia"},{"value":"CFBM - Conselho Federal de Biomedicina","label":"CFBM - Conselho Federal de Biomedicina"},{"value":"CFC - Conselho Federal de Contabilidade","label":"CFC - Conselho Federal de Contabilidade"},{"value":"CFESS - Conselho Federal de Serviço Social","label":"CFESS - Conselho Federal de Serviço Social"},{"value":"CFF - Conselho Regional de Farmácia","label":"CFF - Conselho Regional de Farmácia"},{"value":"CFFA - Conselho Federal de Fonoaudiologia","label":"CFFA - Conselho Federal de Fonoaudiologia"},{"value":"CFM - Conselho Federal de Medicina","label":"CFM - Conselho Federal de Medicina"},{"value":"CFMV - Conselho Federal de Medicina Veterinária","label":"CFMV - Conselho Federal de Medicina Veterinária"},{"value":"CFN - Conselho Federal de Nutrição","label":"CFN - Conselho Federal de Nutrição"},{"value":"CFO - Conselho Federal de Odontologia","label":"CFO - Conselho Federal de Odontologia"},{"value":"CFP - Conselho Federal de Psicologia","label":"CFP - Conselho Federal de Psicologia"},{"value":"CFQ - Conselho Regional de Química","label":"CFQ - Conselho Regional de Química"},{"value":"CFT - Conselho Federal dos Técnicos Industriais","label":"CFT - Conselho Federal dos Técnicos Industriais"},{"value":"CFTA - Conselho Federal dos Técnicos Agrícolas","label":"CFTA - Conselho Federal dos Técnicos Agrícolas"},{"value":"CGPI - Coordenação Geral de Privilégios e Imunidades","label":"CGPI - Coordenação Geral de Privilégios e Imunidades"},{"value":"CGPMAF - Coordenadoria Geral de Polícia Marítima}, Aeronáutica e de Fronteiras","label":"CGPMAF - Coordenadoria Geral de Polícia Marítima}, Aeronáutica e de Fronteiras"},{"value":"CIPC - Centro de Inteligência da Polícia Civil","label":"CIPC - Centro de Inteligência da Polícia Civil"},{"value":"CNIG - Conselho Nacional de Imigração","label":"CNIG - Conselho Nacional de Imigração"},{"value":"CNT - Confederação Nacional do Transporte","label":"CNT - Confederação Nacional do Transporte"},{"value":"CNTV - Confederação Nacional de Vigilantes & Prestadores de Serviços","label":"CNTV - Confederação Nacional de Vigilantes & Prestadores de Serviços"},{"value":"COFECI - Conselho Federal de Corretores de Imóveis","label":"COFECI - Conselho Federal de Corretores de Imóveis"},{"value":"COFECON - Conselho Federal de Economia","label":"COFECON - Conselho Federal de Economia"},{"value":"COFEM - Conselho Federal de Museologia","label":"COFEM - Conselho Federal de Museologia"},{"value":"COFEN - Conselho Federal de Enfermagem","label":"COFEN - Conselho Federal de Enfermagem"},{"value":"COFFITO - Conselho Regional de Fisioterapia e Terapia Ocupacional","label":"COFFITO - Conselho Regional de Fisioterapia e Terapia Ocupacional"},{"value":"COMAER - Comando da Aeronáutica","label":"COMAER - Comando da Aeronáutica"},{"value":"CONFE - Conselho Federal de Estatística","label":"CONFE - Conselho Federal de Estatística"},{"value":"CONFEA - Conselho Federal de Engenharia e Agronomia","label":"CONFEA - Conselho Federal de Engenharia e Agronomia"},{"value":"CONFEF - Conselho Federal de Educação Física","label":"CONFEF - Conselho Federal de Educação Física"},{"value":"CONFERE - Conselho Federal dos Representantes Comerciais","label":"CONFERE - Conselho Federal dos Representantes Comerciais"},{"value":"CONRE - Conselho Regional de Estatística","label":"CONRE - Conselho Regional de Estatística"},{"value":"CONRERP - Conselho Federal de Profissionais de Relações Públicas","label":"CONRERP - Conselho Federal de Profissionais de Relações Públicas"},{"value":"CORE - Conselho Regional dos Representantes Comerciais","label":"CORE - Conselho Regional dos Representantes Comerciais"},{"value":"CORECON - Conselho Regional de Economia","label":"CORECON - Conselho Regional de Economia"},{"value":"COREM - Conselho Regional de Museologia","label":"COREM - Conselho Regional de Museologia"},{"value":"COREN - Conselho Regional de Enfermagem","label":"COREN - Conselho Regional de Enfermagem"},{"value":"CRA - Conselho Regional de Administração","label":"CRA - Conselho Regional de Administração"},{"value":"CRAS - Centro de Referência de Assistência Social","label":"CRAS - Centro de Referência de Assistência Social"},{"value":"CRB - Conselho Regional de Biblioteconomia","label":"CRB - Conselho Regional de Biblioteconomia"},{"value":"CRBIO - Conselho Regional de Biologia","label":"CRBIO - Conselho Regional de Biologia"},{"value":"CRBM - Conselho Regional de Biomedicina","label":"CRBM - Conselho Regional de Biomedicina"},{"value":"CRC - Conselho Regional de Contabilidade","label":"CRC - Conselho Regional de Contabilidade"},{"value":"CREA - Conselho Regional de Engenharia e Agronomia","label":"CREA - Conselho Regional de Engenharia e Agronomia"},{"value":"CRECI - Conselho Regional de Corretores de Imóveis","label":"CRECI - Conselho Regional de Corretores de Imóveis"},{"value":"CREF - Conselho Regional de Educação Física","label":"CREF - Conselho Regional de Educação Física"},{"value":"CREFITO - Conselho Regional de Fisioterapia e Terapia Ocupacional","label":"CREFITO - Conselho Regional de Fisioterapia e Terapia Ocupacional"},{"value":"CRESS - Conselho Regional de Serviço Social","label":"CRESS - Conselho Regional de Serviço Social"},{"value":"CRF - Conselho Regional de Farmácia","label":"CRF - Conselho Regional de Farmácia"},{"value":"CRFA - Conselho Regional de Fonoaudiologia","label":"CRFA - Conselho Regional de Fonoaudiologia"},{"value":"CRM - Conselho Regional de Medicina","label":"CRM - Conselho Regional de Medicina"},{"value":"CRMV - Conselho Regional de Medicina Veterinária","label":"CRMV - Conselho Regional de Medicina Veterinária"},{"value":"CRN - Conselho Regional de Nutrição","label":"CRN - Conselho Regional de Nutrição"},{"value":"CRO - Conselho Regional de Odontologia","label":"CRO - Conselho Regional de Odontologia"},{"value":"CRP - Conselho Regional de Psicologia","label":"CRP - Conselho Regional de Psicologia"},{"value":"CRPRE - Conselho Regional de Profissionais de Relações Públicas","label":"CRPRE - Conselho Regional de Profissionais de Relações Públicas"},{"value":"CRQ - Conselho Regional de Química","label":"CRQ - Conselho Regional de Química"},{"value":"CRT - Conselho Regional dos Técnicos Industriais","label":"CRT - Conselho Regional dos Técnicos Industriais"},{"value":"CRTA - Conselho Regional de Técnicos de Administração","label":"CRTA - Conselho Regional de Técnicos de Administração"},{"value":"CTPS - Carteira de Trabalho e Previdência Social","label":"CTPS - Carteira de Trabalho e Previdência Social"},{"value":"CV - Cartório Civil","label":"CV - Cartório Civil"},{"value":"DELEMIG - Delegacia de Polícia de Imigração","label":"DELEMIG - Delegacia de Polícia de Imigração"},{"value":"DETRAN - Departamento Estadual de Trânsito","label":"DETRAN - Departamento Estadual de Trânsito"},{"value":"DGPC - Diretoria Geral da Polícia Civil","label":"DGPC - Diretoria Geral da Polícia Civil"},{"value":"DIC - Diretoria de Identificação Civil","label":"DIC - Diretoria de Identificação Civil"},{"value":"DICC - Diretoria de Identificação Civil e Criminal","label":"DICC - Diretoria de Identificação Civil e Criminal"},{"value":"DIREX - Diretoria Executiva","label":"DIREX - Diretoria Executiva"},{"value":"DPF - Departamento de Polícia Federal","label":"DPF - Departamento de Polícia Federal"},{"value":"DPMAF - Divisão de Polícia Marítima}, Aérea e de Fronteiras","label":"DPMAF - Divisão de Polícia Marítima}, Aérea e de Fronteiras"},{"value":"DPT - Departamento de Polícia Técnica Geral","label":"DPT - Departamento de Polícia Técnica Geral"},{"value":"DPTC - Departamento de Polícia Técnico Científica","label":"DPTC - Departamento de Polícia Técnico Científica"},{"value":"DREX - Delegacia Regional Executiva","label":"DREX - Delegacia Regional Executiva"},{"value":"DRT - Delegacia Regional do Trabalho","label":"DRT - Delegacia Regional do Trabalho"},{"value":"EB - Exército Brasileiro","label":"EB - Exército Brasileiro"},{"value":"FAB - Força Aérea Brasileira","label":"FAB - Força Aérea Brasileira"},{"value":"FENAJ - Federação Nacional dos Jornalistas","label":"FENAJ - Federação Nacional dos Jornalistas"},{"value":"FGTS - Fundo de Garantia do Tempo de Serviço","label":"FGTS - Fundo de Garantia do Tempo de Serviço"},{"value":"FIPE - Fundação Instituto de Pesquisas Econômicas","label":"FIPE - Fundação Instituto de Pesquisas Econômicas"},{"value":"FLS - Fundação Lyndolpho Silva","label":"FLS - Fundação Lyndolpho Silva"},{"value":"FUNAI - Fundação Nacional do Índio","label":"FUNAI - Fundação Nacional do Índio"},{"value":"GEJSP - Gerência de Estado de Justiça}, Segurança Pública e Cidadania","label":"GEJSP - Gerência de Estado de Justiça}, Segurança Pública e Cidadania"},{"value":"GEJSPC - Gerência de Estado de Justiça}, Segurança Pública e Cidadania","label":"GEJSPC - Gerência de Estado de Justiça}, Segurança Pública e Cidadania"},{"value":"GEJUSPC - Gerência de Estado de Justiça}, Segurança Pública e Cidadania","label":"GEJUSPC - Gerência de Estado de Justiça}, Segurança Pública e Cidadania"},{"value":"GESP - Gerência de Estado de Segurança Pública","label":"GESP - Gerência de Estado de Segurança Pública"},{"value":"GOVGO - Governo do Estado de Goiás","label":"GOVGO - Governo do Estado de Goiás"},{"value":"I CLA - Carteira de Identidade Classista","label":"I CLA - Carteira de Identidade Classista"},{"value":"ICP - Instituto de Polícia Científica","label":"ICP - Instituto de Polícia Científica"},{"value":"IDAMP - Instituto de Identificação Dr. Aroldo Mendes Paiva","label":"IDAMP - Instituto de Identificação Dr. Aroldo Mendes Paiva"},{"value":"IFP - Instituto Félix Pacheco","label":"IFP - Instituto Félix Pacheco"},{"value":"IGP - Instituto Geral de Perícias","label":"IGP - Instituto Geral de Perícias"},{"value":"IIACM - Instituto de Identificação Aderson Conceição de Melo","label":"IIACM - Instituto de Identificação Aderson Conceição de Melo"},{"value":"IICC - Instituto de Identificação Civil e Criminal","label":"IICC - Instituto de Identificação Civil e Criminal"},{"value":"IICCECF - Instituto de Identificação Civil e Criminal Engrácia da Costa Francisco","label":"IICCECF - Instituto de Identificação Civil e Criminal Engrácia da Costa Francisco"},{"value":"IICM - Instituto de Identificação Carlos Menezes","label":"IICM - Instituto de Identificação Carlos Menezes"},{"value":"IIGP - Instituto de Identificação Gonçalo Pereira","label":"IIGP - Instituto de Identificação Gonçalo Pereira"},{"value":"IIJDM - Instituto de Identificação João de Deus Martins","label":"IIJDM - Instituto de Identificação João de Deus Martins"},{"value":"IIPC - Instituto de Identificação da Polícia Civil","label":"IIPC - Instituto de Identificação da Polícia Civil"},{"value":"IIPC - Instituto de Identificação Pedro Mello","label":"IIPC - Instituto de Identificação Pedro Mello"},{"value":"IIRGD - Instituto de Identificação Ricardo Gumbleton Daunt","label":"IIRGD - Instituto de Identificação Ricardo Gumbleton Daunt"},{"value":"IIRHM - Instituto de Identificação Raimundo Hermínio de Melo","label":"IIRHM - Instituto de Identificação Raimundo Hermínio de Melo"},{"value":"IITB - Instituto de Identificação Tavares Buril","label":"IITB - Instituto de Identificação Tavares Buril"},{"value":"IML - Instituto Médico-Legal","label":"IML - Instituto Médico-Legal"},{"value":"INI - Instituto Nacional de Identificação","label":"INI - Instituto Nacional de Identificação"},{"value":"IPF - Instituto Pereira Faustino","label":"IPF - Instituto Pereira Faustino"},{"value":"ITCP - Instituto Técnico-Científico de Perícia","label":"ITCP - Instituto Técnico-Científico de Perícia"},{"value":"ITEP - Instituto Técnico-Científico de Perícia","label":"ITEP - Instituto Técnico-Científico de Perícia"},{"value":"MAER - Ministério da Aeronáutica","label":"MAER - Ministério da Aeronáutica"},{"value":"MB - Marinha do Brasil","label":"MB - Marinha do Brasil"},{"value":"MD - Ministério da Defesa","label":"MD - Ministério da Defesa"},{"value":"MDS - Ministério da Cidadania","label":"MDS - Ministério da Cidadania"},{"value":"MEC - Ministério da Educação e Cultura","label":"MEC - Ministério da Educação e Cultura"},{"value":"MEX - Ministério do Exército","label":"MEX - Ministério do Exército"},{"value":"MINDEF - Ministério da Defesa","label":"MINDEF - Ministério da Defesa"},{"value":"MJ - Ministério da Justiça","label":"MJ - Ministério da Justiça"},{"value":"MM - Ministério da Marinha","label":"MM - Ministério da Marinha"},{"value":"MMA - Ministério da Marinha","label":"MMA - Ministério da Marinha"},{"value":"MPAS - Ministério da Previdência e Assistência Social","label":"MPAS - Ministério da Previdência e Assistência Social"},{"value":"MPE - Ministério Público Estadual","label":"MPE - Ministério Público Estadual"},{"value":"MPF - Ministério Público Federal","label":"MPF - Ministério Público Federal"},{"value":"MPT - Ministério Público do Trabalho","label":"MPT - Ministério Público do Trabalho"},{"value":"MRE - Ministério das Relações Exteriores","label":"MRE - Ministério das Relações Exteriores"},{"value":"MT - Ministério do Trabalho","label":"MT - Ministério do Trabalho"},{"value":"MTE - Ministério da Economia","label":"MTE - Ministério da Economia"},{"value":"MTPS - Ministério do Trabalho e Previdência Social","label":"MTPS - Ministério do Trabalho e Previdência Social"},{"value":"NUMIG - Núcleo de Polícia de Imigração","label":"NUMIG - Núcleo de Polícia de Imigração"},{"value":"OAB - Ordem dos Advogados do Brasil","label":"OAB - Ordem dos Advogados do Brasil"},{"value":"OMB - Ordens dos Músicos do Brasil","label":"OMB - Ordens dos Músicos do Brasil"},{"value":"PC - Polícia Civil","label":"PC - Polícia Civil"},{"value":"PF - Polícia Federal","label":"PF - Polícia Federal"},{"value":"PGFN - Procuradoria Geral da Fazenda Nacional","label":"PGFN - Procuradoria Geral da Fazenda Nacional"},{"value":"PM - Polícia Militar","label":"PM - Polícia Militar"},{"value":"POLITEC - Perícia Oficial e Identificação Técnica","label":"POLITEC - Perícia Oficial e Identificação Técnica"},{"value":"PRF - Polícia Rodoviária Federal","label":"PRF - Polícia Rodoviária Federal"},{"value":"PTC - Polícia Tecnico-Científica","label":"PTC - Polícia Tecnico-Científica"},{"value":"SCC - Secretaria de Estado da Casa Civil","label":"SCC - Secretaria de Estado da Casa Civil"},{"value":"SCJDS - Secretaria Coordenadora de Justiça e Defesa Social","label":"SCJDS - Secretaria Coordenadora de Justiça e Defesa Social"},{"value":"SDS - Secretaria de Defesa Social","label":"SDS - Secretaria de Defesa Social"},{"value":"SECC - Secretaria de Estado da Casa Civil","label":"SECC - Secretaria de Estado da Casa Civil"},{"value":"SECCDE - Secretaria de Estado da Casa Civil e Desenvolvimento Econômico","label":"SECCDE - Secretaria de Estado da Casa Civil e Desenvolvimento Econômico"},{"value":"SEDS - Secretaria de Estado da Defesa Social","label":"SEDS - Secretaria de Estado da Defesa Social"},{"value":"SEGUP - Secretaria de Estado da Segurança Pública e da Defesa Social","label":"SEGUP - Secretaria de Estado da Segurança Pública e da Defesa Social"},{"value":"SEJSP - Secretaria de Estado de Justiça e Segurança Pública","label":"SEJSP - Secretaria de Estado de Justiça e Segurança Pública"},{"value":"SEJUC - Secretaria de Estado da Justica","label":"SEJUC - Secretaria de Estado da Justica"},{"value":"SEJUSP - Secretaria de Estado de Justiça e Segurança Pública","label":"SEJUSP - Secretaria de Estado de Justiça e Segurança Pública"},{"value":"SEPC - Secretaria de Estado da Polícia Civil","label":"SEPC - Secretaria de Estado da Polícia Civil"},{"value":"SES - Secretaria de Estado da Segurança","label":"SES - Secretaria de Estado da Segurança"},{"value":"SESC - Secretaria de Estado da Segurança e Cidadania","label":"SESC - Secretaria de Estado da Segurança e Cidadania"},{"value":"SESDC - Secretaria de Estado da Segurança}, Defesa e Cidadania","label":"SESDC - Secretaria de Estado da Segurança}, Defesa e Cidadania"},{"value":"SESDEC - Secretaria de Estado da Segurança}, Defesa e Cidadania","label":"SESDEC - Secretaria de Estado da Segurança}, Defesa e Cidadania"},{"value":"SESEG - Secretaria Estadual de Segurança","label":"SESEG - Secretaria Estadual de Segurança"},{"value":"SESP - Secretaria de Estado da Segurança Pública","label":"SESP - Secretaria de Estado da Segurança Pública"},{"value":"SESPAP - Secretaria de Estado da Segurança Pública e Administração Penitenciária","label":"SESPAP - Secretaria de Estado da Segurança Pública e Administração Penitenciária"},{"value":"SESPDC - Secretaria de Estado de Segurança Publica e Defesa do Cidadão","label":"SESPDC - Secretaria de Estado de Segurança Publica e Defesa do Cidadão"},{"value":"SESPDS - Secretaria de Estado de Segurança Pública e Defesa Social","label":"SESPDS - Secretaria de Estado de Segurança Pública e Defesa Social"},{"value":"SGPC - Superintendência Geral de Polícia Civil","label":"SGPC - Superintendência Geral de Polícia Civil"},{"value":"SGPJ - Superintendência Geral de Polícia Judiciária","label":"SGPJ - Superintendência Geral de Polícia Judiciária"},{"value":"SIM - Serviço de Identificação da Marinha","label":"SIM - Serviço de Identificação da Marinha"},{"value":"SJ - Secretaria da Justiça","label":"SJ - Secretaria da Justiça"},{"value":"SJCDH - Secretaria da Justiça e dos Direitos Humanos","label":"SJCDH - Secretaria da Justiça e dos Direitos Humanos"},{"value":"SJDS - Secretaria Coordenadora de Justiça e Defesa Social","label":"SJDS - Secretaria Coordenadora de Justiça e Defesa Social"},{"value":"SJS - Secretaria da Justiça e Segurança","label":"SJS - Secretaria da Justiça e Segurança"},{"value":"SJTC - Secretaria da Justiça do Trabalho e Cidadania","label":"SJTC - Secretaria da Justiça do Trabalho e Cidadania"},{"value":"SJTS - Secretaria da Justiça do Trabalho e Segurança","label":"SJTS - Secretaria da Justiça do Trabalho e Segurança"},{"value":"SNJ - Secretaria Nacional de Justiça / Departamento de Estrangeiros","label":"SNJ - Secretaria Nacional de Justiça / Departamento de Estrangeiros"},{"value":"SPMAF - Serviço de Polícia Marítima}, Aérea e de Fronteiras","label":"SPMAF - Serviço de Polícia Marítima}, Aérea e de Fronteiras"},{"value":"SPTC - Secretaria de Polícia Técnico-Científica","label":"SPTC - Secretaria de Polícia Técnico-Científica"},{"value":"SRDPF - Superintendência Regional do Departamento de Polícia Federal","label":"SRDPF - Superintendência Regional do Departamento de Polícia Federal"},{"value":"SRF - Receita Federal","label":"SRF - Receita Federal"},{"value":"SRTE - Superintendência Regional do Trabalho","label":"SRTE - Superintendência Regional do Trabalho"},{"value":"SSDC - Secretaria da Segurança}, Defesa e Cidadania","label":"SSDC - Secretaria da Segurança}, Defesa e Cidadania"},{"value":"SSDS - Secretaria da Segurança e da Defesa Social","label":"SSDS - Secretaria da Segurança e da Defesa Social"},{"value":"SSI - Secretaria de Segurança e Informações","label":"SSI - Secretaria de Segurança e Informações"},{"value":"SSP - Secretaria de Segurança Pública","label":"SSP - Secretaria de Segurança Pública"},{"value":"SSPCGP - Secretaria de Segurança Pública e Coordenadoria Geral de Perícias","label":"SSPCGP - Secretaria de Segurança Pública e Coordenadoria Geral de Perícias"},{"value":"SSPDC - Secretaria de Segurança Pública e Defesa do Cidadão","label":"SSPDC - Secretaria de Segurança Pública e Defesa do Cidadão"},{"value":"SSPDS - Secretaria de Segurança Pública e Defesa Social","label":"SSPDS - Secretaria de Segurança Pública e Defesa Social"},{"value":"SSPPC - Secretaria de Segurança Pública Polícia Civil","label":"SSPPC - Secretaria de Segurança Pública Polícia Civil"},{"value":"SUSEP - Superintendência de Seguros Privados","label":"SUSEP - Superintendência de Seguros Privados"},{"value":"SUSEPE - Superintendência dos Serviços Penitenciários","label":"SUSEPE - Superintendência dos Serviços Penitenciários"},{"value":"TJ - Tribunal de Justiça","label":"TJ - Tribunal de Justiça"},{"value":"TJAEM - Tribunal Arbitral e Mediação dos Estados Brasileiros","label":"TJAEM - Tribunal Arbitral e Mediação dos Estados Brasileiros"},{"value":"TRE - Tribunal Regional Eleitoral","label":"TRE - Tribunal Regional Eleitoral"},{"value":"TRF - Tribunal Regional Federal","label":"TRF - Tribunal Regional Federal"},{"value":"TSE - Tribunal Superior Eleitoral","label":"TSE - Tribunal Superior Eleitoral"},{"value":"XXX - Orgão Estrangeiro","label":"XXX - Orgão Estrangeiro"},{"value":"ZZZ - Outro","label":"ZZZ - Outro"}]
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
const MascaraEmail = React.forwardRef<HTMLInputElement, CustomProps>(
  function MascaraEmail(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
      {...other}
      mask="w@w.w"
      blocks={{
        w: {
          mask: /^[A-Za-z0-9._%+-]+$/,
        },
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
const MascaraCelular = React.forwardRef<HTMLInputElement, CustomProps>(
  function MascaraCelular(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
      {...other}
      mask="(00) 00000-0000"
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
const MascaraRG = React.forwardRef<HTMLInputElement, CustomProps>(
  function MascaraRG(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
      {...other}
      mask="00.000.000-0"
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
const MascaraCPF = React.forwardRef<HTMLInputElement, CustomProps>(
  function MascaraCPF(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
      {...other}
      mask="000.000.000-00"
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
  const [datanascimento, setDatanascimento] = useState<Dayjs | null>(dayjs(''));
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
  const [rg, setRG] = useState("");
  const [passaporte, setPassaporte] = useState('')
  const [nif, setNif] = useState("");
  const [estrangeiro, setEstrangeiro] = useState(false);
  const [dataemissaorg, setDataemissaorg] = useState<Dayjs | null>(dayjs(''));
  const [rgorgao, setRGorgao] = useState<{ value: string; label: string } | null>(null)  
  const [estado, setEstado] = useState<{ nome: string; sigla: string } | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(
    undefined
  );
  const handleEstrangeiro = ()  => {
    setEstrangeiro(!estrangeiro)
  };
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
              type="number"
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
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                    <DateField 
                      label="Data de Nascimento"    
                      value={datanascimento}
                      onChange={(e) => setDatanascimento(e)}  
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      variant="outlined"
                      />
                      </LocalizationProvider>
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
              InputProps={{
                inputComponent: MascaraCPF as any,
              }}
              variant="outlined"
              />
            <TextField
              label="Celular"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
              fullWidth
              InputProps={{
                inputComponent: MascaraCelular as any,
              }}
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
              InputProps={{   
                inputComponent: MascaraEmail as any,
              }}
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
        <div>
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
          <Accordion className="acordeao">
            <AccordionSummary>
              Mais Informações  
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{    display: 'flex', gap: 2,}}>
              <TextField
                label="RG"
                type="rg"
                name="rg"
                value={rg}
                onChange={(e) => setRG(e.target.value)}
                sx={{ width: 1 / 5  , gridRow: '1' }}
                variant="outlined"
                InputProps={{
                  inputComponent: MascaraRG as any,
                }}
              />
              <Autocomplete
                id="estado-autocomplete"
                options={OrgaoEmissor}
                getOptionLabel={(option) => option.value}   
                value={rgorgao}
                sx={{ width: 1 / 2    , gridRow: '1' }  }
                onChange={(_e, newValue) => {
                  setRGorgao(newValue);
                }}            renderInput={(params) => (
                  <TextField {...params} label="Orgão Emissor" variant="outlined" />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                    <DateField 
                      label="Data de Emissão"     
                      value={dataemissaorg}
                      onChange={(e) => setDataemissaorg(e)}     
                      InputLabelProps={{  
                        shrink: true,
                      }}
                      variant="outlined"
                      />
                      </LocalizationProvider>
              </Box>
              <Box sx={{display: 'flex', gap: 2, marginTop: 1.5, alignContent: "center"}}>
              <TextField
                label="Passaporte"
                type="passaporte"
                name="passaporte"
                value={passaporte}
                onChange={(e) => setPassaporte(e.target.value)}
                sx={{ width: 1 / 3    , gridRow: '1' }}
                variant="outlined"
                inputProps={{
                  maxLength: 10,      
                }}
              />   
                    <div style={{ textAlign: "left" }}>
                      <span onClick={handleEstrangeiro} style={{ cursor: 'pointer', userSelect: 'none' }}>
                        Estrangeiro?
                      </span>
                      <Checkbox checked={estrangeiro} onChange={handleEstrangeiro} />
                      {estrangeiro && (
                        <TextField
                          label="NiF"
                          type="text"
                          name="nif"
                          value={nif}
                          onChange={(e) => setNif(e.target.value)}
                          sx={{ width: 1/2, gridRow: '1' }}
                          variant="outlined"
                          inputProps={{
                            maxLength: 10,
                          }}
                        />
                      )}
                    </div>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </form>
    </div>  
  );
}

export default ClientesFisica;