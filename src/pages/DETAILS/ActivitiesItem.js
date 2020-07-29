import React, { useState } from 'react'
import { SafeAreaView,TouchableOpacity, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, Image } from 'react-native'
import styles from '../styles'

const ActivitiesItem = props => {

    return (

        <SafeAreaView>
            <View >
                <TouchableOpacity onPress={() => props.pressHandler(props.propsData)} style={styles.activity.activityItem}>
                    <Text style={styles.activity.activityText}>{props.propsData.activityName}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}


export { ActivitiesItem }
