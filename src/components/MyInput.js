import React from 'react'
import {Text, View, TextInput} from 'react-native'

const MyInput = (props) => {
    return(
       <TextInput
       onChangeText={props.changeText}
       placeholder={props.plc}
       placeholderTextColor="black"
       style={props.stil}
       value={props.veri}
       keyboardType={props.keyboard}
       secureTextEntry={props.secure}
       />
    )
}

export {MyInput}