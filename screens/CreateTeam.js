import React from 'react';
import { Dimensions, View, Text, StatusBar,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import firebase from '../firebase';
import 'firebase/firestore'

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const colors = {
  themeColour : "#4263ec",
  white : '#fff',
  background : '#f4f6fc',
  tint : '#2b49c3',
}




export default class Team extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <View>

      </View>
    );
  }
}

