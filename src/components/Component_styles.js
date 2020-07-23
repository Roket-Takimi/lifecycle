import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'

const Component_styles = {
    listItem: StyleSheet.create({
        listItemView:{
            width:Dimensions.get('window').width / 1,
            height:Dimensions.get('window').height / (10 / 1),
            backgroundColor:'#ececec'
        },
        listItemText:{
            color:'black',
            fontWeight:'700'
        }
    })
}
export default Component_styles