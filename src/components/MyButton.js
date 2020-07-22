import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const MyButton = props => {
    return(
    <TouchableOpacity
    style={props.stil}
    onPress={props.press}
>
            <Text style={props.stiltxt}>{props.text}</Text>
    </TouchableOpacity>
    )}
export {MyButton}