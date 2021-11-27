import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from 'react-native';
import style from './style';
const completedIcon = 'https://i.imgur.com/jxsdKdh.png';
const unCompletedIcon = 'https://i.imgur.com/zrs3alB.png';
const Todo = ({props, onPress}) => {
  return (
    <TouchableOpacity
      style={[style.listitem, props.completed && {borderLeftColor: 'gray'}]}
      onPress={() => onPress(props.id, !props.completed)}>
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
            style={[
              style.title,
              props.completed && {
                textDecorationLine: 'line-through',
                color: 'gray',
              },
            ]}>
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
    </TouchableOpacity>
  );
};
const TodoItem = ({todos, onPress}) => {
  let DATA = [
    {
      title: 'Completed',
      data: [],
    },
    {
      title: 'Uncompleted',
      data: [],
    },
  ];
  todos.forEach(e => {
    if (e.completed) {
      DATA[0].data = [...DATA[0].data, e];
    } else {
      DATA[1].data = [...DATA[1].data, e];
    }
  });
  // const todoNode = todos.map(todo => (
  //   <Todo props={todo} key={todo.id} onPress={onPress}></Todo>
  // ));
  // return todoNode;
  return (
    <SafeAreaView style={[style.container]}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Todo props={item} onPress={onPress} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={[style.header]}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};
export default TodoItem;
