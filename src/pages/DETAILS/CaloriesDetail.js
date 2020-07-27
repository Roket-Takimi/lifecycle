import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, FlatList, Dimensions } from 'react-native'

import styles from '../styles'

const CaloriesDetail = props => {

    /*
        1. YİYECEK LİSTESİNİ GÖSTER (KATEGORİLER) => AYRI BİR SAYFAYA YÖNLENDİRELİM
        2. YİYECEK İÇECEK EKLEME
        3. KALORİLERİ TOPLAMA
        4. ADET EKLEME
        5. ITEM DÜZENLE 

    */

   const propsItem = props.route.params.data;

    return(
        <SafeAreaView>
            <View>
                <View style={styles.calorie.imageView}>
                    <Image 
                        style={styles.calorie.image}
                        source={require('../../assets/meyve.jpg')}
                    />
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>KALORİ: {propsItem.kalori}</Text>
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>PROTEİN: {propsItem.protein}</Text>
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>ENERJİ: {propsItem.enerji}</Text>
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>KARBONHİDRAT: {propsItem.karbonhidrat}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export {CaloriesDetail}