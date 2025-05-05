import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { getTasks, deleteTask } from '../api';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    getTasks().then(res => setTasks(res.data)).catch(err => console.error(err));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadTasks);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="إضافة مهمة" onPress={() => navigation.navigate('إضافة / تعديل مهمة')} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('إضافة / تعديل مهمة', { task: item })}
            style={{ padding: 10, borderBottomWidth: 1 }}
          >
            <Text>{item.title} - {item.done ? '✓' : '✗'}</Text>
            <Button title="حذف" onPress={() => { deleteTask(item._id).then(loadTasks); }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}