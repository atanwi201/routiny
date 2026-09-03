import { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import colors from "../styles/color";
import { SafeAreaView } from "react-native-safe-area-context";
import DayHeader from "../components/dayHeader";
import styles from "../styles/general";
import { getTodayTasks } from "../db/db";

function getCurrentDate() {
  const now = new Date();
  return {
    date: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    day: (now.getDay() + 6) % 7,
  };
}

export default function PlannerScreen() {
  const [date, setDate] = useState(getCurrentDate);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setDate(getCurrentDate());
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const rows = await getTodayTasks(date);
        setTasks(Array.isArray(rows) ? rows : []);
      } catch (error) {
        console.warn("Failed to load tasks:", error);
        setTasks([]);
      }
    };

    if (date && typeof date.day === "number") {
      loadTasks();
    }
  }, [date]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <DayHeader date={date} />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.background,
          width: "100%",
          paddingHorizontal: 16,
          paddingTop: 12,
        }}
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Text key={task?.id ?? index} style={styles.taskText}>
              {task?.event_name ?? "Task"} | {task?.start_time ?? "Time"} -{" "}
              {task?.end_time ?? "Time"}
            </Text>
          ))
        ) : (
          <Text style={styles.taskText}>No tasks yet</Text>
        )}

        <Text
          style={styles.taskText}
          onPress={() => {
            console.log("new Tasky");
          }}
        >
          + New Task
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
