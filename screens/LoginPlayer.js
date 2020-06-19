import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import GaButton from '../components/Button';
export default class Login extends React.Component {

  constructor(props){
    super(props)
    this.state={
      mobile_number : "",
      username : "",
      password : "",
      error_mobile_number : "",
      error_password : ""

    }
  }

  empty_mobile_number_validator(){
    if(this.state.mobile_number==""){
      this.setState({error_mobile_number:"Please fill mobile number"})
    }else{
      this.setState({error_mobile_number:""})
    }
  }
  empty_password_validator(){
    if(this.state.password==""){
      this.setState({error_password:"Please fill password"})
    }else{
      this.setState({error_password:""})
    }
  }
  render() {
    const { navigation } = this.props;

    return (
        
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <Block flex center>
          <LinearGradient
          colors={[materialTheme.COLORS.GRADIENT_START, materialTheme.COLORS.GRADIENT_END]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        </Block> */}
        {/* <Block flex space="between" style={styles.padded}> */}
        

          <Block row flex space="around" style={{ zIndex:2 }}>
          <Block flex center>            
              <Block>
                <Text color="white" size={60}>LOGIN</Text>
              </Block>
              <Block>
                <Input placeholder="Mobile Number" type="number-pad" placeholderTextColor="white" color="white" style={styles.input}
                  onChange = {(Value)=> this.setState({mobile_number : Value})}
                  onBlur = {()=>this.empty_mobile_number_validator()}
                />
                <Text style={{color : 'red',marginLeft:20}}>{this.state.error_mobile_number}</Text>
                <Input placeholder= "Password" password viewPass placeholderTextColor="white" color="white" iconColor="white" style={styles.input}
                  onChange = {(Value)=> this.setState({password : Value})}
                  onBlur = {()=>this.empty_password_validator()}
                />
                <Text style={{color : 'red',marginLeft:20}}>{this.state.error_password}</Text>
              </Block>
            
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                
                onPress={() => navigation.navigate('App')}
                >
                Login
              </Button>
              <Block row>
              <Text color="white"> Do not have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}>
               <Text color="#9C26B0" style={{fontWeight:"bold"}}>Signup</Text> 
              </TouchableOpacity>
              </Block>
            
          </Block>
          </Block>
        </KeyboardAvoidingView>
        
    //   </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 1,
    position: 'relative',
    bottom: theme.SIZES.BASE*3,
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
    borderColor:"black",
    borderBottomColor: "white",
    backgroundColor:"black"
  },
  
});
