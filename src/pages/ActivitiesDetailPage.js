import React, { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, FlatList, Dimensions, } from 'react-native'
import {ActivitiesContext} from '../context/ActivitiesContext';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';

const ActivitiesDetailPage = ( {route, navigation} ) => {

    const {id} = route.params
    console.log(id);
    const {state} = useContext(ActivitiesContext)

    const activitie = state.find((record) => {
        return record.id === id
    })

    return (
        <>
        <Header titleText = 'Aktivite Detay' /> 
        <View style={styless.container}>
            <Text>{activitie.title}</Text>
            <Text>{activitie.content}</Text>

            <FAB 
                style={styless.fab}
                small
                icon = 'plus'
                label = 'Aktiviteyi Düzenle'
                onPress = { () => navigation.navigate('ActivitiesEditPage', {id}) }
            />

        </View>
        </>
    )
}

export {ActivitiesDetailPage}

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