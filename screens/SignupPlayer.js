import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import firebase from '../firebase';
import 'firebase/firestore'


//const playerCollection = firebase.firestore().collection('player');
const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { Value } from 'react-native-reanimated';


export default class SignupPlayer extends React.Component {

  constructor(props) {
    //console.log("constructor" ,usersCollection);
    super(props);

    this.state = {
      mobile_number: "",
      username: "",
      password: "",
      error_mobile_number: "",
      error_username: "",
      error_password: "",
      error_confirm_password: "",
      error: "",
      confirm_password: "",
    }
  }

registerUser = () => {
  console.log("begginning register user function");
  if(this.state.username === '' && this.state.password === '') {
    Alert.alert('Enter details to signup!')
  } else {
    console.log("not empty",this.state.username,this.state.password);
    var user_data={ name: this.state.username,phone:this.state.mobile_number,email:this.state.username, password:this.state.password }//can change name at profile..temporary it's mail address
    this.setState({
    //isLoading: true,
    })
    const auth = firebase.auth();
    //console.log("auth ",auth);
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //console.log(errorCode);
      Alert.alert(errorMessage);
      if(errorMessage){//push user_data
        console.log("in if");
        return ;
      }
      
    });
    /*try{

  registerUser = () => {
    console.log("begginning register user function");
    if (this.state.username === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      console.log("not empty", this.state.username, this.state.password);
      var user_data = { name: this.state.username, phone: this.state.mobile_number, email: this.state.username, password: this.state.password }//can change name at profile..temporary it's mail address
      this.setState({
        //isLoading: true,
      })
      const auth = firebase.auth();
      //console.log("auth ",auth);
      firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(errorCode);
        Alert.alert(errorMessage);
        if (errorMessage) {//push user_data
          console.log("in if");
          return;
        }
      });
      /*try{
  
        firebase.firestore().collection('player/').doc('aaa').set({
          name: 'Ada Lovelace',
          age: '30',
        }).then(() => {
          console.log('User added!');
          Alert.alert('Addedd Successfully');
        });
      }catch(error){
        console.log("error ",error.message);
        Alert.alert(error.code);
      }*/
    }
    console.log("exitting from register user..")
  }

  render() {
    //console.log("render");
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <Block flex center>
<ImageBackground
source={{ uri: Images.Onboarding }}
style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
/>
</Block> */}
        {/* <Block flex space="between" style={styles.padded}> */}

        <Block row flex space="around" style={{ zIndex: 1 }}>
          <Block flex center>
            <Block>
              <Text color="white" size={60}>SignUp</Text>
            </Block>
            <Block>
              <Input placeholder="Mobile Number" minLenght={10} maxLength={10} placeholderTextColor="white" type="number-pad" color="white" style={styles.input}
                //onChange = {(Value)=> this.setState({mobile_number : Value})}
                value={this.state.mobile_number}
               // onChangeText={(val) => this.updateInputVal(val, 'mobile_number')}
                onChangeText={(val) => this.updateInputVal(val, 'mobile_number')}
                onBlur={() => this.empty_mobile_number_validator()}
              />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_mobile_number}</Text>
              <Input placeholder="Name" placeholderTextColor="white" minLenght={3} color="white" style={styles.input}
                //onChange = {(Value)=> this.setState({username : Value})}
                value={this.state.username}
                onChangeText={(val) => this.updateInputVal(val, 'username')}
                onBlur={() => this.empty_username_validator()}
              />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_username}</Text>
              <Input placeholder="Password" password viewPass placeholderTextColor="white" minLenght={6} color="white" iconColor="white" style={styles.input}
                //onChange = {(Value)=> this.setState({password : Value})}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                onBlur={() => this.empty_password_validator()}
              />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_password}</Text>
              <Input placeholder="Confirm Password" password viewPass placeholderTextColor="white" minLenght={6} color="white" iconColor="white" style={styles.input}
                //onChange = {(Value)=> this.setState({confirm_password : Value})}
                value={this.state.confirm_password}
                onChangeText={(val) => this.updateInputVal(val, 'confirm_password')}
              //onBlur = {()=>this.empty_confirm_password_validator()}
              //onBlur = {()=>this.password_validator()}
              />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_confirm_password}</Text>
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error}</Text>
            </Block>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              // onPress={() => this.validate_feild()}
              onPress={() => this.registerUser()}
            //onPress={console.log("in button click")}
            //onPress={() => navigation.navigate('App')}
            >
              SignUp
            </Button>

            <Block row>
              <Text color="white"> Do you already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text color="#9C26B0" style={{ fontWeight: "bold" }}>Login</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
      // </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 1,
    position: 'relative',
    bottom: theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 10,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  input: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,

  },
  input: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    borderColor: "black",
    borderBottomColor: "white",
    backgroundColor: "black"
  },
});

