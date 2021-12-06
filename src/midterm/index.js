import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Home = () => (
  <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
    <Header />
    <Content />
    {/**
     * TODO: 請將您的「學號」及「姓名」帶入 Footer 頁尾元件呈現
     */}
    <Footer />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
