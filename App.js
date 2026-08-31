import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlannerScreen from "./screens/PlannerScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTask from "./assets/listTask";
import Gear from "./assets/gear";
import colors from "./styles/color";
import { useEffect } from "react";
import { databaseStart } from "./db/db";
import EditTemplate from "./screens/ProfileScreens/editTemplate";
import PrivacyPolicyScreen from "./screens/ProfileScreens/privacyPolicy";
import { Button } from "react-native";
import SeeTemplate from "./screens/ProfileScreens/seeTemplate";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  useEffect(() => {
    databaseStart();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 0 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{ tabBarIcon: ListTask }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: Gear }}
      />
    </Tab.Navigator>
  );
}
function ProfileScreens() {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={MyTabs} //change component
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="privacyPolicy"
        component={PrivacyPolicyScreen} //change component
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EditTemplate"
        component={EditTemplate} //change component
      />
    </>
  );
}
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyTabs"
        component={MyTabs}
      />
      <Stack.Screen
        options={{
          title: "Login",
          headerShown: false,
          //headerStyle: { backgroundColor: colors.background },
          //headerTintColor: colors.primary,
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
        name="Login"
        component={EditTemplate}
      />
      <Stack.Screen
        options={{
          title: "Privacy Policy",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
        name="privacyPolicy"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        options={{
          title: "Edit Template",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
        name="EditTemplate"
        component={SeeTemplate}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
