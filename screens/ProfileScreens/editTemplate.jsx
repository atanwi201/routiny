import { ScrollView, Text, TextInput } from "react-native";
import styles from "../../styles/general";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function EditTemplate() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView>
        <Text style={styles.mainText}>hello</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 40,
            paddingLeft: 20,
          }}
        />
        <DateTimePicker
          value={date}
          onValueChange={(event, selectedDate) => {
            setDate(selectedDate);
          }}
          mode="time"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
