import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList,View,Image,TouchableOpacity } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';
import Theme from '../constants/Theme';

const { width } = Dimensions.get('screen');

const DATA =[
  {
    id:123,
    title: 'Team A',
    time:"4.00PM",
    logo:'https://pluspng.com/img-png/manchester-united-png-manchester-united-logo-png-809.png',
    date:"05th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:122,
    title: 'Team B',
    time:"6.30PM",
    logo:'https://pluspng.com/img-png/manchester-city-fc-png-manchester-city-fc-png-1024.png',
    date:"06th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:121,
    title: 'Team C',
    time:"4.00PM",
    logo:'https://www.freepnglogos.com/uploads/arsenal-logo-png/arsenal-logo-symbol-arsenal-stl-model-grb-stl-arsenal-21.png',
    date:"07th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:124,
    title: 'Team D',
    time:"4.00PM",
    logo:'https://pluspng.com/img-png/chelsea-png-file-chelsea-fc-svg-600.png',
    date:"12th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:131,
    title: 'Team C',
    time:"4.00PM",
    logo:'https://www.freepnglogos.com/uploads/arsenal-logo-png/arsenal-logo-symbol-arsenal-stl-model-grb-stl-arsenal-21.png',
    date:"07th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:134,
    title: 'Team D',
    time:"4.00PM",
    logo:'https://pluspng.com/img-png/chelsea-png-file-chelsea-fc-svg-600.png',
    date:"12th July 2020",
    venue:"Colombo Futsal Club"
  },
];

export default class Home extends React.Component {
  

  renderProducts = () => {
    return (
     
      <FlatList
           data={DATA}
           renderItem={({item})=>
           <View style={styles.list}>
 
           <Image source = {{uri:item.logo}} style={styles.imageView} />
          <View style={{flex:2, flexDirection: 'column',justifyContent:"center", alignItems:"center"}}>
              <Text size={16}>{item.title}</Text>
          </View>
           
           <View style={{flex:4, flexDirection: 'column', alignItems:"flex-end",justifyContent:"center", paddingRight:20}}>
           <Text>{item.time}</Text>
           <Text >{item.date}</Text>
           <Text>{item.venue}</Text>
           </View>
           

         </View>
         }
         keyExtractor={item => item.id}
         />


 )
    
  }

  render() {
    return (
      <Block flex style={styles.home}>
        {this.renderProducts()}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
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
  list:{
    flex:1, 
    flexDirection: 'row', 
    justifyContent:"space-evenly",
    backgroundColor:"#fff",
    //borderRadius:25,
    borderBottomWidth:10,
    borderBottomColor:Theme.COLORS.BORDER_COLOR,
    paddingVertical:10,
  },
  imageView: {
    width: width/5,
    height: width/5 ,
    margin: 7,
    borderRadius : 7,
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
FloatingButtonStyle: {
  resizeMode: 'contain',
  width: 50,
  height: 50,
  //backgroundColor:'black'
},

});
