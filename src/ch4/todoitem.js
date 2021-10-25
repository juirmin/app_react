import React from 'react';
import {Text, View} from 'react-native';
const Todo = ({props}) => {
  return (
    <View>
      <Text>ID : {props.id}</Text>
      <Text>Title : {props.title}</Text>
    </View>
  );
};
const TodoItem = ({todos}) => {
  const todoNode = todos.map(todo => <Todo props={todo} key={todo.id}></Todo>);
  return todoNode;
};
export default TodoItem;
