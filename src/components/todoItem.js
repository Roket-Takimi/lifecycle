import React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';

const TodoItem=({item})=>{



    return(

        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>

    )
}

export{TodoItem}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
});