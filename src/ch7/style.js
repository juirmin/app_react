import React from 'react';
import {StyleSheet} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
const style = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
  listitem: {
    height: 60,
    width: 95 * vw,
    backgroundColor: 'white',
    borderLeftColor: 'blue',
    borderLeftWidth: 5,
    marginBottom: 15,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  hm: {
    height: 97 * vh,
  },
  wm: {
    width: 100 * vw,
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    color: 'blue',
    fontWeight: '900',
    marginBottom: 10,
  },
});
export default style;
