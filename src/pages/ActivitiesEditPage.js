import React, { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native'
import {ActivitiesContext} from '../context/ActivitiesContext';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';

const ActivitiesEditPage = ( {navigation, route} ) => {

    const {id} = route.params;
    // console.log(id);
    
    const {state,dispatch} = useContext(ActivitiesContext)

    const EditAct = state.find((record) => {
        return record.id === id
    })
    const [title, setTitle] = useState(EditAct.title)
    const [content, setContent] = useState(EditAct.content)
    const [image, setImage] = useState(EditAct.image);

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor= "white"/>
        <Header titleText = 'Aktivitenizi Düzenleyin' /> 
        <View style={{flex:1, margin: 8}}>

            <TextInput
                label = "Başlığı Düzenle"
                value = {title}
                mode = 'outlined'
                onChangeText = {(text) => setTitle(text)}
                style = {[styless.title, {marginTop: 75}]}
            />

            <TextInput
                label = "İçeriği Düzenle"
                value = {content}
                mode = 'flat'
                onChangeText = {(text) => setContent(text)}
                multiline = {true}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
                style = {styless.text}
            />

            <FAB
                style = {styless.fab}
                small
                icon = "check"
                label = 'Düzenle'
                disabled = {title == '' ? true : false}
                onPress = { () => {
                    dispatch({type:"UPDATE", option:{id,title,content,image}}) 
                    navigation.navigate("Activities");
                }}
            />
        </View>
        </>
    )
}

export {ActivitiesEditPage}

const styless = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    title: {
      fontSize: 20,
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    text: {
      height: 250,
      marginBottom: 16,
    },
    fab: {
      backgroundColor: '#448AFF',
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10,
    },
    listTitle: {
      fontSize: 20,
    }
  })