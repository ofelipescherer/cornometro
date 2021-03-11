import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header'
import { StatusBar } from 'expo-status-bar';
import Footer from '../../Components/Footer'
import { useNavigation } from '@react-navigation/native';

export default function Game(){
    const [hide, setHide] = useState(true)
    const [randomPercent, setRandomPercent] = useState(0)
    const navigation = useNavigation();

    function generateRandomNumber(){
        setHide(!hide);
        let randomNumber = Math.floor(Math.random() * 101)
        setRandomPercent(randomNumber)
    }

    function redirectToResult(){
        navigation.navigate('Result', {number : randomPercent})
    }

    useEffect(() => {
        //Depois de certo tempo, ele troca de tela. (Tempo de animação dos números)
        setTimeout(() => {
            redirectToResult()
        }, 2000)

    }, [randomPercent])

    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Text style={styles.text}>O quão corno(a) você é?</Text>
            {/*Usando a propria variavel hide para desabilitar o botão*/}
            <TouchableOpacity onPress={generateRandomNumber} disabled={!hide}>
                {
                    hide ? <Image 
                    source={require('../../../assets/app/black-icon.png')} 
                    style={styles.image} 
                    /> : null
                }
                {
                    !hide ? <Text style={styles.percentText}>{randomPercent}%</Text> : null
                }
                
            </TouchableOpacity>
            <Text style={styles.text2}>Aperte no cornometro e descubra</Text>
            
        </ScrollView>
        <StatusBar style="dark"></StatusBar>
        <Footer />
        </>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8E7DE',
        flexGrow : 1,
        alignSelf: "stretch",
        alignItems: 'center',
      },
    text: {
        textAlign: "center",
        fontSize: 40,
        marginTop: 40,
        margin: 5,
    },
    text2: {
        textAlign: "center",
        fontSize: 32,
        marginTop: 40,
        margin: 5,
    },
    image: {
        margin: 20,
        height: 200,
        width: 205,
    },
    percentText: {
        marginTop: 20,
        fontSize: 100,
    }
})