import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView,View ,TextInput} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';
import { Header,ListItem, PricingCard ,Divider } from 'react-native-elements';
import { Images, materialTheme } from '../constants';
const { width } = Dimensions.get('screen');
import products from '../constants/products';
import firebase from '../firebase';
import 'firebase/firestore';
const { AsyncStorage } = require('react-native');

export function  addPlayer(player,addComplete) {
  firebase.firestore().collection('player').add({
    name:player.name,
    createdat:firebase.firestore.FieldValue.serverTimestamp()
  }).then((data)=>addComplete(data))
  .catch((error)=>console.log(error));
}

export async function getPlayer(playersRetrieved) {
  var playerList=[];
  var snapshot=await firebase.firestore().collection('player').get()
  snapshot.forEach((doc)=>{
    playerList.push(doc.data());
  });
  console.log(playerList);
  playersRetrieved(playerList);
}

async function players() {
  const list = [];
  const ref = firebase.firestore().collection('player');
  console.log("in players!");
  ref.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      list.push(doc.data());
    });
  });
  console.log("list",list);
  console.log("snapshot");
}

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name:'',
        gender:''
    };
   // {this.getAll()};
   // players();
  
  }

  getAll=(e)=>{
    console.log("getAll");
    //e.preventDefault();
    this.state.name='rusr';
    firebase.firestore().collection('player').get().then((u)=>{
    }).catch((error)=>{
      console.log(error);
    })
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }



  render() {
    return (
      <Block flex>
      <Header
      rightComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'SportsZone', style: { color: '#fff',fontSize:30} }}
      leftComponent={{ icon: 'home', color: '#fff' }}
      ///backgroundColor= '#3D6DCC'
      backgroundColor={materialTheme.COLORS.GRADIENT_START}
      justifyContent= 'space-around'
    />
  
<PricingCard
  color="red"
  price="4 new"
  info={['Negambo : 3','Colombo    :1']}
  button={{ title: 'UpComming Bookings', icon: 'flight-takeoff' }}
/>
<PricingCard
  color="green"
  price="10 new"
  button={{ title: 'Tournaments', icon: 'flight-takeoff' }}
/>

</Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
