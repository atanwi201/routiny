import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { databaseStart } from "./db/db";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTask from "./assets/listTask";
import Gear from "./assets/gear";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black", borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Planner"
        component={HomeScreen}
        options={{ tabBarIcon: ListTask }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{ tabBarIcon: Gear }}
      />
    </Tab.Navigator>
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
