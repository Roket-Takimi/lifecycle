import React, { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, FlatList, Dimensions, } from 'react-native'
import {ActivitiesContext} from '../context/ActivitiesContext';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';


const AddActivities = ( {navigation} ) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const {state,dispatch} = useContext(ActivitiesContext)

    return(
        <>
        <Header titleText = 'Aktivite Oluştur' />            
        <View style={{flex:1}}>

            <TextInput
                label = "Aktivitenize Başlık Ekleyiniz"
                values = {title}
                mode = 'outlined'
                onChangeText = {(text) => setTitle(text)}
                style = {[styles.title, {marginTop: 75}]}
            />

            <TextInput
                label = "Aktivitenize Açıklama Ekleyiniz"
                values = {content}
                mode = 'flat'
                onChangeText = {(text) => setContent(text)}
                multiline = {true}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
                style = {styles.text}
            />

            <FAB
                style = {styles.fab}
                // small
                icon = "check"
                disabled = {title == '' ? true : false}
                onPress = { () => {
                    dispatch({type:"ADD", option:{title,content}}) 
                    navigation.goBack();
                }}
            />

        </View>
        </>
    )
}

export {AddActivities}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#219653',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 150,
    marginBottom: 16,
  },
  fab: {
    backgroundColor: '#448AFF',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
})
