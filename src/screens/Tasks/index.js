import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';
import TaskTile from './TaskTile';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Hello les gens',
      isCompleted: false,
    },
  ]);

  const renderItem = ({item}) => <TaskTile task={item} />;

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
  },
});

export default TasksScreen;
