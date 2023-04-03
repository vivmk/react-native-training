import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TodoListType} from '../TodoList.type';
import {useAppSelector} from '../../../../../redux/hooks';
import colors from '../../../../../constants/colors';

const InProgressTab = () => {
  // to get api data / error values
  const {inProgressTodos} = useAppSelector((state: any) => state.todos);

  const renderTodoList = (todoListProps: TodoListType) => {
    const {item: todo, index} = todoListProps;

    return (
      <View key={index} style={inProgressTabStyles.listContainer}>
        <Text style={inProgressTabStyles.todoTitle}>{todo.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={inProgressTodos}
        renderItem={renderTodoList}
        updateCellsBatchingPeriod={5}
        style={{paddingVertical: 15}}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default InProgressTab;

const inProgressTabStyles = StyleSheet.create({
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
    borderColor: colors.red,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
  },
});
