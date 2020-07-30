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

import React from 'react'
import {Text, View, SafeAreaView , Image} from 'react-native'
import styles from './styles'
import {MyButton} from '../components/'

const Main = (props) => {
    const goCalories = () => props.navigation.navigate("Calorie")
    const goActivities = () => props.navigation.navigate("Activity")

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
                />
            </View>
        </View>
        
    </SafeAreaView>
    )
}

export {Main}
