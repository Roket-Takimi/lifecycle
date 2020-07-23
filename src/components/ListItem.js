import React from 'react'
import {Text, View} from 'react-native'
import Component_styles from './Component_styles'
const ListItem = props => {
    return(
     <View style={Component_styles.listItem.listItemView}>
         <Text style={Component_styles.listItem.listItemText}>
             {props.veri}
         </Text>
     </View>
    )
}

export {ListItem}