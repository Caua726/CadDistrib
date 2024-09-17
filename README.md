# CadDistrib - [PT-BR](./README-EN.md)
Esse é um projeto em desenvolvimento, feito com Tauri, Typescript, ReactJS e Rust, onde estou tentando aprender e implementar funcionalidades como cadastro, listagem e orçamentos para clientes, distribuidores, produtos, impostos, entre outras coisas.

## Tabela de Conteúdos
1. [O que Faz?](#o-que-faz)
2. [Instalação / Executavel](#instalação)
   1. [Windows](#windows)
   2. [Linux](#linux)
   3. [Mac](#mac)
   4. [Android](#android)
3. [Contribuição](#contribuição)
4. [Build](#build)
    1. [Requisitos](#requisitos)
    2. [Teste e Compilar](#teste)
    3. [CrossCompile](#crosscompile)
5. [RoadMap](#roadmap)

## O que Faz (ou fará no futuro):
- Cadastra clientes, distribuidores, produtos, etc.
- Importa dados.
- Lista registros.
- Gera orçamentos.

## Instalação

### Windows
#### Executavel:
Você pode ir nas [Releases](https://github.com/Caua726/CadDistrib/releases) e baixar a versão atual `importacao-e-venda.exe`. Após baixar, basta executá-la. O programa abrirá sem instalar nada, mas guardará todos os arquivos na pasta `%temp%/CadDistrib`. Não apague essa pasta para manter seus dados.

#### Instalar:
Para instalar, baixe o arquivo `Windows.7z` nas [Releases](https://github.com/Caua726/CadDistrib/releases). Após extraí-lo com o 7zip, o instalador estará localizado na pasta extraída.

### Linux
Por enquanto, só existe o formato AppImage. Você pode baixá-lo nas [Releases](https://github.com/Caua726/CadDistrib/releases).

### MacOS
Ainda em desenvolvimento.

### Android
Ainda em desenvolvimento.

## Contribuição

Se você encontrou um bug, ou tem uma sugestão para o projeto, fique à vontade para abrir uma **issue** na página do GitHub ou enviar um e-mail diretamente para **cauaalvarenganeves@gmail.com**. 

### Passos para Contribuir:
1. Verifique se o problema ou sugestão já foi reportado nas [issues](https://github.com/Caua726/CadDistrib/issues).
2. Caso não exista, crie uma nova **issue** detalhando o problema ou sugestão.
3. Se preferir, envie um e-mail com detalhes sobre o bug ou sugestão.

Agradeço por qualquer coisa que for feita
## Build

### Requisitos:

#### Windows
1. **Microsoft Visual Studio C++ Build Tools**  
   Instale o Visual Studio, com o C++ Build Tools. [Build Tools para Visual Studio 2022](https://visualstudio.microsoft.com/visual-cpp-build-tools/). Ao escolher os componentes, selecione "C++ build tools" e o Windows 10 SDK.

2. **Rust**  
   Instale o Rust pelo [site oficial](https://www.rust-lang.org/tools/install).
    Tenha certeza que está usando o stable-msvc como padrão.
```
    rustup default stable-msvc
```

#### Linux
1. #### Requisitos  
   Instale algumas dependências para sua distro:
   1. [Debian/Ubuntu](#debianubuntu)
   2. [Arch](#arch)
   3. [Fedora/RHEL](#fedorarhel)
   4. [Gentoo](#gentoo)
   5. [openSUSE](#opensuse)
   6. [Void](#void)

   #### Debian/Ubuntu
   ```bash
   sudo apt update
   sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget file libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
   ```

   #### Arch
   ```sudo pacman -Syu
    sudo pacman -S --needed webkit2gtk base-devel curl wget file openssl appmenu-gtk-module gtk3 libappindicator-gtk3 librsvg libvips
    ```

    #### Fedora/RHEL
    ```
    sudo dnf check-update
    sudo dnf install webkit2gtk4.0-devel openssl-devel curl wget file libappindicator-gtk3-devel librsvg2-devel
    sudo dnf group install "C Development Tools and Libraries"
    ```

    #### Gentoo
    ```
    sudo emerge --ask net-libs/webkit-gtk:4 dev-libs/libappindicator net-misc/curl net-misc/wget sys-apps/file
    ```

    #### openSUSE
    ```
    sudo zypper up
    sudo zypper in webkit2gtk3-soup2-devel libopenssl-devel curl wget file libappindicator3-1 librsvg-devel
    sudo zypper in -t pattern devel_basis
    ```

    #### Void
    ```
    sudo xbps-install -Syu
    sudo xbps-install -S webkit2gtk-devel curl wget file openssl gtk+3-devel libappindicator librsvg-devel gcc pkg-config
    ```

2.  #### Rust
    Para instalar o rust:
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

### Teste e Compilação
Da pra abrir com o vs code, mas não coloquei uma task ainda pra rodar e buildar, então tem que rodar com o cargo ou o npm, oque preferir
### Run Dev
**Cargo**
```
cargo tauri dev
```
**Npm**
```
npm run tauri dev
```
### Compilar
**Cargo**
```
cargo tauri build
```
**Npm**
```
npm run tauri build
```
OBS: não se se é só no arch linux, mas quando eu fui compilar, eu não consegui direito, então eu pesquisei um pouco e nao faco a menor ideioa do porque, mas colocando o codigo abaixo roda

**Arch**
```
NO_STRIP=true cargo tauri build
```
### CrossCompile
**Do Linux Para o Windows**
Eu vou explicar somente so windows para o linux, pois não testei do windows para o linux, e também, não vejo muito motivo
```fff
cargo tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc
```

## RoadMap

Aqui estão os próximos passos planejados para o desenvolvimento do CadDistrib:

### Bugs
- [ ] Windows detectando como virus

### 1. Interface
- [x] Tela Inicial
- [x] Tela Cadastro
- [ ] Tela Cadastro de Cliente
- [] O resto
<br>...

### 2. Funcionalidades Básicas

- [ ] Interface Completa
- [ ] Cadastro de clientes, distribuidores e produtos.
- [ ] Listagem de registros cadastrados.
- [ ] Geração de orçamentos básicos.
- [ ] Implementação de funcionalidades de importação de dados.
- [ ] Filtros e buscas avançadas nos cadastros.

### 3. Integrações e Melhorias
- [ ] Integração com APIs externas para cálculo automático de impostos.
- [ ] Melhorar a interface de usuário (UI) e usabilidade (UX).
- [ ] Implementar um sistema de permissões para múltiplos usuários.
- [ ] Sistema de notificações e lembretes.

### 4. Suporte a Multiplataformas
- [ ] Make an bat/sh file to build easier in windows or a python script
- [ ] Melhorar a compatibilidade com MacOS.
- [ ] Implementar suporte completo para Android.
- [ ] Build otimizado para instalações Linux.

### 5. Funcionalidades Futuras
- [ ] Sistema de relatórios personalizados.
- [ ] Exportação de dados em diversos formatos (CSV, PDF, XLSX, XLS, XML, JSON, etc.).
- [ ] Implementar backup automático para o armazenamento de dados.

### 6. Refatoração e Otimização
- [ ] Refatoração do código para melhorar a eficiência e legibilidade.
- [ ] Otimização do consumo de memória e desempenho geral da aplicação.
<br><br>

**Aviso:** O software ainda não está funcionando direito. Estou aprendendo e desenvolvendo ao mesmo tempo, então pode ser que algumas coisas nem funcionem ainda. Mas estou trabalhando nisso!
