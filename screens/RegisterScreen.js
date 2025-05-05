import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>تسجيل مستخدم جديد</Text>
      <Button title="عودة لتسجيل الدخول" onPress={() => navigation.navigate('تسجيل الدخول')} />
    </View>
  );
}