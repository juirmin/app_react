import React from 'react';
import Banner from '../banner';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import CAvatar from '../../useful/avatar';
import CCard from '../../useful/card';
const style = StyleSheet.create({
  scrollh: {
    flexGrow: 0.025,
    height: 10 * vh,
    width: 100 * vw,
    backgroundColor: 'white',
  },
});

export default class Home extends React.Component {
  render() {
    return (
      <View style={[{flex: 1, backgroundColor: 'white'}]}>
        <Banner />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={[style.scrollh]}>
          <CAvatar props={'AD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'XD'} />
          <CAvatar props={'JD'} />
        </ScrollView>
        <ScrollView>
          <CCard name={'Test Name'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
          <CCard name={'Real'} />
        </ScrollView>
      </View>
    );
  }
}
