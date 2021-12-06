import React from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import DeviceItem from './DeviceItem';

/**
 * 設備列表
 * TODO: 實作產生多個設備項目
 * Tip:
 *     1. 可善用 array.map() 產生多個設備項目
 */
const TodoItem = ({props,onPress}) => {
  const todoNode = props.map(todo => <DeviceItem props={todo} onPress={onPress} key={todo.id}/>);
  return todoNode;
};
const DeviceList = ({props,onPress,mode}) => {
  let list = []
  if(mode==0){
    list = props
  }
  else if(mode==1){
    props.forEach(element => {
      if(element.isOpened){
        list.push(element)
      }
    });
  }
  else if(mode==2){
    props.forEach(element => {
      if(!element.isOpened){
        list.push(element)
      }
    });
  }
  
  return (
    
    <View style={[styles.list]}>
      <TodoItem props={list} onPress={onPress}/>
    </View>
    
  );
};
const styles = StyleSheet.create({
  list:{
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
export default DeviceList;
