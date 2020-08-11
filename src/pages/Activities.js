import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

import {ActivitiesContext} from '../context/ActivitiesContext';
import { Text, FAB, List } from 'react-native-paper';
import { Header } from '../components/Header';
import styles from './styles';

const Activities = ({navigation}) => {
  const {state,dispatch} = useContext(ActivitiesContext)

  return (

    <>
    <StatusBar barStyle="light-content" backgroundColor= "white"/>
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
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 5,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    padding: 10,
                    elevation: 4,
                }}>
                      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                          <Text style={{fontSize: 18, fontWeight: 'bold', }}>{item.title}</Text>
                          {/* <Text style={{fontSize: 22}}>{item.image}</Text> */}
                          {/* <Text style={{fontSize: 14}}>{item.content}</Text> */}
                      
                      </View>
                
                      <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                        <FAB 
                            style={{
                              backgroundColor: '#448AFF',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: Dimensions.get('window').height / (10 / 0.55),
                            }}
                            icon = 'delete'
                            small
                            onPress = { () => dispatch({type:"REMOVE", option:item.id}) }
                        />
                      </View>
                      

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


