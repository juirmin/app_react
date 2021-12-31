import React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
const HomeRoute = () => <Text>Home</Text>;
const CalendarRoute = () => <Text>Calendar</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'home', icon: 'home'},
    {key: 'calendar', title: 'calendar', icon: 'calendar-month'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    calendar: CalendarRoute,
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
