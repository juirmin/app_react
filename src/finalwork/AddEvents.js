import React from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {
  Text,
  FAB,
  Dialog,
  Button,
  Title,
  Headline,
  TextInput,
} from 'react-native-paper';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import {AppContext} from './Context';
import {useContext} from 'react';
import {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
const ChooseCalendar = ({day, setDay}) => {
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const hideDialog = () => setVisible(false);
  return (
    <View style={{}}>
      <Button
        style={[
          {
            borderWidth: 2,
            borderColor: 'gray',
            margin: 10,
            backgroundColor: 'white',
          },
        ]}
        onPress={() => {
          Keyboard.dismiss();
          showDialog();
        }}>
        {day}
      </Button>
      <Dialog
        visible={visible}
        style={[
          {
            width: 80 * vw,
            height: 80 * vw,
            bottom: -180,
            right: 10 * vw,
          },
          {
            display: visible ? 'flex' : 'none',
          },
        ]}>
        <CalendarPicker
          initialDate={new Date()}
          width={80 * vw}
          height={80 * vw}
          onDateChange={day => {
            setDay(day.toISOString().slice(0, 10));
            hideDialog();
          }}
        />
      </Dialog>
    </View>
  );
};
export default AddEvents = ({initday}) => {
  const {todos, setTodos} = useContext(AppContext);
  const [day, setDay] = useState(initday);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const hideDialog = () => setVisible(false);
  const add = (tit, sub) => {
    let todo = {
      id: todos.length + 1,
      title: tit,
      subTitle: sub,
      time: day,
      completed: false,
    };
    setTodos([...todos, todo]);
  };
  return (
    <View style={{height: 100 * vh, width: 100 * vw, position: 'absolute'}}>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={[
          styles.dialog,
          {zIndex: 10},
          {
            display: visible ? 'flex' : 'none',
          },
        ]}>
        <Dialog.Title>Create a new Todo</Dialog.Title>
        <Dialog.Content>
          <ChooseCalendar style={{zIndex: 10}} day={day} setDay={setDay} />
          <TextInput
            style={[{margin: 10, zIndex: -1}]}
            label="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[{margin: 10, zIndex: -1}]}
            label="SubTitle"
            value={subtitle}
            onChangeText={setSubtitle}
          />
        </Dialog.Content>
        <Dialog.Actions style={[{zIndex: -1}]}>
          <Button onPress={hideDialog}>CANCEL</Button>
          <Button
            onPress={() => {
              add(title, subtitle);
              setTitle('');
              setSubtitle('');
              setDay(initday);
              hideDialog();
            }}>
            Done
          </Button>
        </Dialog.Actions>
      </Dialog>
      <FAB
        style={[
          styles.fab,
          {
            display: visible ? 'none' : 'flex',
          },
        ]}
        icon="plus"
        onPress={() => {
          showDialog();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 1,
    bottom: 80,
    backgroundColor: '#6200EE',
  },
  dialog: {
    top: -20 * vh,
  },
});
