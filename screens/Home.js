import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView,View ,TextInput,Image} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';
import { Header,ListItem, PricingCard ,Divider } from 'react-native-elements';
import { Images, materialTheme } from '../constants';
const { width } = Dimensions.get('screen');
import products from '../constants/products';
import firebase from '../firebase';
import 'firebase/firestore';
import { GradientHeader } from "react-native-gradient-header";
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
    const {navigation} = this.props;
    return (
      <Block flex style={styles.home}>
        <View style={styles.head}> 
          <Image style={styles.imageViewHead} />
          <Text style={styles.headText}>FInd a Team & Play Together!</Text>
        </View>
  <ScrollView>
<PricingCard
  color="#12b8bd"
  price="4 new"
  //info={['Negambo : 3','Colombo    :1']}
  button={{ title: 'UpComming Bookings', icon: 'flight-takeoff'} }
  onButtonPress={()=>navigation.navigate('MyMatches')}
/>
<PricingCard
  color="#4890e1"
  price="6 new"
  button={{ title: 'Open Channenges', icon: 'flight-takeoff' }}
  onButtonPress={()=>navigation.navigate('OpenChallenges')}
/>
<PricingCard
  color="#05a57e"
  price="10 new"
  button={{ title: 'Tournaments', icon: 'flight-takeoff' }}
/>
</ScrollView>
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
  imageView: {
    width: width/5,
    height: width/5 ,
    margin: 7,
    borderRadius : 7,
},
head:{
  width:width,
  height:width/6,
  backgroundColor:"#3BAD36",
  justifyContent:"center",
},
headText:{
  alignSelf:"center",
  fontSize:20,
  color:"white",
  
},
imageViewHead:{
  width: width/5,
    height: width/30 ,
    margin: 7,
    borderRadius : 7,
    alignSelf:"center"
}
});
