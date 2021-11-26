import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
const completedIcon = 'https://i.imgur.com/jxsdKdh.png';
const unCompletedIcon = 'https://i.imgur.com/zrs3alB.png';
const Todo = ({props}) => {
  console.log(props);
  return (
    <View style={style.listitem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={{
              uri: props.completed ? completedIcon : unCompletedIcon,
            }}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        </View>
        <View>
          <Text
            style={
              (style.title,
              props.completed && {textDecorationLine: 'line-through'})
            }>
            {props.title}
          </Text>
          <Text style={props.completed && {textDecorationLine: 'line-through'}}>
            {props.subTitle}
          </Text>
        </View>
      </View>
      <View>
        <Text>{props.time}</Text>
      </View>
    </View>
  );
};
const TodoItem = ({todos}) => {
  console.log(todos);
  const todoNode = todos.map(todo => <Todo props={todo} key={todo.id}></Todo>);
  return todoNode;
};
export default TodoItem;
