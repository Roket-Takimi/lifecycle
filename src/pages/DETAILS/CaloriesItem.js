import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'

import styles from '../styles'

const CaloriesItem = props => {

    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={() => props.press(props.propsData)} style={styles.calorie.calorieItem}>
                    <Text style={styles.calorie.calorieText}>{props.dataItem.adi}</Text>
                    {/* <Text style={styles.calorie.calorieText}>{props.dataItem.kalori} Kalori</Text> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {CaloriesItem}