import {TestScheduler} from '@jest/core';
import React from 'react';
import {Text, View} from 'react-native';
import style from './style';
const Todo = ({props}) => {
  return (
    <View style={style.listitem}>
      <View>
        <Text style={style.title}>{props.title}</Text>
        <Text>{props.subTitle}</Text>
      </View>
      <View>
        <Text>{props.time}</Text>
      </View>
    </View>
  );
};
const TodoItem = ({todos}) => {
  const todoNode = todos.map(todo => <Todo props={todo} key={todo.id}></Todo>);
  return todoNode;
};
export default TodoItem;
