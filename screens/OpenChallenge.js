import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList,View,Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Block, Text, Input, theme,Card } from 'galio-framework';
import Theme from '../constants/Theme';

const { width } = Dimensions.get('screen');

const DATA =[
  {
    id:"121",
    title: 'Team C',
    time:"3.00PM",
    logo:'https://www.freepnglogos.com/uploads/arsenal-logo-png/arsenal-logo-symbol-arsenal-stl-model-grb-stl-arsenal-21.png',
    date:"17th July 2020",
    venue:"Colombo Futsal Club"
  },
  {
    id:"124",
    title: 'Team D',
    time:"6.00PM",
    logo:'https://pluspng.com/img-png/chelsea-png-file-chelsea-fc-svg-600.png',
    date:"20th July 2020",
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
          <View style={{flex:2, flexDirection: 'column',justifyContent:"center"}}>
              <Text size={16}>{item.title}</Text>
          </View>
           
           <View style={{flex:4, flexDirection: 'column', alignItems:"flex-end",justifyContent:"center", paddingRight:10}}>
           <Text>{item.time}</Text>
           <Text >{item.date}</Text>
           <Text>{item.venue}</Text>
           </View>
           <View style={{flex:2, flexDirection: 'column', justifyContent:"center" }}>
           <TouchableOpacity style={{alignSelf:"center"}}>
             <Icon
              name='trophy'
              family='material-community'
              color='green'
              size={30}
            />  
          </TouchableOpacity>
           
           </View>
           {/* <View style={{flex:1, flexDirection: 'column', justifyContent:"center" }}>
           <TouchableOpacity>
             <Icon
              name='close'
              family='FontAwesome5'
              color='red'
            />  
          </TouchableOpacity>
           
           </View> */}

         </View>
         }
         keyExtractor={item => item.id}
         />


 )
    
  }

  render() {
    return (
      <Block flex style={styles.home}>
        <View style={styles.head}>
          
          <Image source = {{uri:"https://i.ya-webdesign.com/images/trophy-vector-png-4.png"}} style={styles.imageViewHead} />
          <Text style={styles.headText}>OPEN CHALLENGES</Text>
        </View>
        {this.renderProducts()}
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
head:{
  width:width,
  height:width/3,
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
    height: width/5 ,
    margin: 7,
    borderRadius : 7,
    alignSelf:"center"
}
});
