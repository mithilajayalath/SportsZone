import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList,View,Image } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA =[
  {
    id:123,
    title: 'Team1',
  },
  {
    id:122,
    title: 'Team2',
  },
  {
    id:121,
    title: 'Team3',
  },
  {
    id:124,
    title: 'Team4',
  },
];

export default class Home extends React.Component {
  

  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
     
         <FlatList
              data={DATA}
              renderItem={({item})=>
              <View style={styles.list}>
    
              <Image source = {require('../assets/images/teamLOGO.png')} style={styles.imageView} />
            
              <Text size={20} >{item.title}</Text>
              <View style={{flex:1, flexDirection: 'column'}}>
              <Text>05th July 2020</Text>
              <Text >4.00PM</Text>
              <Text>Colombo Futsal Club</Text>
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
    borderRadius:25,
    paddingVertical:15,
  },
  imageView: {
    width: '25%',
    height: 70 ,
    margin: 7,
    borderRadius : 7,
},

});
