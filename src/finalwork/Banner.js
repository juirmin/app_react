import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

/**
 * 請勿異動此檔案的程式碼
 */
const Banner = props => (
  <View style={styles.content}>
    <Text style={styles.copyright}>
      {props.studentId} - {props.studentName}
    </Text>
  </View>
);

Banner.defaultProps = {
  studentId: 'C108156120',
  studentName: '古軒誌',
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  copyright: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 3,
  },
});

export default Banner;
