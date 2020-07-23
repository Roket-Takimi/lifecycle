import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList} from 'react-native'
import styles from './styles'
import ListItem from '../components/'
const Calories = () => {
   var yemekler=[
        {id:1,adi:"Elma",kalori:25,protein:85,enerji:90,karbonhidrat:50},
        {id:2,adi:"Armut",kalori:25,protein:85,enerji:90,karbonhidrat:50},
        {id:3,adi:"Üzüm",kalori:25,protein:85,enerji:90,karbonhidrat:50},
        {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
        {id:5,adi:"Dolma",kalori:25,protein:85,enerji:90,karbonhidrat:50}
    ]
    const renderla = ({item}) => {
        return(
            // <ListItem
            // veri={item.id}
            // />
        <Text>{item.adi}</Text>
        )
    }

    /*
        TÜM GÜNLER VE TOPLAM KALORİLER GÖSTERİLİR
        YİYECEK LİSTESİ GÖSTERİLİR
        TIKLAYINCA DETAY SAYFASINA GİDER

    */


    return(
        <SafeAreaView style={styles.calorie.mainView}>
           <FlatList
           style={styles.calorie.liste}
           data={yemekler}
           keyExtractor={(_,index) => index.toString()}
           renderItem={renderla}
           
           />
        </SafeAreaView>
    )
}

export {Calories}
