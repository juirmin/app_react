import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, FAB, Dialog, Button, Title, Headline} from 'react-native-paper';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import {AppContext} from '../Context';
import {useContext} from 'react';
import TodoList from './todolist';
import {useState} from 'react';
export default Home = () => {
  const {todos, setTodos, AddEvents} = useContext(AppContext);
  const handlePress = (id, isCompleted) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? {...todo, completed: isCompleted} : todo;
    });
    setTodos(newTodos);
  };
  const [visible, setVisible] = useState(false);
  const [todo, setTodo] = useState([]);
  const showDialog = ({props}) => {
    setTodo(props);
    setVisible(true);
  };
  const hideDialog = () => setVisible(false);
  return (
    <View style={[{flex: 1}]}>
      <TodoList showDialog={showDialog} />
      <Dialog
        visible={visible}
        style={[
          styles.dialog,
          {
            display: visible ? 'flex' : 'none',
          },
        ]}
        onDismiss={hideDialog}>
        <View style={[{flex: 0.8, padding: 20}]}>
          <Headline style={[{marginBottom: 20}]}>
            Do you wnat complete it?
          </Headline>
          <Title>Title : {todo.title}</Title>
          <Title>SubTitle:{todo.subTitle}</Title>
          <Title>Time : {todo.time}</Title>
        </View>
        <View
          style={[
            {
              flex: 0.2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 10,
            },
          ]}>
          <Button onPress={hideDialog}>CANCEL</Button>
          <Button
            onPress={() => {
              handlePress(todo.id, !todo.completed);
              hideDialog();
            }}>
            Done
          </Button>
        </View>
      </Dialog>
      <AddEvents initday={new Date().toISOString().slice(0, 10)} />
    </View>
  );
};
const styles = StyleSheet.create({
  dialog: {
    position: 'absolute',
    width: 80 * vw,
    height: 80 * vw,
    zIndex: 100,
  },
});
