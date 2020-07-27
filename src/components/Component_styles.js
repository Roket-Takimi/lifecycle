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

    }),
    searchBarStyle: StyleSheet.create({
        container: {
            alignSelf: 'center',
            height: Dimensions.get('window').height / 18,
            width: Dimensions.get('window').width * 0.9,
            borderColor: '#bdbdbd',
            borderWidth: 2,
            backgroundColor: '#ffffff',
            borderRadius: 30,
            elevation: 8,
            flexDirection: 'row',
            margin: 10,
          },
    }),
}
export default Component_styles