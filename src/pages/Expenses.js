import React, { useState } from 'react';
import { SafeAreaView, View,
     TouchableOpacity, Text,
      FlatList, Dimensions,
    StyleSheet } from 'react-native';

import TodoItem from '../components'

const Expenses = () => {

const[todos,setTodos]=useState([
    {text:'50 tl harcadınız.',key:'1'},
    {text:'40 tl harcadınız.',key:'2'},
    {text:'15 tl harcadınız.',key:'3'}
]);
return(
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.list}>
                <FlatList
                data={todos}
                renderItem={({item})=>(
                    <TodoItem item={item}/>
                )}
                />
            </View>
        </View>
    </View>
)
}

export {Expenses}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        padding:40,
    },
    list:{
        marginTop:20,
    }
})