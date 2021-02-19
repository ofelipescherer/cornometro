import React from 'react';

import { useFonts, Inika_400Regular, Inika_700Bold } from '@expo-google-fonts/inika';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"

export default function Wellcome() {
let [fontsLoaded] = useFonts({
    Inika_400Regular,
    Inika_700Bold,
});

if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <View style={styles.container}>
    <Image source={require('../../../assets/app/black-icon.png')} style={styles.image}/>
      <Text style={styles.textTitle}>Atenção!!!</Text>
      <Text style={styles.text}>ESTE É UM APLICATIVO PARA BRINCAR E NÃO DEVE SER LEVADO A SÉRIO</Text>

      <View style={styles.wrapperCheck}>
        <TouchableOpacity style={styles.checkBox}>
          <Icon name="check" size={40} color="#FFFF" /> 
        </TouchableOpacity>
        <Text style={styles.labelCheckBox}>Entendido</Text>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7DE',
    alignItems: 'center',
    fontFamily: 'Inika_700Bold',
    marginTop: 50,
    margin: 15,
    borderWidth: 11,
    borderColor: "#316D49",
  },
  image: {
      justifyContent: 'flex-start',
      marginBottom: 40,
  },
  textTitle: {
    fontFamily: 'Inika_700Bold',
    fontSize: 60,
  },
  text: {
    fontFamily: 'Inika_400Regular',
    fontSize: 35,
    textAlign: 'center',
  },
  wrapperCheck: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkBox: {
    width: 50,
    height: 50,
    borderWidth: 5,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    
  },
  labelCheckBox: {
    fontFamily: 'Inika_700Bold',
    fontSize: 35,
  },
});
