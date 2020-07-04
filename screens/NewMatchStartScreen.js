import React, { useState } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Block, Text, theme, Input, Button } from 'galio-framework';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('screen');
const NewMatchStartScreen = props => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

    const[date,setDate] = useState('');
    const[isDateValid,setIsDateValid] = useState(false);
    
    const[time,setTime]=useState('');
    const[isTimeValid,setIsTimeValid] = useState(false);

    const[teamName,setTeamName]=useState('');
    const[isTeamNameValid,setIsTeamNameValid] = useState(false);

    const [courtName,setCourtName]=useState('');
    const[isCourtNameValid,setIsCourtNameValid] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirmDate = (date) => {
       // console.warn("A date has been picked: ", date);
        setDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setIsTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setIsTimePickerVisible(false);
    };
    const handleConfirmTime = (time) => {
        console.warn("A date has been picked: ", time);
        hideTimePicker();
    };

    
    return (
        <ScrollView>
            <Block style={styles.form}>
                <Input
                    label='Team name:'
                    placeholder='Team name'
                    errorText='Please enter a valid Team name'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    returnKeyType="next"
                    onInputChange={() => { }}
                    // initialValue  = {editedProduct ? editedProduct.title : ''}
                    // initiallyValid ={!!editedProduct}//if there is editedProduct returns true else return faulse
                    required
                />
                <Input
                    label='Court name:'
                    placeholder='Court name'
                    errorText='Please enter a valid Court name'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    returnKeyType="next"
                    onInputChange={() => { }}
                    // initialValue  = {editedProduct ? editedProduct.title : ''}
                    // initiallyValid ={!!editedProduct}//if there is editedProduct returns true else return faulse
                    required
                />
                <Input
                    label='Date:'
                    placeholder='Date'
                    errorText='Please enter a valid Date'
                    onFocus={showDatePicker}
                    onInputChange={() => { }}
                    // initialValue  = {editedProduct ? editedProduct.title : ''}
                    // initiallyValid ={!!editedProduct}//if there is editedProduct returns true else return faulse
                    required

                >
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                        
                    />
                </Input>

                <Input
                    label='Time:'
                    placeholder='Time'
                    errorText='Please enter a valid Time'
                    onFocus={showTimePicker}
                    onInputChange={() => { }}
                    // initialValue  = {editedProduct ? editedProduct.title : ''}
                    // initiallyValid ={!!editedProduct}//if there is editedProduct returns true else return faulse
                    required >
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker} />
                </Input>


            </Block>
            <Block style ={styles.buttonContainer}>
                <Button
                    shadowless
                    style={styles.button}
                    color={materialTheme.COLORS.BUTTON_COLOR}

                    onPress={() => {props.navigation.navigate('NewMatchSelectTeam',{
                        teamName:date,
                        courtName:'hasali'
                    }) }}
                    title="Next"
                >Next</Button>

            </Block>

        </ScrollView>

    );
};
const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin: theme.SIZES.BASE * 2,
        marginTop: theme.SIZES.BASE * 5,
    },
    button: {
        width: width - theme.SIZES.BASE * 15,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
    buttonContainer:{
        marginLeft: theme.SIZES.BASE * 12
    }
});
export default NewMatchStartScreen;