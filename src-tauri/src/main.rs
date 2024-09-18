#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod cadastro;
mod importar;
mod lista;
mod orcamento;
fn main(){
tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}