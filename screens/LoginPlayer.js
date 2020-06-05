import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import GaButton from '../components/Button';
export default class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
        
        <Block flex style={styles.container}>
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
                <Input placeholder="Mobile Number"  style={styles.input}/>
                <Input placeholder= "Password" password viewPass  style={styles.input}/>
              </Block>
            
              <Button
                shadowless
                
                size="small"
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('App')}>
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
        </Block>
        
    //   </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  
});
