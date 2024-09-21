#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod cadastro;
mod importar;
mod lista;
mod orcamento;
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
