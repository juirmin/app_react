import React from 'react';
import {StyleSheet} from 'react-native';
import {vw, vh, vmin, vmax} from './viewport';
const style = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
  listitem: {
    height: 60,
    width: 85 * vw,
    backgroundColor: 'white',
    borderLeftColor: 'blue',
    borderLeftWidth: 5,
    marginTop: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  hm: {
    height: 100 * vh,
  },
  wm: {
    width: 100 * vw,
  },
});
export default style;
