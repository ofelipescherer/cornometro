import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wellcome from './src/screens/Wellcome';
import Game from './src/screens/Game';
import Routes from './src/Routes';
import Header from './src/Components/Header';

export default function App() {

  const screens = {
    WELLCOME: 'WELLCOME',
    GAME: 'GAME',
    RESULT: 'RESULT'
  }

  const [screenState, setScreenState] = React.useState(screens.WELLCOME);

  function changeScreen(){
    setScreenState()
  }

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
