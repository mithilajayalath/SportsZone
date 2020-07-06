import React from 'react';
import { Dimensions, View, Text, StatusBar,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons, AntDesign ,MaterialIcons,Entypo} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import firebase from '../firebase';
import 'firebase/firestore'
import { color } from 'react-native-reanimated';

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
      <View 
        style ={{
          flex:1,
          backgroundColor: colors.themeColour,
        }}>
        {/* <View style={{padding:85}}>

        </View> */}
        
            <View style={{padding:20,flexDirection:"row",backgroundColor:"black"}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Teams')}>
            <View style={{flexDirection:"row",backgroundColor:"black"}}>
            <MaterialIcons
                  name="arrow-back"
                  size={30}
                  style={{color:colors.themeColour }}
                  
                />
            
            </View>
            </TouchableOpacity>
                <View style={{justifyContent:"center",flexDirection:"row",backgroundColor:"black"}}>
                    <Text style={{fontSize:20, color:"white"}}>                       Team                            </Text>
                </View>

                <View style={{justifyContent:"flex-end",flexDirection:"row",backgroundColor:"black"}}>
                    <AntDesign
                    name="adduser"
                    size={30}
                    style={{color:colors.themeColour}}
                    
                    />
                </View>
            </View>   
        
        <View style={{padding:20}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                />
                <Text style={{fontSize:20}}>      Mithila Jayalath                       </Text>
                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}}  
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                />
                <Text style={{fontSize:20}}>      Yasas Ramanayake                 </Text>
                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}}  
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                  
                />
                <Text style={{fontSize:20,}}>      Piyumal DK                               </Text>
                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}}   
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                  
                />
                <Text style={{fontSize:20,}}>      Saroj Premadasa                      </Text>
                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}}  
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                  
                />
                <Text style={{fontSize:20,}}>      Isuru Jayamanne                      </Text>
                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}} 
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <Entypo
                  name="user"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                  
                />
                <Text style={{fontSize:20,}}>      Niroshan Jeyakumar                </Text>

                <AntDesign
                  name="delete"
                  size={25}
                  style={{color:"red"}}  
                />
                
            </View>
        </TouchableOpacity>
        <View style={{padding:5}}></View>
        
      </View>
    );
  }
}

