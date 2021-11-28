import React, {Component} from 'react';
import postData from './postData';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './home';
const HomeRoute = () => <Home />;
const SearchRoute = () => <Text>Search</Text>;
const AddRoute = () => <Text>Add</Text>;
const ShopRoute = () => <Text>Shop</Text>;
const UserRoute = () => <Text>User</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'home', icon: 'home'},
    {key: 'search', title: 'search', icon: 'magnify'},
    {key: 'add', title: 'add', icon: 'sticker-plus-outline'},
    {key: 'shop', title: 'shop', icon: 'shopping'},
    {key: 'user', title: 'user', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    add: AddRoute,
    shop: ShopRoute,
    user: UserRoute,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: 'black'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
    />
  );
};

const App = () => {
  return <MyComponent />;
};

export default App;
