import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList,View,Image,TouchableOpacity } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { AntDesign } from '@expo/vector-icons'; 
 

import { Icon, Product } from '../components';
import Theme from '../constants/Theme';

const { width } = Dimensions.get('screen');

const DATA =[
  {
    id:123,
    title: 'Mithila Jayalath',
    time:"4.00PM",
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BA8Cz7zVmsHKaVMLhpaL1LwnwFClTjXgMg&usqp=CAU',
    date:"05th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:122,
    title: 'Yasas Ramanayake  ',
    time:"6.30PM",
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BA8Cz7zVmsHKaVMLhpaL1LwnwFClTjXgMg&usqp=CAU',
    date:"06th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:121,
    title: 'Piyumal DK ',
    time:"4.00PM",
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BA8Cz7zVmsHKaVMLhpaL1LwnwFClTjXgMg&usqp=CAU',
    date:"07th July 2020",
    venue:"Colombo Futsal Club"
  },

  {
    id:119,
    title: 'Isuru Jayamanne',
    time:"4.00PM",
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BA8Cz7zVmsHKaVMLhpaL1LwnwFClTjXgMg&usqp=CAU',
    date:"07th July 2020",
    venue:"Colombo Futsal Club"
  },

  {
    id:118,
    title: 'Niroshan Jeyakumar',
    time:"4.00PM",
    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BA8Cz7zVmsHKaVMLhpaL1LwnwFClTjXgMg&usqp=CAU',
    date:"07th July 2020",
    venue:"Colombo Futsal Club"
  },
  
];

export default class Home extends React.Component {
  

  renderProducts = () => {
    const { navigation } = this.props;
    return (
     
      <FlatList
           data={DATA}
           renderItem={({item})=>
           <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}>
           <View style={styles.list }>
            
           <Image source = {{uri:item.logo}} style={styles.imageView} />
          {/* <View style={{flex:2, flexDirection: 'column',justifyContent:"center", alignItems:"center"}}>
              
          </View> */}
           
           <View style={{flex:4, flexDirection: 'column', alignItems:"flex-end",justifyContent:"center", paddingRight:120}}>
           <Text size={16}>{item.title}</Text>
           
           </View>

         </View>
         </TouchableOpacity>
         }
         keyExtractor={item => item.id}
         />


 )
    
  }

  render() {
    const { navigation } = this.props;
    return (
      
      <Block flex style={styles.home}>
        
        <View style={{padding:20,flexDirection:"row",backgroundColor:"#32cd32", justifyContent:"center"}}>
          <Text style={{fontSize:30, color:"white"}}>Players</Text>
        </View>
        
        

        <View style={{padding:5}}></View>
        {this.renderProducts()}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('CreateTeam')}
          style={styles.TouchableOpacityStyle}>
          <Icon name="plus-circle" family="material-community" size={55}
          color="#3BAD36" backgroundColor="#fff"
          />
        </TouchableOpacity>
        
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
  //  width: width - theme.SIZES.BASE * 2,
  //  paddingVertical: theme.SIZES.BASE * 2,
    flex:1,
    flexDirection:"row",
  },
  TouchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 35,
    bottom: 35,
  },
  list:{
    flex:1, 
    flexDirection: 'row', 
    justifyContent:"space-evenly",
    backgroundColor:"#fff",
    borderBottomWidth:10,
    borderBottomColor:Theme.COLORS.BORDER_COLOR,
    padding:1,
    borderRadius:20
  },
  imageView: {
    width: width/5,
    height: width/5 ,
    margin: 7,
    borderRadius : 7,
},

});