import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {emptyString} from '../../../../../constants/global.constants';
import localStrings from '../../../../../constants/global.strings';
import {useAppDispatch, useAppSelector} from '../../../../../redux/hooks';
import fetchTodos from '../../../../../redux/todos/todos.api';
import {checkAlternateValue} from '../../../../../utils/checkAlternateValue';
import landingScreenStyles from '../../../../Home/Home.styles';
import {TodoListType} from '../TodoList.type';
import colors from '../../../../../constants/colors';

const AllTab = () => {
  // to make api call
  const dispatch = useAppDispatch();

  // to control api error states
  const [apiMessage, setApiMessage] = useState(emptyString);

  // to get api data / error values
  const {todosData, isTodosLoading, isTodosError} = useAppSelector(
    (state: any) => state.todos,
  );

  // make api call on first render
  useEffect(() => {
    !todosData.length && dispatch(fetchTodos());
  }, [dispatch, todosData.length]);

  // set api loading error messages in local state
  useEffect(() => {
    isTodosLoading && setApiMessage(localStrings.home.loading);
    isTodosError && setApiMessage(localStrings.home.somethingWrong);
  }, [isTodosLoading, isTodosError]);

  const renderTodoList = (todoListProps: TodoListType) => {
    const {item: todo, index} = todoListProps;

    const dynamicStatusValue = todo.completed ? 'Completed' : 'In Progress';
    const dynamicStatusColor = todo.completed ? colors.green : colors.red;

    return (
      <View key={index} style={allTabStyles.listContainer}>
        <Text style={allTabStyles.todoTitle}>{todo.title}</Text>
        <Text style={{...allTabStyles.statusText, color: dynamicStatusColor}}>
          {dynamicStatusValue}
        </Text>
      </View>
    );
  };

  // if loading or error display same
  if (checkAlternateValue(isTodosLoading, isTodosError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{apiMessage}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={todosData}
        renderItem={renderTodoList}
        updateCellsBatchingPeriod={5}
        style={allTabStyles.rootListContainer}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default AllTab;

const allTabStyles = StyleSheet.create({
  rootListContainer: {
    paddingVertical: 15,
  },
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
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
  },
});
