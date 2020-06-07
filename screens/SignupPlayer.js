import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
        
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <Block flex center>
          <ImageBackground
            source={{  uri: Images.Onboarding }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </Block> */}
        {/* <Block flex space="between" style={styles.padded}> */}
        

          <Block row flex space="around" style={{ zIndex:1 }}>
          <Block flex center>            
              <Block>
                <Text color="white" size={60}>SignUp</Text>
              </Block>
              <Block>
                <Input placeholder="Mobile Number"  placeholderTextColor="white" type="number-pad" color="white" style={styles.input}/>
                <Input placeholder="Name" placeholderTextColor="white" color="white"  style={styles.input}/>
                <Input placeholder= "Password" password viewPass placeholderTextColor="white" color="white" iconColor="white" style={styles.input}/>
                <Input placeholder= "Confirm Password" password viewPass placeholderTextColor="white" color="white" iconColor="white" style={styles.input}/>
              </Block>
            
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('App')}>
                SignUp
              </Button>
              <Block row>
              <Text color="white"> Do you already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
               <Text color="#9C26B0" style={{fontWeight:"bold"}}>Login</Text> 
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

  },
  input: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    borderColor:"black",
    borderBottomColor: "white",
    backgroundColor:"black"
  },
});
