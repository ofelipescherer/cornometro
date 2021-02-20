import React from 'react';
import { StyleSheet , Text, View, Image, TouchableOpacity, Button } from 'react-native';



export default function Header(){
    return(
        <Image source={require('../../../assets/app/black-icon.png')} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 50,
        justifyContent: 'flex-start',
        marginBottom: 40,
        color: "#FFF",
    },
})