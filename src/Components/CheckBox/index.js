import React from 'react';
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';




export default function CheckBox(props){

    function handleChange() {
        const { onChange } = props;
        if (onChange){
          return onChange();
        }
      }

    return (
        <View style={styles.wrapperCheck}>
        <TouchableOpacity style={styles.checkBox} onPress={handleChange}>
          {
            props.value ? <Icon name="check" size={40} color="#000" /> : null
          }
          
        </TouchableOpacity>
        <Text style={styles.labelCheckBox}>{props.label}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
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
    fontSize: 35,
  },
})


CheckBox.prototype={
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
}