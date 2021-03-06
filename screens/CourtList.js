import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList,View,Image,TouchableOpacity } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';
import Theme from '../constants/Theme';

import { SearchBar } from 'react-native-elements';

const { width } = Dimensions.get('screen');

const DATA =[
  {
    id:"21",
    title: ' Court 1',
    time:"4.00PM",
    logo:'https://preview.free3d.com/img/2014/02/2202328842931013571/uff2xoft-900.jpg',
    date:"05th July 2020",
    venue:"Colombo 07"
  },
  {
    id:"22",
    title: 'Court 2',
    time:"6.30PM",
    logo:'https://i.pinimg.com/474x/25/cb/7b/25cb7b511ad21961ec2c1b625f4527cb--soccer-photography-bangkok.jpg',
    date:"06th July 2020",
    venue:"Negombo"
  },
  {
    id:"23",
    title: 'Court 3',
    time:"4.00PM",
    logo:'http://biblus.accasoftware.com/en/wp-content/uploads/sites/2/2019/04/Render-aereo-campo-futsal-software-BIM-architettura-Edificius.jpg',
    date:"07th July 2020",
    venue:"1, galleface, colombo"
  },
  {
    id:"124",
    title: 'Colombo Futsal club',
    time:"4.00PM",
    logo:'http://roar.media/english/reports/wp-content/uploads/2014/10/10524686_759213854130883_1461396911850055322_n-550x413.jpg',
    date:"12th July 2020",
    venue:"70 Galle Rd, Dehiwala"
  },
  {
      id:"24",
      title: 'CR7',
      time:"4.00PM",
      logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-RgTEJObX4mxcMOgxz0qrh6CJd1y_jh-4-Q&usqp=CAU',
      date:"12th July 2020",
      venue:"23 Mile Post Ave, Colombo"
    },
];

export default class Home extends React.Component {

  state = {
      search: '',
    };

  courtPress(id_num){
    const {navigation} = this.props;
    const title = DATA.filter(x => x.id === id_num)[0].title;
    const logo = DATA.filter(x => x.id === id_num)[0].logo;
    //const title = court.title;
    //const logo = court.logo
    console.log(title);
    navigation.navigate('CourtProfile',{title: title, picture: logo});
  }

  updateSearch = (search) => {
      this.setState({ search });
  };

  renderProducts = () => {
    const {navigation} = this.props;
    return (

      <FlatList
           data={DATA}
           renderItem={({item})=>

               <View style={styles.list}>

                   <Image source = {{uri:item.logo}} style={styles.imageView} />

                    <View style={{flex:2, flexDirection: 'column',justifyContent:"flex-start", alignItems:"flex-start"}}>
                        <TouchableOpacity style={{flex:2, flexDirection: 'column',justifyContent:"center", alignItems:"center"}} onPress={() => this.courtPress(item.id)}>
                            <View style={{flex:2, flexDirection: 'column',justifyContent:"center", alignItems:"center"}}>
                                <Text size={16} style={{fontWeight: "bold"}}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>

                       <View style={{flex:4, flexDirection: 'column', alignItems:"flex-end",justifyContent:"center", paddingRight:20}}>
                           <Text></Text>
                           <Text ></Text>
                           <Text>{item.venue}</Text>
                       </View>
                   </View>



               </View>
             }
         keyExtractor={item => item.id}
         />


 )

  }

  render() {
  const {navigation} = this.props;
  const { search } = this.state;
    return (
      <Block flex style={styles.home}>
        {this.renderProducts()}
        <SearchBar
            round
            lightTheme
            placeholder="Search..."
            containerStyle={{backgroundColor: theme.COLORS.TRANSPARENT}}
            //inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: theme.COLORS.WHITE}}
            onChangeText={this.updateSearch}
            //onClearText={someMethod}
            value={search}
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


});
