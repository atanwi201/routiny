import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabaseSync("routiny.db");
export default db;
export async function databaseStart() {
  const response = await db.query(
    "CREATE TABLE IF NOT EXISTS template(id SERIAL PRIMARY KEY, weekday INT, event_name VARCHAR(25),start_time TIME,end_time TIME, notification BOOL, notification_time TIME)",
  );
}

export async function databaseQuery(e) {
  const response = await db.query(e);
}
