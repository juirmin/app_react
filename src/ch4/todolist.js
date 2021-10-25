import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TodoItem from './todoitem';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, title: 'delectus aut autem', completed: false},
        {id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
        {id: 3, title: 'fugiat veniam minus', completed: false},
        {id: 4, title: 'et porro tempora', completed: true},
        {
          id: 5,
          title:
            'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <Text>代辦事項</Text>
        <View>
          <TodoItem todos={this.state.todos} />
        </View>
      </View>
    );
  }
}
