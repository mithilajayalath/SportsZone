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

  empty_mobile_number_validator(){
    if(this.state.mobile_number==""){
      this.setState({error_mobile_number:"Please fill mobile number"})
    }else{
      this.setState({error_mobile_number:""})
    }
    }
  empty_username_validator(){
    if(this.state.username==""){
      this.setState({error_username:"Please fill email"})
    }else{
      this.setState({error_username:""})
    }
  }
  empty_password_validator(){
    if(this.state.password==""){
      this.setState({error_password:"Please fill password"})
    }else{
      this.setState({error_password:""})
    }
  }

  empty_confirm_password_validator(){
    if(this.state.confirm_password==""){
      this.setState({error_confirm_password:"Please fill confirm password"})
    }else{
      this.setState({error_confirm_password:""})
    }
  }
  password_validator(){
    if(this.state.password==this.state.confirm_password){
      this.setState({error:"passwords does not match"})
    }else{
      this.setState({error:""})
    }
  }
  
  updateInputVal = (val, prop) => {
    console.log("update individual"+val);
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  handleSignUp = () => {
    const { username, password } = this.state
    firebase.auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => this.props.navigation.navigate('App'))
        .catch(error => Alert.alert(error.code))
}

/*  registerUser = () => {

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
      auth.createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
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
  
    }
    console.log("exitting from register user..")
  }*/

  render() {
    //console.log("render");
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <StatusBar barStyle="light-content" />
          <Block row flex space="around" style={{ zIndex: 1 }}>
            <Block flex center>
              <Block>
                <Text color="black" size={60}>SignUp</Text>
              </Block>
              <Block>
                <Input placeholder="Mobile Number" 
                      minLenght={10} 
                      maxLength={10} 
                      placeholderTextColor="black" 
                      type="number-pad" 
                      color="black" 
                      style={styles.input}
                      value={this.state.mobile_number}
                      onChangeText={(val) => this.updateInputVal(val, 'mobile_number')}
                      onBlur={() => this.empty_mobile_number_validator()}
                />
                <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_mobile_number}</Text>

                <Input placeholder="Email" 
                  placeholderTextColor="black" 
                  minLenght={3} color="black" 
                  style={styles.input}
                  value={this.state.username}
                  onChangeText={(val) => this.updateInputVal(val, 'username')}
                  onBlur={() => this.empty_username_validator()}
                  autoCapitalize='none'
                />
                <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_username}</Text>
              
                <Input placeholder="Password" 
                  password 
                  viewPass 
                  placeholderTextColor="black" 
                  minLenght={6} color="black" 
                  iconColor="black" 
                  style={styles.input}
                  value={this.state.password}
                  onChangeText={(val) => this.updateInputVal(val, 'password')}
                  onBlur={() => this.empty_password_validator()}
                  secureTextEntry={true}
                />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error_password}</Text>

              <Input placeholder="Confirm Password" 
                password 
                viewPass 
                placeholderTextColor="black" 
                minLenght={6} color="black" 
                iconColor="black" 
                style={styles.input}              
                value={this.state.confirm_password}
                onChangeText={(val) => this.updateInputVal(val, 'confirm_password')}
                secureTextEntry={true}
                //onBlur = {()=>this.empty_confirm_password_validator()}
                onBlur = {()=>this.password_validator()}
              />
              <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.error}</Text>

            </Block>

            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.GREEN}
              // onPress={() => this.validate_feild()}
              onPress={() => this.handleSignUp()}
            //onPress={console.log("in button click")}
            //onPress={() => navigation.navigate('App')}
            >
              SignUp
            </Button>

            <Block row>
              <Text color="black"> Do you already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text color={materialTheme.COLORS.GREEN} style={{ fontWeight: "bold" }}>Login</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    borderColor: "white",
    borderBottomColor: "black",
    backgroundColor: "white"
  },
});

