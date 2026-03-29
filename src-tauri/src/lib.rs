use sqlx::SqlitePool;
use tauri::Manager;

mod commands;

use commands::get_events;
use commands::create_event;
use commands::update_event;
use commands::delete_event;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let db_path = app.path().app_data_dir().unwrap().join("events.db");
            std::fs::create_dir_all(db_path.parent().unwrap()).unwrap();
            println!("DB path: {:?}", db_path);
            println!("Parent: {:?}", db_path.parent().unwrap());
            let db_url = format!("sqlite:{}?mode=rwc", db_path.display());
            let pool = tauri::async_runtime::block_on(SqlitePool::connect(&db_url)).unwrap();

            tauri::async_runtime::block_on(sqlx::migrate!("./migrations").run(&pool)).unwrap();
            app.manage(pool);
            println!("{:?}", db_path);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_events, create_event, update_event, delete_event
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
