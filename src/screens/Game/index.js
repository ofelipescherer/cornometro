import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header'


export default function Game(){

    return(
        <View style={styles.container}>
            <Header />
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8E7DE',
        alignItems: 'center',
        borderWidth: 11,
        borderColor: "#316D49",
      },
})