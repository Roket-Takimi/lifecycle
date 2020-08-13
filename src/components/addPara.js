import React,{useState} from 'react';
import {StyleSheet,TextInput,Text,Button,View} from 'react-native';

const addPara   =  ({submitHandler}) =>   {
    const[text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val)
    }
    return(
        <View>
            <TextInput
            style={StyleSheet.input}
            placeholder='Yeni Para :)'
            onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)}
            title='Para Ekle' color='coral'/>
        </View>
    )
}
const styles =StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
export{addPara}