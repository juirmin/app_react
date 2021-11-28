import React from 'react';
import {StyleSheet} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
const style = StyleSheet.create({
  clock: {
    height: 97 * vh,
    width: 100 * vw,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  hr: {
    position: 'absolute',
    width: 8,
    height: 80,
    backgroundColor: '#ff105e',
    borderRadius: 6,
    zIndex: 10,
    elevation: 10,
  },
  min: {
    position: 'absolute',
    width: 4,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 6,
    zIndex: 11,
    elevation: 10,
  },
  sec: {
    position: 'absolute',
    width: 2,
    height: 150,
    backgroundColor: '#000',
    borderRadius: 6,
    zIndex: 12,
    elevation: 10,
  },
});
export default style;
