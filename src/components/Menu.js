import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const Menu = props => {
    return(
        <TouchableOpacity
        onPress={props.press}
        style={props.stilt}
        >
            <Text style={props.stil}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export {Menu}