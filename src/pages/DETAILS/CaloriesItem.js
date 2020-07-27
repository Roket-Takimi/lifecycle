import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'

import styles from '../styles'

const CaloriesItem = props => {

    /*
        1. YİYECEK LİSTESİNİ GÖSTER (KATEGORİLER) => AYRI BİR SAYFAYA YÖNLENDİRELİM
        2. YİYECEK İÇECEK EKLEME
        3. KALORİLERİ TOPLAMA
        4. ADET EKLEME
        5. ITEM DÜZENLE 

    */
 

    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={() => props.pressHandler(props.propsData)} style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>{props.propsData.adi}</Text>
                    <Text style={styles.calorie.calorieText}>{props.propsData.kalori} Kalori</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {CaloriesItem}