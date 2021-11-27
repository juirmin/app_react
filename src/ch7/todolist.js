import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import TodoItem from './todoitem';
import style from './style';
export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Visit doctors',
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
          completed: true,
        },
        {
          id: 6,
          title: 'delectus aut autem',
          subTitle: 'quis ut nam facilis et officia qui',
          time: '20:00',
          completed: true,
        },
        {
          id: 7,
          title: 'fugiat veniam minus',
          subTitle: 'et porro tempora',
          time: '02:30',
          completed: true,
        },
        {
          id: 8,
          title: 'vero rerum temporibus dolor',
          subTitle: 'et doloremque nulla',
          time: '05:08',
          completed: true,
        },
        {
          id: 9,
          title: 'ab voluptatum amet voluptas',
          subTitle: 'quo laboriosam deleniti aut qui',
          time: '17:22',
          completed: true,
        },
        {
          id: 10,
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
        {
          id: 11,
          title: 'nemo perspiciatis repellat ut',
          subTitle: 'earum doloribus ea doloremque quis',
          time: '20:00',
          completed: true,
        },
        {
          id: 12,
          title: 'sint sit aut vero',
          subTitle: 'repellendus veritatis molestias',
          time: '14:20',
          completed: true,
        },
        {
          id: 13,
          title: 'totam quia non',
          subTitle: 'doloremque quibusdam asperiores',
          time: '16:51',
          completed: false,
        },
        {
          id: 14,
          title: 'totam atque quo nesciunt',
          subTitle: 'tempore ut sint quis recusandae',
          time: '19:08',
          completed: true,
        },
        {
          id: 15,
          title: 'sit reprehenderit omnis quia',
          subTitle: 'qui labore est occaecati recusandae aliquid',
          time: '23:33',
          completed: false,
        },
      ],
    };
  }
  handlePress = (id, isCompleted) => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: isCompleted} : todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

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
        <TodoItem todos={this.state.todos} onPress={this.handlePress} />
      </View>
    );
  }
}
