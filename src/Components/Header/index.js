import React from 'react';
import { StyleSheet , Text, View, Image, TouchableOpacity, Button, StatusBar } from 'react-native';



export default function Header(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/app/white-icon.png')} style={styles.image}/>
            <Text style={styles.text}>Cornometro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        display: "flex",
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems: "baseline",
        backgroundColor: "#316D49",
        alignSelf: "stretch",
    },
    image: {
        marginTop: 30,
        marginBottom: 30,
    },
    text: {
        fontSize: 40,
        color: '#FFF',
        margin: 15,
    }
})