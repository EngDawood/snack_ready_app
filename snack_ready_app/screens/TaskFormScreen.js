import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Switch } from 'react-native';
import { addTask, updateTask } from '../api';

export default function TaskFormScreen({ route, navigation }) {
  const task = route.params?.task;
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [done, setDone] = useState(task?.done || false);

  const handleSave = () => {
    const newTask = { title, description, done, user: 'user@example.com' };
    if (task) {
      updateTask(task._id, newTask).then(() => navigation.goBack());
    } else {
      addTask(newTask).then(() => navigation.goBack());
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="عنوان المهمة" value={title} onChangeText={setTitle} />
      <TextInput placeholder="الوصف" value={description} onChangeText={setDescription} />
      <Switch value={done} onValueChange={setDone} />
      <Button title="حفظ" onPress={handleSave} />
    </View>
  );
}