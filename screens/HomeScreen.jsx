import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import colors from "../styles/color";
import ListTask from "../assets/listTask";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen(prop) {
  const [text, setText] = useState("");
  function resolveChange(e) {
    setText(e);
  }
  function addEvent() {
    console.log("added event");
  }
  function btnPress() {
    Alert.alert("home", text);
  }
  return (
    <ScrollView
      contentContainerStyle={{
        display: "grid",
        flex: 1,
        alignItems: "",
        justifyContent: "",
        backgroundColor: "black",
        height: "100dvh",
        width: "100∞",
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          height: "10dvh",
          width: "100%",
          alignItems: "stretch",
          marginTop: "100px",
        }}
      >
        <Text>hello</Text>
      </View>
    </ScrollView>
  );
}
