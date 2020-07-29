import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text,Image, FlatList, Dimensions } from 'react-native'
import styles from '../styles'

const ActivitiesDetail = props => {

    /*
        1. ETKİNLİK BAŞLIĞI VE HARİTA EKLEME
        2. TÜM BUNLARI DÜZENLEME
        3. TARİH-SAAT EKLEME
        4. İNSANLARI EKLEME
        5. ETKİNLİK İÇERİĞİ
        
    */
   const propsItem = props.route.params.data;


    return(
        <SafeAreaView>
        <View>

            <View style={styles.activity.imageView}>
                <Image 
                    style={styles.activity.image}
                    source={require('../../assets/activityImage.jpg')}
                />
            </View>

            <View style={styles.activity.activityItemDetail}>
                <Text style={styles.activity.activityDetailText}> {propsItem.detail}</Text>
            </View>
            
            
        </View>
    </SafeAreaView>
    )
}

export {ActivitiesDetail}