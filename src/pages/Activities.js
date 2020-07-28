import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'

const Activities = () => {
    //Deneme
    /*
        TÜM ETKİNLİKLER, TARİH, SAAT ŞEKLİNDE GÖSTERİLİR
        HARİTADA GÖSTEREBİLİR MİYİZ BAKALIM
        ARAMA BUTONU
        TIKLAYINCA DETAY SAYFASINA GİDER

    */
    const [list,setList]=useState([])

    const [activities,SetActivities] = useState([
        {id:1,activityName"Test 1"},
        {id:2,activityName"Test 2"},
        {id:3,activityName"Test 3"},
        {id:4,activityName"Test 4"}
    ])

    const renderItems = ({}) => {
        return 
    }
    return (
        <SafeAreaView style={styles.activity.mainView} >

            <View style={styles.activity.headerView} >
                <Text style={styles.activity.headerText} >AKTİVİTE GÖR</Text>
            </View>

            <FlatList
                data={activities}
                keyExtractor={(_,index) => index.toString()}
                renderItem={renderItems}
           />


        </SafeAreaView>

    )
}

export { Activities }
