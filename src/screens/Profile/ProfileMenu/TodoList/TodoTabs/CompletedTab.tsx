import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TodoListType} from '../TodoList.type';
import {useAppSelector} from '../../../../../redux/hooks';
import colors from '../../../../../constants/colors';

const CompletedTab = () => {
  // to get api data / error values
  const {completedTodos} = useAppSelector((state: any) => state.todos);

  const renderTodoList = (todoListProps: TodoListType) => {
    const {item: todo, index} = todoListProps;

    return (
      <View key={index} style={completedTabStyles.listContainer}>
        <Text style={completedTabStyles.todoTitle}>{todo.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={completedTodos}
        renderItem={renderTodoList}
        updateCellsBatchingPeriod={5}
        style={{paddingVertical: 15}}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default CompletedTab;

const completedTabStyles = StyleSheet.create({
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  listContainer: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    borderColor: colors.green,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
  },
});
