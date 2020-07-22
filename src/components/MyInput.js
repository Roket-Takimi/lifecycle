import React from 'react'
import {Text, View, TextInput} from 'react-native'

const MyInput = (props) => {
    return(
       <TextInput
       onChangeText={props.chngTxt}
       placeholder={props.plc}
       placeholderTextColor="black"
       style={props.stil}
       />
    )
}

export {MyInput}