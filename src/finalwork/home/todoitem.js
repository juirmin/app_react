import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import style from './style';
import {Text} from 'react-native-paper';
import {AppContext} from '../Context';
import {useContext} from 'react';

const Todo = ({props, showDialog}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => showDialog({props})}>
        <View style={[style.listitem, props.completed && {display: 'none'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={style.title}>{props.title}</Text>
              <Text>{props.subTitle}</Text>
            </View>
          </View>
          <View>
            <Text>{props.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const TodoItem = ({showDialog}) => {
  const {todos} = useContext(AppContext);
  const todoNode = todos.map(todo => (
    <Todo props={todo} showDialog={showDialog} key={todo.id}></Todo>
  ));
  return todoNode;
};
export default TodoItem;
