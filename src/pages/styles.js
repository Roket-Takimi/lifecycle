import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = {
    login:StyleSheet.create({
        mainView:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'#FFFFFF'
        },
        logoView:{
            flex:3,
            justifyContent:'center',
            alignItems:'center'
        },
        logo:{
            width:Dimensions.get('window').width / (10 / 8),
            height:Dimensions.get('window').height / (10 / 2.5)

        },
        inputView:{
            flex:4,
            justifyContent:'center'
        },
        btnView:{
            flex:3,
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',

        },
        inputRow:{
            width:Dimensions.get('window').width / (10 / 8),
            flexDirection:'row',
            alignItems:'center',
            height:Dimensions.get('window').height / (10 / 1),
            alignSelf:'center'

        },
        inputColumnLabel:{
            width:Dimensions.get('window').width / (10 / 2)

        },
        label:{
            color:'#448AFF'
        },
        inputColumnForm:{
            width:Dimensions.get('window').width / (10 / 6)
        },
        input:{
            borderColor:'#ececec',
            borderWidth:1,
            borderRadius:30,
            shadowColor:'#ececec',
            backgroundColor:'#FFFFFF',
            elevation:10
        },
        loginBtn:{
            backgroundColor:'#448AFF',
            borderRadius:20,
            marginBottom:10,
            width:Dimensions.get('window').width / (5 / 2),
            height:Dimensions.get('window').height / (16 / 1),
            alignItems:'center',
            justifyContent:'center'
        },
        loginBtnTxt:{
            color:'white',
            fontWeight:'bold',
            fontSize:16
        },
        marginB:{
            marginBottom:10
        },
        textBtn:{
            fontWeight:'400'
        }

    }),
    main:StyleSheet.create({
        mainView:{
            flexDirection:'column',
            width:Dimensions.get('window').width/1,
            height:Dimensions.get('window').height/1,
            backgroundColor:'#ececec',
            padding:10
        },
        logoView:{
            width:Dimensions.get('window').width / (10/9),
            height:Dimensions.get('window').height / (10 / 4),
            alignSelf:"center",
            borderWidth:1,
            borderColor:"#95a5a6",
            alignItems:"center",
            justifyContent:"center"
        },
        logoText:{
            fontSize:60
        },
        menuRow:{
            marginTop:10,
            flexDirection:"row",
            width:Dimensions.get('window').width / (10/9),
            height:Dimensions.get('window').height /  ( 10 / 1),
            alignSelf:'center',
            alignItems:'center',
            backgroundColor:"#2980b9",
            borderRadius:20,
            justifyContent:'center'
        },
        menuColumn:{
            width:Dimensions.get('window').width / (10/4),
            marginLeft:Dimensions.get('window').width  / (10 / 0.25),
            marginRight:Dimensions.get('window').width  / (10 / 0.25),
            height:Dimensions.get('window').height  / (10 / 1),
            backgroundColor:"#2980b9",
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center'
        },
        menuText:{
            color:"white",
            fontSize:18,
        },
        menuT:{
            width:Dimensions.get('window').width / (10/9),
            height:Dimensions.get('window').height /  ( 10 / 1),
            alignItems:'center',
            justifyContent:'center'

        }
    }),
    calorie:StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
        modalWidhtView:{
            width:Dimensions.get('window').width / (10 / 8),
            height:Dimensions.get('window').height / (10 / 8),
            alignItems:'center',
            justifyContent:'center'
        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        },
        openButton: {
            backgroundColor: "#F194FF",
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
    }),
    spending:StyleSheet.create({
        mainView:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'#ececec'
        },
        headerView:{
            alignItems:'center',
            borderBottomWidth:1,
            borderBottomColor:'black',
            padding:5
        },
        headerText:{
            fontWeight:'bold'
        },
        fabbuttonview:{
            position:'absolute',
            right:5,
            bottom:5,
            zIndex:2,

        }


    })


}


export default styles
