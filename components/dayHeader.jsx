import days from "../constants/days";
import months from "../constants/months";
import { View, Text } from "react-native";
import numberPronoun from "../constants/numberOrder";
import styles from "../styles/general";

export default function DayHeader(props) {
  const date = props.date ?? {
    day: 0,
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const safeDay = Number.isInteger(date.day) ? date.day : 0;
  const safeDate = Number.isInteger(date.date)
    ? date.date
    : new Date().getDate();
  const safeMonth = Number.isInteger(date.month) ? date.month : 0;
  const safeYear = Number.isInteger(date.year)
    ? date.year
    : new Date().getFullYear();

  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
      <Text style={styles.mainText}>
        {days[safeDay] ?? days[0]}, {safeDate}
        {numberPronoun(safeDate)}
      </Text>
      <Text style={styles.secondaryText}>
        {months[safeMonth] ?? months[0]} {safeYear}
      </Text>
    </View>
  );
}
