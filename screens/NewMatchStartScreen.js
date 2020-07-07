import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions, Alert, KeyboardAvoidingView} from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import materialTheme from '../constants/Theme';
import Input from '../components/Input';
import moment from 'moment';
const { height, width } = Dimensions.get('screen');

// const INPUT_CHANGE = 'INPUT_CHANGE';
// const INPUT_BLUR = 'INPUT_BLUR';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const RESET_FORM = 'RESET_FORM';
// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case INPUT_CHANGE:
//             return{
//                 ...state,
//                 value: action.value,
//                 isValid: action.isValid
//             }
//         case INPUT_BLUR:
//             return{
//                 ...state,
//                 touched: true
//             }

//         default:
//             return state;
//     }
// };

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
                courtName: '',
                date: '',
                time: ''
            },
            inputValidations: {
                teamName: false,
                courtName: false,
                date: false,
                time: false
            },
            isFormValid: false
        };
    }
    return state;//if action.type is not update, then return unchanged state
};

const NewMatchStartScreen = props => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);


    // const [inputState, dispatchInputState] = useReducer(inputReducer, {
    //     value: '',
    //     isValid: false,
    //     touched: false
    // });

    // useEffect(() =>{
    //     if(inputState.touched){
    //      onInputChange(id,inputState.value, inputState.isValid);// we pass inputState.value, inputState.isValid values to onInputChange function 
    //     }
    //  },[inputState, onInputChange,id]);

    //  const lostFocusHandler = () =>{
    //     dispatchInputState({type: INPUT_BLUR});
    // };
    
    const [formState, dispatchFormState] = useReducer(formReducer,{
        inputValues: {
            teamName: '',
            courtName: '',
            date: '',
            time: ''
        },
        inputValidations: {
            teamName: false,
            courtName: false,
            date: false,
            time: false
        },
        isFormValid: false
    });

    // const textChangeHandler = text => {

    //     let isValid = true;
    //     if (required && text.trim().length === 0) {
    //         isValid = false;
    //     }


    //     dispatchInputState({ type: INPUT_CHANGE, value: text, isValid: isValid });
    // };

    const submitHandler = useCallback(() => {//avoid infinite loop by squre brackets
        console.log('valid', formState)
        if (!formState.isFormValid) {

            Alert.alert('Wrong input', 'Please check errors in the form!', [{ text: 'okay' }]);
            return;
        }
        const team_name = formState.inputValues.teamName
        const court_name=formState.inputValues.courtName
        const date = formState.inputValues.date
        const time = formState.inputValues.time
        
       // dispatchFormState({type: RESET_FORM});
      // dispatchFormState({type: FORM_INPUT_UPDATE, value:initialValue,isValid:initiallyValid,input})
        props.navigation.navigate('NewMatchSelectTeam', {
            teamName: team_name,
            courtName: court_name,
            date: date,
            time: time
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



    const [date, setDate] = useState('');
    // const[isDateValid,setIsDateValid] = useState(false);

     const[time,setTime]=useState('');
    // const[isTimeValid,setIsTimeValid] = useState(false);

    // const[teamName,setTeamName]=useState('');
    // const[isTeamNameValid,setIsTeamNameValid] = useState(false);

    // const [courtName,setCourtName]=useState('');
    // const[isCourtNameValid,setIsCourtNameValid] = useState(false);

    // const teamNameValidator = val =>{
    //     if(val.trim().length === 0) {
    //         setIsTeamNameValid(false);
    //     }
    //      setIsTeamNameValid(true);
    //      setTeamName(val);
    // };






    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirmDate = (date) => {
        //console.warn("A date has been picked: ", date);
        // setDate(date.toISOString());
        setDatePickerVisibility(false);
        setDate(moment(date).format("MMM Do YY"));
        // inputChangeHandler('date',date,true);
        
    };

    const showTimePicker = () => {
        setIsTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setIsTimePickerVisible(false);
    };
    const handleConfirmTime = (time) => {
       // console.warn("A date has been picked: ", time);
      // setDate(moment(time).format("MMM Do YY"));
      hideTimePicker();
       setTime(moment(time).add(3, 'days').calendar()); 
      //setTime(moment(time).format('LT'));
      
    };


    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <ScrollView>
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
                        id='courtName'
                        label='Court name:'
                        placeholder='Court name'
                        errorText='Please enter a valid Court name'
                        keyboardType='default'
                        autoCapitalize='sentences'
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        initiallyValid={false}
                        required
                    />
                    <Input
                        id='date'
                        label='Date:'
                        placeholder='Date'
                        errorText='Please enter a valid Date'
                         onFocus={showDatePicker}
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        inputValue={date}
                        initiallyValid={false}
                        required
                        disabled
                    />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                       // style={styles.datepicker}

                    />

                    <Input
                        id='time'
                        label='Time:'
                        placeholder='Time'
                        errorText='Please enter a valid Time'
                        onFocus={showTimePicker}
                        onInputChange={inputChangeHandler}
                        inputValue={time}
                        initialValue=''
                        initiallyValid={false}
                        required />
                        

                        <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        format="YYYY-MM-DD"
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker} 
                       />


                </Block>
                <Block style={styles.buttonContainer}>
                    <Button
                        shadowless
                        style={styles.button}
                        color={materialTheme.COLORS.SUCCESS}
                        round
                        textStyle ={styles.buttonText}
                        // onPress={() => {props.navigation.navigate('NewMatchSelectTeam',{
                        //     teamName:teamName,
                        //     courtName:'hasali'
                        // }) }}
                        onPress={submitHandler}
                        title="Next"
                    >Next</Button>

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
    },
  
});
export default NewMatchStartScreen;