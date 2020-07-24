import React from 'react'
import {Text, View} from 'react-native'
import Component_styles from './Component_styles'
const ListItem = props => {
    return(
     <View style={Component_styles.listItem.listItemView}>
         <View style={Component_styles.listItem.listRow}>
             <Text style={Component_styles.listItem.listItemText}>
             {props.name}
         </Text>
    <Text>{props.cal}Kalori</Text>
         </View>
         
     </View>
    )
}

export {ListItem}