import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import homeImg from './images/home.png';

/**
 * 請勿異動此檔案的程式碼
 */
const Header = () => (
  <View style={styles.content}>
    <Image source={homeImg} style={styles.icon} />
    <Text style={styles.text}>我的家</Text>
  </View>
);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#FFF',
    fontSize: 38,
    fontWeight: '600',
    paddingLeft: 10,
  },
});

export default Header;
