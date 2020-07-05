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
      <View 
        style ={{
          flex:1,
          backgroundColor: colors.themeColour,
        }}>
        <View style={{padding:85}}>

        
          <View 
            style ={{
              paddingHorizontal:20,
              paddingVertical:6,
              flexDirection: "row",
              justifyContent:"space-between",
              backgroundColor:colors.tint,
              borderRadius:20,
              marginVertical:20,
              alignItems:"center"
            }}>
            
            <MaterialCommunityIcons 
              name="magnify"
              size={30}
              style={{color:colors.white}}
              
            />
            
          
          </View>
        </View>
        <TouchableOpacity
            onPress={() => navigation.navigate('CreateTeam')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:"black",justifyContent:"flex-end"}}>
              <Text style={{fontSize:20,color:"white"}}>Create team</Text>
              <MaterialCommunityIcons 
                  name="account-group"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                />
            </View>
        </TouchableOpacity>
        <View style={{padding:20}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('ViewTeam')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <MaterialCommunityIcons 
                  name="account-group"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                />
                <Text style={{fontSize:20}}>   Home Team</Text>
            </View>
        </TouchableOpacity>
        <View style={{padding:20}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('ViewTeam')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <MaterialCommunityIcons 
                  name="account-group"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                />
                <Text style={{fontSize:20}}>   Univeristy Team</Text>
            </View>
        </TouchableOpacity>
        <View style={{padding:20}}></View>

        <TouchableOpacity
            onPress={() => navigation.navigate('ViewTeam')}>
            <View style={{padding:20,flexDirection:"row",backgroundColor:colors.background,alignItems:"center",borderRadius:50}}>
              
              <MaterialCommunityIcons 
                  name="account-group"
                  size={30}
                  style={{color:colors.themeColour}}
                  
                  
                />
                <Text style={{fontSize:20,}}>   Colombo Team</Text>
                
            </View>
        </TouchableOpacity>
        {/* <ScrollView>
          {teams.map(task=>(<team
          team={task.team} icon={task.icon} theme={task.theme}/>))}
      </ScrollView> */}
      </View>
    );
  }
}

