import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("routiny.db");

export default db;

export async function databaseStart() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      weekday INTEGER,
      event_name TEXT,
      start_time TEXT,
      end_time TEXT,
      notification INTEGER,
      notification_time TEXT,
      enabled INTEGER,
      movable INTEGER,
      movable_start TEXT,
      movable_end TEXT
    );
  `);

  console.log("database created");
}

export async function addEventToTemplate(
  weekday,
  event_name,
  start_time,
  end_time,
  notification,
  notification_time,
  movable,
  movable_start,
  movable_end,
) {
  return db.runAsync(
    `INSERT INTO template (weekday, event_name, start_time, end_time, notification, notification_time, enabled, movable, movable_start, movable_end)
     VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?, ?)`,
    [
      weekday,
      event_name,
      start_time,
      end_time,
      notification,
      notification_time,
      movable,
      movable_start,
      movable_end,
    ],
  );
}

export async function getTodayTasks(date) {
  if (!date || typeof date.day !== "number") {
    return [];
  }

  return db.getAllAsync("SELECT * FROM template WHERE weekday = ?", [date.day]);
}

export async function databaseQuery(e) {
  return db.getAllAsync(e);
}
