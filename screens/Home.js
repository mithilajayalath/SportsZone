import React from 'react';
import { StyleSheet, Dimensions, ScrollView,View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';
import { Header,ListItem, PricingCard ,Divider } from 'react-native-elements';
import { Images, materialTheme } from '../constants';
const { width } = Dimensions.get('screen');
import products from '../constants/products';
import firebase from '../firebase';
import 'firebase/firestore';


export default class Home extends React.Component {
  /*constructor(props){
    super(props);
    this.state=({player:[],newPlayername:'',loading:false});
    this.ref=firebase.firestore().collection('player');
    console.log(this.ref.doc());//
  }
  
  componentDidMount(){
    this.unsubscribe=this.ref.onSnapshot((querySnapshot)=>{
      const playerData=[];
      querySnapshot.forEach((doc)=>{ 
        playerData.push({name:doc.data().name});
        
      });

      this.setState({
        player:playerData,
        loading:false
      });
    });
  }
*/
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
  <ScrollView>
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
});
