import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const CAvatar = ({props, cr = ['#FCDF8F', '#BF2634']}) => {
  const size = 45;
  const bordersize = 8;
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
        colors={cr}
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
          onPress={() => console.log(props)}>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: size / 2,
            }}>
            <Avatar.Text
              size={size}
              label={props}
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
