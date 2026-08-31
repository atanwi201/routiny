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
  await db.execAsync(
    "INSERT INTO template (weekday, event_name, start_time, end_time, notification, notification_time, enabled, movable, movable_start, movable_end) VALUES (1, 'Gimnasio', '07:00', '08:30', 1, '06:45', 1, 0, null, null), (1, 'Trabajo', '09:00', '17:00', 0, null, 1, 1, '08:00', '19:00'), (2, 'Reunión', '10:00', '11:00', 1, '09:50', 1, 0, null, null), (3, 'Compra', '18:00', '19:30', 0, null, 1, 1, '17:00', '21:00');",
  );
  console.log("dummy data loaded");
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
export async function getTemplateTasks() {
  return db.getAllAsync("SELECT * FROM template");
}

export async function databaseQuery(e) {
  return db.getAllAsync(e);
}
