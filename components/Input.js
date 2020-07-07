import React,{ useReducer, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {  theme } from 'galio-framework';
// import  theme from '../constants/Theme'; 

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return{
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return{
                ...state,
                touched: true
            }

        default:
            return state;
    }
};

const Input = props =>{

    const [inputState, dispatchInputState] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        touched: false
    });

    const {onInputChange,id,inputValue} =props;

    useEffect(()=>{
        if(inputValue){
            dispatchInputState({ type: INPUT_CHANGE, value:inputValue, isValid: true });
        }
    },[inputValue,dispatchInputState]);

    useEffect(() =>{
        if(inputState.touched){
         props.onInputChange(id,inputState.value, inputState.isValid);// we pass inputState.value, inputState.isValid values to onInputChange function 
        }
     },[inputState, onInputChange,id]);

     const textChangeHandler = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
           isValid = false;
        }
        if (props.min != null && +text < props.min) {
            isValid = false;
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        dispatchInputState({ type: INPUT_CHANGE, value: text, isValid: isValid });
    };
   

    const lostFocusHandler = () =>{
        dispatchInputState({type: INPUT_BLUR});
    };
    return(
        <View style={styles.formControl}>
        <Text style={styles.lable}>{props.label}</Text>
        <TextInput
            {...props}
            style={styles.input}
            // value={title}
            value={inputState.value}
            onChangeText={textChangeHandler}
            onBlur ={lostFocusHandler}

        />
        {!inputState.isValid && inputState.touched &&(<Text>{props.errorText}</Text>)}
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    lable: {
        marginVertical: 8,
        fontWeight:'bold'
    },
    input: {
        paddingHorizontal:theme.SIZES.BASE ,
        paddingVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
         height:theme.SIZES.BASE * 2.5,
        // backgroundColor: theme.COLORS.WHITE,
        // borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
        // borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
        // borderColor: theme.COLORS.INPUT,
        // height: theme.SIZES.INPUT_HEIGHT,
        // paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
        // width: '100%',
    }
});

export default Input;