import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'

const Component_styles = {
    listItem: StyleSheet.create({
        listItemView:{
            width:Dimensions.get('window').width / 1,
            height:Dimensions.get('window').height / (10 / 1),
            backgroundColor:'#ececec',
            marginBottom:1,
            justifyContent:'center'
        },
        listItemText:{
            color:'black',
            fontWeight:'700'
        },
        listRow:{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:5
            
        }

    })
}
export default Component_styles