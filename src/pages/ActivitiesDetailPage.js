import React, { useState, useContext } from 'react'
import { StyleSheet, View, Image, ScrollView, StatusBar } from 'react-native'
import {ActivitiesContext} from '../context/ActivitiesContext';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';

const ActivitiesDetailPage = ( {route, navigation} ) => {

    const {id} = route.params
    // console.log(id);
    const {state} = useContext(ActivitiesContext)

    const activitie = state.find((record) => {
        return record.id === id
    })

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor= "white"/>
        <Header titleText = 'Aktivite Detay' /> 
        <ScrollView>
          <View style={styless.container}>

              <Image
                  style={{ width: "250%", height: 350, resizeMode: 'contain'}}
                  resizeMode="contain"
                  source={{uri: activitie.image}}
              />

              <Text style={{fontSize: 22, fontWeight: 'bold', margin: 10,}}>{activitie.title}</Text>
              <Text style={{fontSize: 14, marginLeft: 5, marginBottom: 85}}>Detay: {activitie.content}</Text>
              

              <FAB 
                  style={styless.fab}
                  small
                  icon = 'plus'
                  label = 'Aktiviteyi Düzenle'
                  onPress = { () => navigation.navigate('ActivitiesEditPage', {id}) }
              />

          </View>
        </ScrollView>
        </>
    )
}

export {ActivitiesDetailPage}

const styless = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
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
    fab: {
      backgroundColor: '#448AFF',
      position: 'absolute',
      margin: 20,
      marginTop: 40,
      right: 0,
      bottom: 10,
    },
    listTitle: {
      fontSize: 20,
    }
  })