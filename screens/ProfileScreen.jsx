import { useState } from "react";
import { TextInput, Button, Alert, Text } from "react-native";
import colors from "../styles/color";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/general";
import { Link } from "@react-navigation/native";
export default function ProfileScreen(prop) {
  const [text, setText] = useState("");
  function resolveChange(e) {
    setText(e);
  }
  function btnPress() {
    Alert.alert("profile");
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.background,
      }}
    >
      <Link screen="EditTemplate" style={styles.mainText}>
        edit Template
      </Link>
      <Link screen="privacyPolicy" style={styles.mainText}>
        privacy policy
      </Link>
      <Link screen="EditTemplate" style={styles.mainText}>
        edit Template
      </Link>
    </SafeAreaView>
  );
}
