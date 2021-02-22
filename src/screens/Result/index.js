import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header'
import { StatusBar } from 'expo-status-bar';
import Footer from '../../Components/Footer'
import Data, { data } from '../../Data'


export default function Result(){


    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Image source={data.results[1].image} style={styles.image}/>

            <Text>Salve</Text>
        </ScrollView>
        <Footer/>
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
        height: 250,
        width: 350,
        borderColor: "#316D49",
        borderWidth: 10,
        borderRadius: 40,
    },
    percentText: {
        marginTop: 20,
        fontSize: 100,
    },
})