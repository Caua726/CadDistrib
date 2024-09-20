#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#[tauri::command]
fn cadastroClientes() {
    let var = 1;
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![cadastroClientes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
