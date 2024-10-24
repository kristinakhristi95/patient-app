// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import PatientList from './PatientList';
import PatientDetails from './PatientDetails';
import CriticalPatients from './CriticalPatients';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Patient List" component={PatientList} />
        <Stack.Screen name="Patient Details" component={PatientDetails} />
        <Stack.Screen name="Critical Patients" component={CriticalPatients} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}