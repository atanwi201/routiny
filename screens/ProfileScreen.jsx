import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import colors from "../styles/color";
import ListTask from "../assets/listTask";
export default function HomeScreen(prop) {
  const [text, setText] = useState("");
  function resolveChange(e) {
    setText(e);
  }
  function btnPress() {
    Alert.alert("profile", text);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <TextInput
        onChangeText={resolveChange}
        placeholder="name"
        style={{
          minHeight: "10px",
          backgroundColor: colors.primary,
          minWidth: "50%",
          textAlign: "center",
          borderRadius: "21px",
          color: colors.tertiary,
        }}
        placeholderTextColor={colors.secondary}
      ></TextInput>
      <Button onPress={btnPress} title="done" color={colors.primary}>
        done
      </Button>
    </View>
  );
}
