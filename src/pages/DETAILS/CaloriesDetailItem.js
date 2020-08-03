import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, FlatList, Dimensions } from 'react-native'

import styles from '../styles'

const CaloriesDetailItem = ({ data }) => {

    const propsItem = props.route.params.data;

    return(
        <SafeAreaView>
            <View>

                <Text>propsItem.adi</Text>

                {/* <View style={styles.calorie.imageView}>
                    <Image 
                        style={styles.calorie.image}
                        source={require('../../assets/logo.png')}
                    />
                </View>

                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>KALORİ: {data.kalori}</Text>
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>PROTEİN: {data.protein}</Text>
                </View>
                <View style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>ENERJİ: {data.enerji}</Text>
                </View> */}
            </View>
        </SafeAreaView>
    )
}

export {CaloriesDetailItem}