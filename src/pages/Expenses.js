import React, { useState } from 'react';
import { SafeAreaView, View,StyleSheet, 
    TouchableOpacity, Text,
     FlatList, Dimensions } from 'react-native';


 const Expenses=()=> {
    const [todos,setTodos]= useState([
        {text: 'burada çok harcadın', key: '1'},
        {text: 'şurada az harcadın', key:'2'},
        {text: 'paran bitti', key:'3'}
    ]);
    return(
        <View style={styles.container}>
            {/**header */}
            <View style={styles.content}>
                {/**to form */}
                <View style={styles.list}>
                    <FlatList
                    data={todos}
                    renderItem={({item})=>(
                    <Text> {item.text} </Text>
                    )}
                        />
                </View>
            </View>
        </View>
    );
}
export{Expenses}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        padding:40,
    },
    list:{
        
    }
})