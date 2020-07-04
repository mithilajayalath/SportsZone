import React from 'react';
import { TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';

import { Block, Text, theme, Button, Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { Images, materialTheme } from '../constants';
import Icon from '../components/Icon';

import Mybutton from '../components/MyButton';

const { width, height } = Dimensions.get('screen');

const TeamItem = props => {
  
    return (
        <Block style={styles.mealItem}>
            <TouchableWithoutFeedback
                onPress={() => { }}
                // onPress={props.onSelect}
                style={{ flex: 1 }}>
                <Block style={styles.container}>
                   
                        <Block style={styles.imageContainer}>
                            <Image source={{uri: props.image}} style={styles.image} />
                        </Block>
                        <Block style={styles.teamName}>
                        <Text>{props.teamName}</Text>
                       
                        </Block>
                       
                        <Block style={styles.buttonContainer}>
                            <Button
                                shadowless
                                style={styles.button}
                                color={materialTheme.COLORS.BUTTON_COLOR}

                                onPress={() => {}}
                              
                            >Request</Button>

                       
                    </Block>
                    {/* <Block style={styles.header}>
                        <Text>{props.num}</Text>

                    </Block> */}

                    {/* <Block style={{ ...styles.detailRow, ...styles.details }}>
                        <Text>{props.complexity}</Text>
                        <Text>{props.duration} mins</Text>
                        <Text>{props.affordability}</Text>
                    </Block> */}
                </Block>

            </TouchableWithoutFeedback>
        </Block>


    );
};
const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        overflow: 'hidden',
        

    },
    container: {
       flexDirection:'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        elevation: 1,
        borderRadius: 15,
        height: theme.SIZES.BASE * 8,
        width: theme.SIZES.BASE * 23,


        //     flex: 1,
        //     borderRadius: 10,
        //    // borderWidth: 3,
        //     height: 200,
        //     width: 350,
        //     //backgroundColor: '#ffffd5',
        //     elevation:1

    },
    
    // image: {
    //     width: '100%',
    //     height: '100%'
    // },
    teamName:{
        padding: 10,
        margin: 20
    },
    imageContainer: {
        marginRight:theme.SIZES.BASE ,
        marginLeft:theme.SIZES.BASE,
      borderWidth:1,
      height:theme.SIZES.BASE *5,
      width:theme.SIZES.BASE *5,
      overflow: 'hidden',
    },
    image: {
        height:'100%',
        width:'100%'
    },
    button:{
        width: width - theme.SIZES.BASE * 18,
        height: theme.SIZES.BASE * 2,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 50
    },
    buttonContainer:{
        margin: theme.SIZES.BASE 
    }
});
export default TeamItem;