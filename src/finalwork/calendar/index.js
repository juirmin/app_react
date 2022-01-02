import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Title, Headline} from 'react-native-paper';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import {AppContext} from '../Context';
import {useContext} from 'react';
import {Agenda} from 'react-native-calendars';
export default CalendarPage = () => {
  const {todos} = useContext(AppContext);
  let items = {};
  todos.forEach(element => {
    if (!(element.time in items)) {
      items[element.time] = [element];
    } else {
      items[element.time].push(element);
    }
  });
  return (
    <View style={[{backgroundColor: 'white', flex: 1}]}>
      <Agenda
        items={items}
        pagingEnabled={true}
        calendarWidth={320}
        onDayPress={day => console.log(day)}
        renderEmptyData={() => {
          return (
            <View
              style={[
                {
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{fontSize: 10 * vw}}>Nothing here</Text>
            </View>
          );
        }}
        renderItem={(item, firstItemInDay) => {
          return (
            <ScrollView>
              <View
                style={[
                  styles.cal,
                  {
                    borderLeftColor: item.completed ? 'gray' : 'blue',
                    borderLeftWidth: 5,
                  },
                ]}>
                <Headline
                  style={
                    item.completed && {
                      textDecorationLine: 'line-through',
                      color: 'gray',
                    }
                  }>
                  {item.title}
                </Headline>
                <Title
                  style={
                    item.completed && {
                      textDecorationLine: 'line-through',
                      color: 'gray',
                    }
                  }>
                  {item.subTitle}
                </Title>
              </View>
            </ScrollView>
          );
        }}
        renderKnob={() => {
          return (
            <View
              style={[
                {
                  height: 2,
                  width: 200,
                  borderRadius: 2,
                  backgroundColor: 'gray',
                  marginTop: 10,
                },
              ]}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cal: {
    backgroundColor: 'white',
    margin: 10,
    minHeight: 10 * vh,
    padding: 10,
  },
});
