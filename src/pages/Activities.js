import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import { ActivitiesItem } from './DETAILS/ActivitiesItem'

const Activities = props => {
    //Deneme
    /*
        TÜM ETKİNLİKLER, TARİH, SAAT ŞEKLİNDE GÖSTERİLİR
        HARİTADA GÖSTEREBİLİR MİYİZ BAKALIM
        ARAMA BUTONU
        TIKLAYINCA DETAY SAYFASINA GİDER

    */
    const [list,setList]=useState([])

    const [activities,SetActivities] = useState([
        {id:1,activityName:"İSTANBUL KADIKÖYDE KOŞU",detail:"test 1"},
        {id:2,activityName:"İSTANBUL MAÇKADA BİSİKLET 2",detail:"test 2"},
        {id:3,activityName:"ANTALYA MANAVGAT BALIK FESTİVALİ",detail:"test 3"},
        {id:4,activityName:"İZMİR KORDON YÜZME YARIŞI",detail:"test 4"},
        {id:5,activityName:"ADANA'DA KEBAP",detail:"Lorem Iwith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. more recently with desktop"},
        {id:6,activityName:"URFA MERKEZ HALAY ÇEKME SONRA LAHMACUN ",detail:"test 6"},
        {id:7,activityName:"BURSA ORMANKADI DOĞA YÜRÜYÜŞÜ ",detail:"test 7"},
        {id:8,activityName:"ORDU AKKUŞ FINDIK TOPLAMA ",detail:"test 8"}
    ])

    const renderItems = ({item}) => {
        return <ActivitiesItem propsData={item} pressHandler={activitiesPress} />
    }

    function activitiesPress(item) {
        props.navigation.navigate('ActivitiesDetail',{data:item})
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
                numColumns={2}
            />


        </SafeAreaView>

    )
}

export { Activities }
