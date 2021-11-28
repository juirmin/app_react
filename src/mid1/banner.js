import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import Icon from 'react-native-vector-icons/FontAwesome';
const Banner = () => {
  return (
    <View
      style={[
        {
          width: 100 * vw,
          height: 50,
          flexGrow: 0.01,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      ]}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        }}
        style={{
          marginLeft: 10,
          height: 40,
          width: 100,
        }}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button
          style={{height: 'auto', width: 40, borderRadius: 20}}
          color="black"
          onPress={() => console.log('test')}>
          <Icon name="heart-o" size={25}></Icon>
        </Button>
        <Button
          style={{height: 'auto', width: 40, borderRadius: 20}}
          color="black"
          onPress={() => console.log('test')}>
          <Icon name="commenting-o" size={25}></Icon>
        </Button>
      </View>
    </View>
  );
};
export default Banner;
