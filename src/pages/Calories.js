import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList} from 'react-native'
import styles from './styles'
import {SearchBar} from '../components'

import {CaloriesItem} from './DETAILS/CaloriesItem'


const Calories = props => {

    const [itemList, setItemList] = useState([]);

    const [yemekler,setYemekler] = useState([
        {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
        {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
        {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
        {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
        {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
        {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
        {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
        {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
        {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
        {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
    ])

    /*
        TÜM GÜNLER VE TOPLAM KALORİLER GÖSTERİLİR
        YİYECEK LİSTESİ GÖSTERİLİR
        TIKLAYINCA DETAY SAYFASINA GİDER

    */

    const renderItems = ({item}) => {
        return <CaloriesItem propsData={item} pressHandler={caloriesPress} />;
    };

    function caloriesPress(item) {
        props.navigation.navigate('CaloriesDetailPage', {data: item});
    }

   function searchItem(text) {
       //console.log(text);
    let filteredList = yemekler.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    yemekler(filteredList);
  }
  

    return(
        <SafeAreaView style={styles.calorie.mainView}>
          
            <View style={styles.calorie.headerView}>
                <Text style={styles.calorie.headerText}>KALORİLERİNİ ÖĞREN</Text>
            </View>

            <SearchBar
                changeText={searchItem}
                searchBarPlaceHolder={'Arama Yapınız...'}
            />

            
           <FlatList
                style={styles.calorie.liste}
                data={yemekler}
                keyExtractor={(_,index) => index.toString()}
                renderItem={renderItems}
           />
          
        </SafeAreaView>
    )
}

export {Calories}
