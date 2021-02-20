import React, { useDebugValue, useState } from 'react';
import { StyleSheet , Text, View, Image, TouchableOpacity, Button } from 'react-native';
import CheckBox from "../../Components/CheckBox";

export default function Wellcome() {
  
  const [check, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <>
    <View style={styles.container}>
    <Image source={require('../../../assets/app/black-icon.png')} style={styles.image}/>
      <Text style={styles.textTitle}>Atenção!!!</Text>
      <Text style={styles.text}>ESTE É UM APLICATIVO PARA BRINCAR E NÃO DEVE SER LEVADO A SÉRIO</Text>
      <CheckBox label="Entendido" onChange={handleCheck} value={check}></CheckBox>
      <TouchableOpacity style={styles.button} disabled={!check}>
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7DE',
    alignItems: 'center',
    borderWidth: 11,
    borderColor: "#316D49",
  },
  image: {
      marginTop: 50,
      justifyContent: 'flex-start',
      marginBottom: 40,
  },
  textTitle: {
    fontSize: 60,
  },
  text: {
    margin: 15,
    fontSize: 35,
    textAlign: 'center',
  },
  button: {
    margin: 30,
    backgroundColor: "#316D49",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    margin: 20,
    color: "#FFF",
  },

});

