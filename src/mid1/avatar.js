import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const no = ['white', 'white'];
const looked = ['gray', 'gray'];
const ig = ['#FCDF8F', '#BF2634'];
const CAvatar = ({props, cr = true, onPress}) => {
  const size = 45;
  const bordersize = 8;
  let color = ig;
  if (cr) {
    color = !props.sub ? ig : looked;
  } else {
    color = no;
  }
  return (
    <View
      style={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 3,
          marginLeft: 7,
          marginRight: 7,
          height: size + bordersize,
          with: size + bordersize,
        },
      ]}>
      <LinearGradient
        colors={color}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[
          {
            height: size + bordersize,
            with: size + bordersize,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: size + bordersize,
            backgroundColor: 'white',
          },
        ]}>
        <TouchableOpacity
          style={{borderColor: 'transparent', borderWidth: bordersize / 2}}
          onPress={() => onPress(props.posterId)}>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: size / 2,
            }}>
            <Avatar.Image
              size={size}
              source={props.avatar}
              style={{
                backgroundColor: 'black',
              }}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default CAvatar;
