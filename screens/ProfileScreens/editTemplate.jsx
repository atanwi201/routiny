import { Alert, Button, ScrollView, Text, TextInput } from "react-native";
import styles from "../../styles/general";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function EditTemplate() {
  const [data, setData] = useState({
    email: "",
    start_time: new Date(),
    days: [],
    end_time: new Date(),
    notification: false,
    notification_time: new Date(),
    movable: true,
    movable_start_time: new Date(),
    movable_end_time: new Date(),
  });

  function handlePress() {
    Alert.alert(
      "Done",
      `Email: ${data.email}\nTime: ${data.time.toLocaleTimeString()}`,
    );
  }

  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView>
        <Text style={styles.mainText}>make your Routine.</Text>
        <TextInput
          placeholder="Email"
          value={data.mail}
          onChangeText={(val) =>
            setData((prevData) => ({ ...prevData, mail: val }))
          }
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 40,
            paddingLeft: 20,
          }}
        />
        <DateTimePicker
          value={data.start_time}
          onChange={(event, selectedDate) => {
            if (selectedDate)
              setData((prevData) => ({
                ...prevData,
                start_time: selectedDate,
              }));
          }}
          mode="time"
        />

        <Button title="Done" onPress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
}
//come up with a way to make the events not overlap and make them end in the same day
