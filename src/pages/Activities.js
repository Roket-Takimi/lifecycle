import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Button, TouchableOpacity } from 'react-native';

import {ActivitiesContext} from '../context/ActivitiesContext';
import { Text, FAB, List } from 'react-native-paper';
import { Header } from '../components/Header';
import styles from './styles';

const Activities = ({navigation}) => {
  const {state,dispatch} = useContext(ActivitiesContext)

  return (

    <>
    <Header titleText = 'Aktiviteler' />
    {/* <FAB
        icon = "close"
        small
        color = 'white'
        onPress = { () => navigation.goBack()}
        style = {styles.iconButton}
    /> */}
    <View style={styless.container}>

  
        {/* <Button title="add" onPress={()=>dispatch({type:"ADD"})}/> */}
        <FlatList
            data={state}
            keyExtractor={item=>item.title}
            renderItem={ ({item}) => {
              return (
                
                <TouchableOpacity onPress = { () => navigation.navigate("ActivitiesDetailPage", {id:item.id} )}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 5,
                    backgroundColor: 'white',
                    padding: 10,
                    elevation: 4,
                }}>
                  <View>
                      <Text style={{fontSize: 22}}>{item.title}</Text>
                      {/* <Text style={{fontSize: 14}}>{item.content}</Text> */}
                  </View>
                
                <FAB 
                  style={{
                    backgroundColor: '#448AFF',
                    justifyContent: 'center',
                  }}
                  icon = 'delete'
                  small
                  onPress = { () => dispatch({type:"REMOVE", option:item.id}) }
                />
                </View>
                </TouchableOpacity>
                )
            }}

        />

        <FAB 
          style={styless.fab}
          small
          icon = 'plus'
          label = 'Aktivite Oluştur'
          onPress = { () => navigation.navigate('AddActivities') }
        />
        
    </View>
    </>
  )
}
 
export {Activities}

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


