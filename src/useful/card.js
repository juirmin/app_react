import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import CAvatar from './avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
const no = ['white', 'white'];
const looked = ['gray', 'gray'];
const ig = ['#FCDF8F', '#BF2634'];

const CCard = ({name}) => (
  <Card>
    <Card.Title
      title={name}
      subtitle="Card Subtitle"
      left={e => <CAvatar props={name.slice(0, 2)} cr={no} />}
    />
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Actions style={{display: 'flex', justifyContent: 'space-between'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          style={{marginLeft: 5, marginRight: 5}}
          onPress={() => console.log('like')}>
          <Icon color="black" name="heart-o" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5, marginRight: 5}}
          onPress={() => console.log('comment')}>
          <Icon color="black" name="comment-o" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5, marginRight: 5}}
          onPress={() => console.log('share')}>
          <Icon color="black" name="paper-plane-o" size={25} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginLeft: 5, marginRight: 5}}
        onPress={() => console.log('share')}>
        <Icon color="black" name="bookmark-o" size={25} />
      </TouchableOpacity>
    </Card.Actions>
    <Card.Content>
      <Paragraph>IT's test</Paragraph>
    </Card.Content>
  </Card>
);

export default CCard;
