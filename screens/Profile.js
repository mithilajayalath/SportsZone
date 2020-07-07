import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform} from 'react-native';
import { Block, Text, theme,Input } from 'galio-framework';

import { HeaderHeight } from "../constants/utils";
import { Avatar ,Button,Icon} from 'react-native-elements';
//firebase
import firebase from '../firebase';
import 'firebase/firestore';
const firestoreDB = firebase.firestore();



const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {

  constructor(props) {
    //console.log("constructor" ,usersCollection);
    super(props);

    this.state = {
      username: "",
      mobile:"",
      gender:"",
      matches:"",
      wins:" ",
  
    }
  }
  
  updateInputVal = (val, prop) => {
    console.log("update individual"+val);
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  render(){
    return (
      <Block flex style={styles.profile} >
      <ScrollView>
        <Block flex backgroundColor="#3BAD36" >
          <ImageBackground 
            //source={{uri: Images.Profile}}
            //backgroundColor='black'
            style={styles.profileContainer}
            //imageStyle={styles.profileImage}
            >
            <Block flex  >
              <Block  row middle   >
                    <Avatar
                      rounded
                      size="xlarge"
                      source={{
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
              </Block>
              
              <Block style={styles.profileTexts}  >
                <Text color="white" size={28} style={{ paddingTop: 25 }} >{'Rusiri Illesinghe'}</Text>
              </Block>

              
            </Block>

          </ImageBackground>
        </Block>
        <Block flex style={styles.options} >
          <Text>User Name</Text>
          <Input
              placeholder="Rusiri Illesinghe"
              right
              icon="heart"
              family="antdesign"
              iconSize={14}
              iconColor="blue"
              placeholderTextColor="#4F8EC9"
              value={this.state.username}
              onChangeText={(val) => this.updateInputVal(val, 'username')}

          />
          <Text>Mobile</Text>
          <Input
            placeholder="0771905830"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
            value={this.state.mobile}
            onChangeText={(val) => this.updateInputVal(val, 'mobile')}

          />
          <Text>Gender</Text>
          <Input
            placeholder="Female"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
            value={this.state.gender}
            onChangeText={(val) => this.updateInputVal(val, 'gender')}

          />
          <Text>Matches Played</Text>
          <Input
            placeholder="21"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
            value={this.state.matches}
            onChangeText={(val) => this.updateInputVal(val, 'matches')}

          />
          <Text>Wins</Text>
          <Input 
            placeholder="11"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
            value={this.state.wins}
            onChangeText={(val) => this.updateInputVal(val, 'wins')}

          />
          <Button
          iconRight
          title="Update Profile"
          />
        </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    paddingTop:0,
    marginTop:  -HeaderHeight/2,
  },

  profileContainer: {
    marginTop:HeaderHeight,
    width: width,
    height: height ,
  },

  profileTexts: {
    paddingLeft: theme.SIZES.BASE * 5,
    paddingBottom:0,
    paddingTop:0,
    zIndex: 2,

  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 32,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius:13,
    borderBottomRightRadius:13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
});
