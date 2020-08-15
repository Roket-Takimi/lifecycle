// import React from 'react'
// import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'

// const Main = () => {
//     const mockData = [
//         { id: 1, page: "Calories" },
//         { id: 2, page: "Activities" },
//         { id: 3, page: "Expenses" },
//         { id: 4, page: "Plans" },
//     ]

//     const renderCategories = ({ item }) =>
//     HERBİR ITEM'A TIKLANINCA BİZİ İLGİLİ SAYFAYA GÖNDERECEK NAVIGATION'LA//
//         <TouchableOpacity
//             style={{
//                 width: Dimensions.get("window").width / 2.5,
//                 height: Dimensions.get("window").height / 3,
//                 padding: 5,
//                 alignItems: "center",
//                 borderColor: "#f3ecc2",
//                 borderWidth: 2,
//                 borderRadius: 15,
//                 margin: 10,
//                 padding: 10,
//                 alignContent: "center",
//                 justifyContent: "center",
//                 backgroundColor: '#f3ecc2',
//             }}>
//             <Text style={{ fontWeight: "bold", fontSize: 30, }}> {item.page}</Text>
//         </TouchableOpacity >

//     return (
//         <SafeAreaView style={{ flex: 1 }}>

//             <View style={{ flex: 1, justifyContent: "space-between" }}>
//                 <View style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#ba7967' }}>

//                     <TouchableOpacity>
//                         <Text>
//                             Logout
//                     </Text>
//                     </TouchableOpacity>
//                 </View>

//                 <FlatList
//                     columnWrapperStyle={{
//                         justifyContent: "center", alignContent: "center",
//                         alignItems: "center", alignSelf: "center"
//                     }}
//                     style={{ height: Dimensions.get("window").height / 1.3, alignSelf: "center",
//                 marginTop: 25 }}
//                     numColumns={2}
//                     keyExtractor={(item, index) => index.toString()}
//                     data={mockData}
//                     renderItem={renderCategories}
//                 />
//                 <View style={{ justifyContent: 'center', backgroundColor: '#ba7967',
//             width: Dimensions.get("window").width / 1.2,
//             height: Dimensions.get("window").height / 7,
//             borderRadius: 15, padding: 10, margin: 10, alignSelf: "center", justifyContent: "center",
//             alignItems: "center"

//                             }}>
//                     <TouchableOpacity>
//                         <Text style={{ fontWeight: "bold", fontSize: 30, }}>
//                             Notes
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// export {Main}

import React, { useState, useEffect } from 'react'
import {Text, View, SafeAreaView , Image} from 'react-native'
import styles from './styles'
import {MyButton} from '../components/'
import AsyncStorage from '@react-native-community/async-storage';

const Main = (props) => {
    const goCalories = () => props.navigation.navigate("CaloriesPages")
    const goActivities = () => props.navigation.navigate("ActivitiesPages")

    const [kullaniciId,setKullaniciId] = useState(0)
    const goPlans = () => props.navigation.navigate("PlansPages", {id: kullaniciId})
    const goExpenses = () => props.navigation.navigate("ExpensesPages")
    const logOut = () => {
        AsyncStorage.removeItem("@user_mail");
        AsyncStorage.removeItem("@user_id");
        props.navigation.navigate("Login");
    }
    useEffect(() => {
        getPersonId()
    },[])

    const getPersonId =async () => {
        var id =await AsyncStorage.getItem("@user_id")
        console.log("id ", id)
        setKullaniciId(id)
    }
    
    var yazi = "Çıkış Yap"
    return(
    <SafeAreaView style={styles.main.mainView}>
        <View style={styles.main.logoView}>
            <Image
            style={styles.main.logo}
            source={require('../assets/logo.png')}
            />
        </View>
        <View style={styles.main.menuView}>
            <View style={styles.main.menuRow}>
                <MyButton
                text="Kalorilerini Öğren"
                stil={styles.main.menuColumn}
                stiltxt={styles.main.menuText}
                press={goCalories}
                />
                <MyButton
                text="Planlama Takvimi"
                stil={styles.main.menuColumn}
                stiltxt={styles.main.menuText}
                press={goPlans}
                />
            </View>
            <View style={styles.main.menuRow}>
                <MyButton
                text="Aktivite Gör"
                stil={styles.main.menuColumn}
                stiltxt={styles.main.menuText}
                press={goActivities}

                />
                <MyButton
                text="Harcama Listesi"
                stil={styles.main.menuColumn}
                stiltxt={styles.main.menuText}
                press={goExpenses}
                />
            </View>
            <View style={styles.main.menuRow}>
                <MyButton
                text={yazi}
                stil={styles.main.menuCikisYapColumn}
                stiltxt={styles.main.menuText}
                press={logOut}

                />
                 <MyButton
                text={kullaniciId}
                stil={styles.main.menuCikisYapColumn}
                stiltxt={styles.main.menuText}
                press={logOut}

                />
                
            </View>
        </View>
        
    </SafeAreaView>
    )
}

export {Main}
