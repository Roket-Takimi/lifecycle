import React, { useState, useContext } from 'react'
import { StyleSheet, View, Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { ActivitiesContext } from '../context/ActivitiesContext';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';

const ActivitiesDetailPage = ({ route, navigation }) => {

  const { id } = route.params
  // console.log(id);
  const { state } = useContext(ActivitiesContext)

  const activitie = state.find((record) => {
    return record.id === id
  })

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <Header titleText='Aktivite Detay' /> */}
      <ScrollView>
        <View style={styless.container}>
          <View style={{backgroundColor:'#448AFF', borderRadius:30,
                width: Dimensions.get('window').width / 1.05,
                height: Dimensions.get('window').height / 3,justifyContent:'center',
                alignItems:'center'}}>
            <Image
              style={{
                borderRadius: 20,
                width: Dimensions.get('window').width / 1.1,
                height: Dimensions.get('window').height / 2,
                resizeMode: 'contain'
              }}
              source={{ uri: activitie.image }}
            />
          </View>
          <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 10, }}>{activitie.title}</Text>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, marginLeft: Dimensions.get('window').width / (10 / 6), fontWeight: 'bold' }}>Tarih:</Text>
            <Text > {activitie.date}</Text>
          </View>
          
          <Text style={{ fontSize: 16, margin: 5, padding: 5, backgroundColor: '#448AFF', borderRadius: 5 , color:'white' }}>Detay: {activitie.content}</Text>


          <FAB
            style={styless.fab}
            small
            icon='plus'
            label='Aktiviteyi Düzenle'
            onPress={() => navigation.navigate('ActivitiesEditPage', { id })}
          />

        </View>
      </ScrollView>
    </>
  )
}

export { ActivitiesDetailPage }

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