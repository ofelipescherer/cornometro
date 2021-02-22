import React from 'react';
import { StyleSheet , Text, View, Image, TouchableOpacity, Button } from 'react-native';



export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 14, color: '#FFF', marginTop: 15,}}>Cornometro</Text>
            <Text style={{fontSize: 14, color: '#FFF', marginBottom: 15, marginTop: 10}}>Made by Felipe with ❤️ from BRAZIL</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent : 'center',
        alignItems: "center",
        backgroundColor: "#316D49",
        alignSelf: "stretch",
    },
})