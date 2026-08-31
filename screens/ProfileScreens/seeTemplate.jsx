import { Alert, ScrollView, StatusBar, Text, View } from "react-native";
import styles from "../../styles/general";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getTemplateTasks } from "../../db/db";
import days from "../../constants/days";

export default function SeeTemplate() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getTasks() {
      try {
        const templateTasks = await getTemplateTasks();
        setData(templateTasks || []);
      } catch (error) {
        console.log("error fetching tasks ", error);
        setData([]);
      }
    }
    getTasks();
  }, []);
  console.log(data);
  function handlePress() {
    Alert.alert(
      "Done",
      `Email: ${data.email}\nTime: ${data.time.toLocaleTimeString()}`,
    );
  }

  function DataLoaded(props) {
    if (props.data) {
      return props.data.map((element) => {
        if (element.weekday === count) {
          return (
            <>
              <Text style={styles.secondaryText}>{element.name}</Text>
            </>
          );
        } else {
          setCount(element.weekday);
          return (
            <>
              <View style={styles.dividerTop} />
              <Text style={styles.mainText}>{days[element.weekday]}</Text>
              <View style={styles.dividerBottom} />
              <Text style={styles.secondaryText}>{element.name}</Text>
            </>
          );
        }
      });
    } else {
      return <StatusBar />;
    }
  }

  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView>
        <Text>this component still is in development.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
//make this a screen where the user sees the tasks visually so the user can either add, edit or delete an event CRUD
