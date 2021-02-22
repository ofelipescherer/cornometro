import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wellcome from './src/screens/Wellcome';
import Game from './src/screens/Game';
import Routes from './src/Routes';
import Header from './src/Components/Header';
import Result from './src/screens/Result';

export default function App() {

  return (
    <View style={styles.container}>
      <Routes></Routes>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7DE',

  },
});
