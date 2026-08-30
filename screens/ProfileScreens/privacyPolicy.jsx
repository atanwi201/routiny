import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import colors from "../../styles/color";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.window}>
        <Text style={styles.title}>Privacy Policy</Text>

        <ScrollView
          style={styles.scrollArea}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text}>
            This Privacy Policy explains how Routiny collects, uses, and
            protects your information when you use our app.
          </Text>

          <Text style={styles.subtitle}>1. Information We Collect</Text>
          <Text style={styles.text}>
            We may collect task and schedule data you enter into the app, app
            preferences, device information, and usage data needed to improve
            the experience.
          </Text>

          <Text style={styles.subtitle}>2. How We Use Information</Text>
          <Text style={styles.text}>
            We use your information to provide the planner features, save tasks,
            improve reliability, fix bugs, and personalize the app experience.
          </Text>

          <Text style={styles.subtitle}>3. Data Storage</Text>
          <Text style={styles.text}>
            Your data may be stored locally on your device. If cloud features
            are added later, data may also be stored on secure servers.
          </Text>

          <Text style={styles.subtitle}>4. Third-Party Services</Text>
          <Text style={styles.text}>
            The app may use analytics, crash reporting, or notification
            services, which may collect data according to their own privacy
            policies.
          </Text>

          <Text style={styles.subtitle}>5. Children’s Privacy</Text>
          <Text style={styles.text}>
            This app is not intended for children under 13, and we do not
            knowingly collect personal information from children under 13.
          </Text>

          <Text style={styles.subtitle}>6. Your Options</Text>
          <Text style={styles.text}>
            You can control app permissions, notifications, and local data from
            your device settings or through app settings.
          </Text>

          <Text style={styles.subtitle}>7. Security</Text>
          <Text style={styles.text}>
            We take reasonable steps to protect your data, but no method of
            storage or transmission is completely secure.
          </Text>

          <Text style={styles.subtitle}>8. Contact</Text>
          <Text style={styles.text}>
            If you have questions about this policy, contact:
            support@yourapp.com
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  window: {
    width: "92%",
    maxWidth: 420,
    height: "72%",
    backgroundColor: "#1F150C",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginTop: 12,
    marginBottom: 6,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.primary,
    opacity: 0.9,
  },
  scrollArea: {
    flex: 1,
  },
});
