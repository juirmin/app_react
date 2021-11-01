import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TodoItem from './todoitem';
import style from './style';
export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
          time: '14:43',
          completed: false,
        },
        {
          id: 2,
          title: 'Visit pathology lab',
          subTitle: 'Prepare relevant notes',
          time: '16:00',
          completed: true,
        },
        {
          id: 3,
          title: 'Attend gym',
          subTitle: 'Wearing sportswear',
          time: '17:20',
          completed: false,
        },
        {
          id: 4,
          title: 'Cook food',
          subTitle: 'Go to the supermarket to prepare ingredients',
          time: '19:00',
          completed: false,
        },
        {
          id: 5,
          title: 'watching TV',
          subTitle: 'Relax time',
          time: '20:00',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <View
        style={[
          {
            display: 'flex',
            alignItems: 'center',
          },
          style.hm,
        ]}>
        <Text
          style={[
            {fontWeight: '900', fontSize: 20, color: 'black', marginTop: 10},
          ]}>
          代辦事項
        </Text>
        <View>
          <TodoItem todos={this.state.todos} />
        </View>
      </View>
    );
  }
}
