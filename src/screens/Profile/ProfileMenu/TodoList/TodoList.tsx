import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {emptyString} from '../../../../constants/global.constants';
import localStrings from '../../../../constants/global.strings';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import fetchTodos from '../../../../redux/todos/todos.api';
import {checkAlternateValue} from '../../../../utils/checkAlternateValue';
import landingScreenStyles from '../../../Home/Home.styles';

const TodoList = () => {
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

  // if loading or error display same
  if (checkAlternateValue(isTodosLoading, isTodosError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{apiMessage}</Text>
      </View>
    );
  }

  return (
    <View style={todoListStyles.rootContainer}>
      <Text>Number of todo : {todosData.length}</Text>
    </View>
  );
};

export default TodoList;

const todoListStyles = StyleSheet.create({
  rootContainer: {
    padding: 20,
  },
});
