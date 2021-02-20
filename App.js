import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wellcome from './src/screens/Wellcome';
import Game from './src/screens/Game';


export default function App() {
  return (
    <View style={styles.container}>
        <Game />
        {/*<Wellcome />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
