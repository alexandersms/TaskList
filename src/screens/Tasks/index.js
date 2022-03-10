import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Hello les gens',
      isCompleted: false,
    },
  ]);

  const renderItem = ({item}) => <Text>{item.title}</Text>;

  return (
    <FlatList
      ListHeaderComponent={<Header />}
      contentContainerStyle={styles.container}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#7ed6df',
  },
});

export default TasksScreen;
