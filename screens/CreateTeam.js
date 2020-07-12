import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions, Alert, KeyboardAvoidingView, View} from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Avatar } from 'react-native-elements';
import materialTheme from '../constants/Theme';
import Input from '../components/Input';
import moment from 'moment';
const { height, width } = Dimensions.get('screen');

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const RESET_FORM = 'RESET_FORM';


const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {

        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        // console.log('hjhj',updatedValues);
        const updatedValidations = {
            ...state.inputValidations,
            [action.input]: action.isValid//isValid is for checking  each input value valid or not
        };
        let updatedIsFormValid = true // this is for checking whether the form is valid
        for (const key in updatedValidations) {
            updatedIsFormValid = updatedIsFormValid && updatedValidations[key];
        }

        return {
            isFormValid: updatedIsFormValid,
            inputValues: updatedValues,
            inputValidations: updatedValidations
        }
    }
    if(action.type === RESET_FORM){
        return {
            inputValues: {
                teamName: '',
                city: '',
                
            },
            inputValidations: {
                teamName: false,
                city: false
                
            },
            isFormValid: false
        };
    }
    return state;//if action.type is not update, then return unchanged state
};

const NewMatchStartScreen = props => {
    
    
    const [formState, dispatchFormState] = useReducer(formReducer,{
        inputValues: {
            teamName: '',
            city: ''
            
        },
        inputValidations: {
            teamName: false,
            city: false,
        },
        isFormValid: false
    });


    const submitHandler = useCallback(() => {//avoid infinite loop by squre brackets
        console.log('valid', formState)
        if (!formState.isFormValid) {

            Alert.alert('Wrong input', 'Please check errors in the form!', [{ text: 'okay' }]);
            return;
        }
        const team_name = formState.inputValues.teamName
        const city_name=formState.inputValues.courtName
        
        
       // dispatchFormState({type: RESET_FORM});
      // dispatchFormState({type: FORM_INPUT_UPDATE, value:initialValue,isValid:initiallyValid,input})
        props.navigation.navigate('TNewMatchSelectTeam', {
            teamName: team_name,
            city: city_name
        });
        //  else {
        //      await  dispatch(productsActions.createProduct(
        //            formState.inputValues.title,
        //            formState.inputValues.imageUrl,
        //            formState.inputValues.description,// by +price ,price input string convert into a number
        //            +(formState.inputValues.price),
        //        ))}
        //        props.navigation.goBack();
        // }

    }, [formState]);

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {

        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState]);



    


    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <ScrollView>
            <View style={{padding:20}}></View>
              <Block  row middle  >
                      <Avatar
                        rounded
                        size="xlarge"
                        source={{
                          uri:
                            'https://cdn3.iconfinder.com/data/icons/glyph-background-coloured/614/22_-_Business_Team-512.png',
                        }}
                      />
                      
                </Block>
                <Block style={styles.form}>
                    <Input


                        id='teamName'
                        label='Team name:'
                        placeholder='Team name'
                        placeholderTextcolor = 'gray'
                        errorText='Please enter a valid Team name'
                        keyboardType='default'
                        autoCapitalize='sentences'
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        initiallyValid={false}
                        required
                    />
                    <Input
                        id='city'
                        label='city:'
                        placeholder='city'
                        errorText='Please enter your city'
                        keyboardType='default'
                        autoCapitalize='sentences'
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        initiallyValid={false}
                        required
                    />
                    


                </Block>
                <Block style={styles.buttonContainer}>
                    <Button
                        shadowless
                        style={styles.button}
                        color='lightgreen'
                        round
                        textStyle ={styles.buttonText}
                        // onPress={() => {props.navigation.navigate('NewMatchSelectTeam',{
                        //     teamName:teamName,
                        //     courtName:'hasali'
                        // }) }}
                        onPress={submitHandler}
                        title="Create"
                    >Create</Button>

                </Block>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.WHITE
    },
    form: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin: theme.SIZES.BASE * 2,
        marginTop: theme.SIZES.BASE * 5
    },
    button: {
        width: width - theme.SIZES.BASE * 15,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
    buttonContainer: {
        marginLeft: theme.SIZES.BASE * 12
    },
    buttonText:{
        color:'black'
    }
});
export default NewMatchStartScreen;