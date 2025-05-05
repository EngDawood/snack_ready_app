import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="تسجيل الدخول" component={LoginScreen} />
        <Stack.Screen name="تسجيل جديد" component={RegisterScreen} />
        <Stack.Screen name="مهامي" component={HomeScreen} />
        <Stack.Screen name="إضافة / تعديل مهمة" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}