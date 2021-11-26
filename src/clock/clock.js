import {transform} from '@babel/core';
import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import style from './style';
const GetNewDate = () => {
  const date = new Date();
  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return [hr, min, sec];
};
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      hr: '',
      min: '',
      sec: '',
      hrz: '0deg',
      minz: '0deg',
      secz: '0deg',
    };
  }
  componentDidMount() {
    this.timeid = setInterval(() => {
      let deg = 6;
      let ttt = GetNewDate();
      this.setState({
        hrz: (ttt[0] * 30).toString() + 'deg',
        minz: (ttt[1] * deg).toString() + 'deg',
        secz: (ttt[2] * deg).toString() + 'deg',
      });
      this.setState({hr: ttt[0], min: ttt[1], sec: ttt[2]});
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.timeid);
  }

  render() {
    return (
      <View style={[style.clock]}>
        <Text>{this.state.hr}</Text>
        <Text>{this.state.min}</Text>
        <Text>{this.state.sec}</Text>
        <View
          style={[
            style.hr,
            {transform: [{rotateZ: this.state.hrz}, {translateY: -40}]},
          ]}></View>
        <View
          style={[
            style.min,
            {
              transform: [{rotateZ: this.state.minz}, {translateY: -45}],
            },
          ]}></View>
        <View
          style={[
            style.sec,
            {
              transform: [{rotateZ: this.state.secz}, {translateY: -45}],
            },
          ]}></View>
        <View
          style={{
            height: 10,
            width: 10,
            position: 'absolute',
            zIndex: 20,
            backgroundColor: 'white',
            borderRadius: 5,
          }}
        />
        <View
          style={{
            height: 350,
            width: 350,
            position: 'absolute',
            zIndex: 21,
            backgroundColor: 'transparent',
            borderRadius: 175,
            borderColor: 'white',
            borderWidth: 1,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            zIndex: 20,
            color: 'white',
            fontSize: 30,
            transform: [{translateY: -150}],
          }}>
          12
        </Text>
        <Text
          style={{
            position: 'absolute',
            zIndex: 20,
            color: 'white',
            fontSize: 30,
            transform: [{translateY: 150}],
          }}>
          6
        </Text>
        <Text
          style={{
            position: 'absolute',
            zIndex: 20,
            color: 'white',
            fontSize: 30,
            transform: [{translateX: 150}],
          }}>
          3
        </Text>
        <Text
          style={{
            position: 'absolute',
            zIndex: 20,
            color: 'white',
            fontSize: 30,
            transform: [{translateX: -150}],
          }}>
          9
        </Text>
      </View>
    );
  }
}
