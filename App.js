import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wellcome from './src/screens/Wellcome';
import Game from './src/screens/Game';


export default function App() {

  const screens = {
    WELLCOME: 'WELLCOME',
    GAME: 'GAME',
    RESULT: 'RESULT'
  }

  const [screenState, setScreenState] = React.useState(screens.WELLCOME);

  function changeScreen(){
    setScreenState(screens.GAME)
  }

  return (
    <View style={styles.container}>
        {screenState === screens.WELLCOME && (
          <Wellcome />
        )}
        {screenState === screens.GAME && (
          <Game />
        )}
        {screenState === screens.RESULT && (
          <Text>RESULT</Text>
        )}
        
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
