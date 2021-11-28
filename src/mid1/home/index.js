import React from 'react';
import Banner from '../banner';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import CAvatar from '../avatar';
import CCard from '../card';
import postData from '../postData';
const style = StyleSheet.create({
  scrollh: {
    flexGrow: 0.025,
    height: 10 * vh,
    width: 100 * vw,
    backgroundColor: 'white',
  },
});
const Avatarlist = ({props, onPress}) => {
  const todoNode = props.map(img => (
    <CAvatar props={img} onPress={onPress} key={img.posterId} />
  ));
  return todoNode;
};
const Postlist = ({props, UserDict, onPress}) => {
  let show = [];
  props.forEach(e => {
    if (e.posterId in UserDict) {
      if (UserDict[e.posterId].sub) {
        show.push({...e, sub: UserDict[e.posterId].sub});
      }
    }
  });
  console.log(show);
  const todoNode = show.map(post => (
    <CCard onPress={onPress} props={post} key={post.id} />
  ));
  return todoNode;
};

let UserDict = {};
postData.forEach(e => {
  UserDict[e.posterId] = {
    posterId: e.posterId,
    posterName: e.posterName,
    avatar: e.avatar,
    sub: false,
  };
});
console.log(UserDict);
const User = Object.values(UserDict);
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      postData,
      User,
      UserDict,
    };
  }
  handlePress = id => {
    console.log(id);
    const newTodos = this.state.User.map(post => {
      return post.posterId === id
        ? {...post, sub: post.sub ? false : true}
        : post;
    });

    this.setState({
      User: newTodos,
    });
    let newUserDict = {};
    newTodos.forEach(e => {
      newUserDict[e.posterId] = {
        posterId: e.posterId,
        posterName: e.posterName,
        avatar: e.avatar,
        sub: e.sub,
      };
    });
    this.setState({
      UserDict: newUserDict,
    });
  };
  render() {
    return (
      <View style={[{flex: 1, backgroundColor: 'white'}]}>
        <Banner />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={[style.scrollh]}>
          <Avatarlist props={this.state.User} onPress={this.handlePress} />
        </ScrollView>
        <ScrollView>
          <Postlist
            props={this.state.postData}
            UserDict={this.state.UserDict}
            onPress={this.handlePress}
          />
        </ScrollView>
      </View>
    );
  }
}
