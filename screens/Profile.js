import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform} from 'react-native';
import { Block, Text, theme,Input } from 'galio-framework';

import { HeaderHeight } from "../constants/utils";
import { Avatar ,Button,Icon} from 'react-native-elements';
//firebase
import firebase from '../firebase';
import 'firebase/firestore';
const firestoreDB = firebase.firestore();

//------------------redux----------------------------------------------------------//
/*
import { Provider } from 'react-redux';
import {ReactReduxFirebaseProvider,firebaseReducer} from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { createStore, combineReducers, compose } from 'redux'; 

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
// Initial State...
const initialState = {
  //personData: { },
}

const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// Action Creators
const setPersonData = (personData) => {
  return {
    type: "setPersonData",
    value: personData
  };
};

const watchPersonData = () => {
  return function(dispatch) {
    console.log("persondata : ");
    firebase.database().ref("player").on("value", function(snapshot) {
        
        var personData = snapshot.val();
        var actionSetPersonData = setPersonData(personData);
        dispatch(actionSetPersonData);
        console.log("persondata : ",personData);
    }, function(error) { console.log(error); });
  }
};

const mapStateToProps = (state) => {
  //console.log("persondata : ",state.personData);
  return { 
    personData: state.personData
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    watchPersonData: () => dispatch(watchPersonData())
  };
}
//---------------------redux----------------------------------------------------------/*/
import materialTheme from "../constants/Theme"

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
        <Block flex  >
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
                <Text color="green" size={28} style={{ paddingTop: 25 }} >{'Rusiri Illesinghe'}</Text>
              </Block>

              
            </Block>

          </ImageBackground>
        </Block>
        <Block flex style={styles.options} backgroundColor="#3BAD36" >
          <Text color='white'>User Name</Text>
          <Input
              placeholder="Rusiri Illesinghe"
              right
              icon="heart"
              family="antdesign"
              iconSize={14}
              iconColor="green"
              placeholderTextColor="green"
              value={this.state.username}
              onChangeText={(val) => this.updateInputVal(val, 'username')}

          />
          <Text color='white'>Mobile</Text>
          <Input
            placeholder="0771905830"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="green"
            value={this.state.mobile}
            onChangeText={(val) => this.updateInputVal(val, 'mobile')}

          />
          <Text color='white'>Gender</Text>
          <Input
            placeholder="Female"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="green"
            value={this.state.gender}
            onChangeText={(val) => this.updateInputVal(val, 'gender')}

          />
          <Text color='white'>Matches Played</Text>
          <Input
            placeholder="21"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="green"
            value={this.state.matches}
            onChangeText={(val) => this.updateInputVal(val, 'matches')}

          />
          <Text color='white'>Wins</Text>
          <Input
            placeholder="11"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="green"
            value={this.state.matches}
            onChangeText={(val) => this.updateInputVal(val, 'wins')}

          />
          
          <Button
          
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
    //paddingTop:0,
   // marginTop:  -HeaderHeight/2,
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
    alignItems:"center"

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
