import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import CameraScreen from './screens/CameraScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
    backgroundColor: "#BA2F16",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff",
  }
      }}>
        <Stack.Screen name="Home" component={Home} options={{title: "PhotoClicker"}}/>
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{title: "Camera"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

