import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';

const test = [
  {
    title: 'fff',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'sss',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'sss',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'fff',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
let DATA = {};
test.forEach(e => {
  if (DATA[e.title] != undefined) {
    DATA[e.title].data = [...DATA[e.title].data, ...e.data];
  } else {
    DATA[e.title] = e;
  }
});
DATA = Object.values(DATA);
const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
