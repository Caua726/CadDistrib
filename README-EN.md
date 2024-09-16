# CadDistrib - [EN](./README.md)

This is a project in development, made with Tauri, Typescript, ReactJS, and Rust, where I am trying to learn and put features such as registration, listing, and quotations for clients, distributors, products, taxes, and more.

## Table of Contents
1. [What Does It Do?](#what-does-it-do)
2. [Installation / Executable](#installation)
   1. [Windows](#windows)
   2. [Linux](#linux)
   3. [Mac](#mac)
   4. [Android](#android)
3. [Contribution](#contribution)
4. [Build](#build)
5. [RoadMap](#roadmap)

## What It Makes (or will make in the future):
- Registers clients, distributors, products, etc.
- Imports data.
- Lists records.
- Generates quotations.

## Installation

### Windows
#### Executable:
You can go to the [Releases](https://github.com/Caua726/CadDistrib/releases) and download the current version. After downloading, just run it. The program will open without installing anything but will save all files in the folder `%temp%/CadDistrib`. Do not delete this folder to keep your data.

#### Install:
To install, download the `Windows.7z` file from the [Releases](https://github.com/Caua726/CadDistrib/releases). After extracting it with 7zip, the installer will be located in the extracted folder.

### Linux
Currently, only the AppImage format is available. You can download it from the [Releases](https://github.com/Caua726/CadDistrib/releases).

### MacOS
Still in development.

### Android
Still in development.

## Contribution

If you found a bug or have a suggestion for the project, feel free to open an **issue** on the GitHub page or send an email directly to **cauaalvarenganeves@gmail.com**.

### Steps to Contribute:
1. Check if the issue or suggestion has already been reported in the [issues](https://github.com/Caua726/CadDistrib/issues).
2. If it doesn’t exist, create a new **issue** detailing the problem or suggestion.
3. If you prefer, send an email with details about the bug or suggestion.

Thank you for anything you do to help!

## Build

### Requirements:

#### Windows
1. **Microsoft Visual Studio C++ Build Tools**  
   Install Visual Studio with C++ Build Tools. [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/visual-cpp-build-tools/). When choosing components, select "C++ build tools" and the Windows 10 SDK.

2. **Rust**  
   Install Rust from the [official website](https://www.rust-lang.org/tools/install).
    Make sure you are using stable-msvc as the default.
```
    rustup default stable-msvc
```

#### Linux
1. #### System Dependencies  
   Install some dependencies for your distro:
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
    To install Rust:
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://rustup.rs | sh
    ```

## RoadMap

Here are the next steps planned for the development of CadDistrib:

### Bugs
- [ ] Windows detecting it as a virus

### 1. Interface
- [x] Initial Screen
- [x] Registration Screen
- [ ] Client Registration Screen<br>...

### 2. Basic Features

- [ ] Complete Interface
- [ ] Registration of clients, distributors, and products.
- [ ] Listing of registered records.
- [ ] Generation of basic quotations.
- [ ] Implementation of data import features.
- [ ] Advanced filters and searches in registrations.

### 3. Integrations and Improvements
- [ ] Integration with external APIs for automatic tax calculation.
- [ ] Improve user interface (UI) and usability (UX).
- [ ] Implement a permission system for multiple users.
- [ ] Notification and reminder system.

### 4. Multi-platform Support
- [ ] Improve compatibility with MacOS.
- [ ] Implement full Android support.
- [ ] Optimized build for Linux installations.

### 5. Future Features
- [ ] Custom report system.
- [ ] Data export in various formats (CSV, PDF, XLSX, XLS, XML, JSON, etc.).
- [ ] Implement automatic backup for data storage.

### 6. Refactoring and Optimization
- [ ] Code refactoring to improve efficiency and readability.
- [ ] Optimization of memory consumption and overall application performance.

<br><br>

**Note:** The software is not fully functioning yet. I am learning and developing at the same time, so some things might not even work. But I'm working on!
