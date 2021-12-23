import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatusItem from './StatusItem';

/**
 * 設備狀態列表
 * TODO:
 *     1. 實作各個設備狀態統計項目及其對應的操作事件
 *     2. 【進階實作範圍】點擊設備狀態統計項目即顯示對應狀態的設備列表
 *     3. 【進階實作範圍】設備狀態統計項目加入已選取的樣式
 */
const TodoItem = ({props, onLongPress, onPress, mode}) => {
  const todoNode = props.map(todo => (
    <StatusItem
      props={todo}
      onPress={onPress}
      onLongPress={onLongPress}
      mode={mode}
      key={todo.id}
      cr={todo.id % 2 == 1 ? 'green' : 'gray'}
    />
  ));
  return todoNode;
};
const StatusList = ({props, onLongPress, onPress, mode}) => {
  let list = [
    {id: 0, name: '全部設備', num: 0, showtip: false, tip: 'test'},
    {id: 1, name: '已開啟', num: 0, showtip: true, tip: '長按全部開啟'},
    {id: 2, name: '已關閉', num: 0, showtip: true, tip: '長按全部關閉'},
  ];
  let opennum = 0;
  props.forEach(element => {
    if (element.isOpened) {
      opennum++;
    }
  });
  list[0].num = props.length;
  list[1].num = opennum;
  list[2].num = list[0].num - list[1].num;
  return (
    <View style={[styles.list]}>
      <TodoItem
        props={list}
        onLongPress={onLongPress}
        onPress={onPress}
        mode={mode}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default StatusList;
