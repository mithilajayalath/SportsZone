import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from './Icon';
import {Ionicons} from '@expo/vector-icons';
//import Colorsheet from '../constants/color';
const Mybutton = props => {
    return (
        <TouchableOpacity  activeOpacity={0.6} onPress ={props.onPress}>
            <View style={{...styles.button, ...props.style}} >
            {/* <Text>test</Text> */}
            <Ionicons name="md-trophy" size={40} color="black" />
            {/* <Icon name = 'map-marker' size={20} color='black'/> */}
            </View>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        
        paddingHorizontal: 20   ,
        paddingVertical: 12,
        backgroundColor: 'transparent',
        borderRadius: 180,
        borderColor:'black',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
        
    },
    buttonText:{
        color: 'white',
        fontFamily:'open-sans-bold',
        fontSize: 16
    }
});

export default Mybutton;