import React, { useState } from 'react';
import TodoItem from '../components'
import AddTodo from '../components'
import { SafeAreaView, View,
     TouchableOpacity, Text,
      FlatList, Dimensions,
    StyleSheet } from 'react-native';
   

const Expenses = () => {

const[todos,setTodos]=useState([
    {text:'50 tl harcadınız.',key:'1'},
    {text:'40 tl harcadınız.',key:'2'},
    {text:'15 tl harcadınız.',key:'3'}
]);
/*
const pressHandler=(key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key != key);
    });
  }
  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }
*/
return(
    <View style={styles.container}>
        <View style={styles.content}>
         
            <View style={styles.list}>
                <FlatList
                data={todos}
                renderItem={({item})=>(
                <Text>{item.text}</Text>
                )}
                />
            </View>
        </View>
    </View>
)}

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