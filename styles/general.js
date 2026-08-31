import { StyleSheet } from "react-native";
import colors from "./color";

const styles = StyleSheet.create({
  mainText: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: "700",
  },
  secondaryText: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "500",
  },
  taskText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 12,
    borderBottomWidth: "1px",
    borderBottomColor: "white",
  },
  screenStyle: {
    backgroundColor: colors.background,
    height: "100%",
  },
  textInput: {
    backgroundColor: colors.primary,
    color: colors.tertiary,
  },
  dividerBottom: {
    backgroundColor: colors.secondary,
  },
  dividerTop: {
    backgroundColor: colors.primary,
    height: 1,
  },
});

export default styles;
