import React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './home';
import CalendarPage from './calendar';
import Banner from './Banner';
import {Provider} from './Context';
import {Data} from './data';
const HomeRoute = () => <Home />;
const CalendarRoute = () => <CalendarPage />;
const MyComponent = () => {
  const data = Data();
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
    <Provider value={data}>
      <Banner />
      <BottomNavigation
        barStyle={{backgroundColor: 'black'}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
      />
    </Provider>
  );
};

const App = () => {
  return <MyComponent />;
};

export default App;
