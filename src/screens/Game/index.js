import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header'
import { StatusBar } from 'expo-status-bar';
import Footer from '../../Components/Footer'

export default function Game(){
    const [hide, setHide] = useState(true)
    function generateRandomNumber(){
        setHide(!hide);
        alert(hide)
    }

    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Text style={styles.text}>O quão corno(a) você é?</Text>
            <TouchableOpacity onPress={generateRandomNumber}>
                {
                    hide ? <Image source={require('../../../assets/app/black-icon.png')} style={styles.image}/> : null
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
    }
})