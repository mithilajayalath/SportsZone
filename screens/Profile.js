import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme,Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Avatar } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {
  render(){
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            //source={{uri: Images.Profile}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            
            <Block flex style={styles.profileDetails}>
              <Block  row middle >
                    <Avatar
                      rounded
                      size="xlarge"
                      source={{
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
              </Block>
              <Block row></Block>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingTop: 25 }}>Rachel Brownnnnn</Text>
                  <Block row >
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                      {''} Colombo,SriLanka
                      </Text>
                  </Block>
                </Block>
              </Block>

              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <Text>User Name</Text>
          <Input
              placeholder="Rusiri Illesinghe"
              right
              icon="heart"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              placeholderTextColor="blue"
          />
          <Text>Mobile</Text>
          <Input
            placeholder="0771905830"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
          />
          <Text>Gender</Text>
          <Input
            placeholder="Female"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
          />
          <Text>Matches Played</Text>
          <Input
            placeholder="21"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
          />
          <Text>Wins</Text>
          <Input
            placeholder="11"
            //style={{ borderColor: "blue" }}
            placeholderTextColor="#4F8EC9"
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2.5,
  },
  profileImage: {
    width: width,
    height:'auto',
  },
  profileContainer: {
    width: width,
    height: height / 3,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 16,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2.5,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 20,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
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
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
