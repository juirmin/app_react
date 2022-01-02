import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import TodoItem from './todoitem';
const TodoList = ({showDialog}) => {
  return (
    <View
      style={[
        {
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          paddingTop: 10,
        },
      ]}>
      <TodoItem showDialog={showDialog} />
    </View>
  );
};
export default TodoList;
