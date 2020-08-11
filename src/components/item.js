import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';

const item = ({pitem,pressHandler})=>{

    return(
    
            <TouchableOpacity
            onPress={()=>pressHandler(pitem.key)}>
                <Text style={styles.pitem}>{pitem.text}</Text>
            </TouchableOpacity>

    )
} 

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})
export{item}