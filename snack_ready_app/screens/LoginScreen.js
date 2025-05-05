import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>مرحبا بك، يرجى تسجيل الدخول</Text>
      <Button title="دخول" onPress={() => navigation.navigate('مهامي')} />
      <Button title="تسجيل جديد" onPress={() => navigation.navigate('تسجيل جديد')} />
    </View>
  );
}