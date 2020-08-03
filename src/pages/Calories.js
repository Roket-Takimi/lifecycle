import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList} from 'react-native'
import styles from './styles'
import {SearchBar} from '../components'

import {CaloriesItem} from './DETAILS/CaloriesItem'


const Calories = props => {

    // const [yemekler,setYemekler] = useState([
    //     {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
    //     {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
    //     {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
    //     {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
    //     {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
    //     {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
    //     {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
    //     {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
    //     {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
    //     {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
    // ])



    const [citiesList, setCitiesList] = useState([]);
    const [myList, setMyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [orginalCitiesList, setOrginalCitiesList] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setLoading(false);
      let {data} = await axios.get('https://draltaynihatacar.com/api/besinler.php?besinler=asdas');
      setCitiesList(data.besinler);
      setMyList(data.count);
      //console.log(data.besinler);
      setOrginalCitiesList(data.besinler);
      setLoading(true);
    };
  
    const renderCities = ({item}) => {
      return <CaloriesItem dataItem={item} press={citiesSelect} />;
    };
  
    function citiesSelect(item) {
      props.navigation.navigate('CaloriesDetail', {data: item});
    }
  
    function searchCities(text) {
      let filteredList = orginalCitiesList.filter(item => {
        const ıtemData = item.adi.toUpperCase();
        const textData = text.toUpperCase();
        return ıtemData.indexOf(textData) > -1;
      });
      setCitiesList(filteredList);
    }


    return(
        <SafeAreaView style={styles.calorie.mainView}>
          
            <View style={styles.calorie.headerView}>
                <Text style={styles.calorie.headerText}>KALORİLERİNİ ÖĞREN</Text>
            </View>

            <SearchBar
                changeText={searchCities}
                searchBarPlaceHolder={'Arama Yapınız...'}
            />

            
        <FlatList
            //refreshing={loading}
            //onRefresh={fetchData}
            keyExtractor={(item, index) => index.toString()}
            data={citiesList}
            renderItem={renderCities}
        />
          
        </SafeAreaView>
    )
}

export {Calories}





// import React, {useState} from "react";
// import {View, Text, TouchableOpacity, Animated, ScrollView, Image, Alert, Dimensions} from "react-native";

// import styles from './styles'
// import {SearchBar} from '../components'

// import {CaloriesItem} from './DETAILS/CaloriesItem'

// const { width } = Dimensions.get("window");

// // const [yemekler,setYemekler] = useState([
// //              {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
// //              {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
// //              {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
// //              {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
// //              {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
// //              {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
// //              {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
// //              {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
// //              {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
// //              {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
// //          ])

// export default class Calories extends React.Component {
//     state = {
//         active: 0,
//         xTabOne: 0,
//         xTabTwo: 0,
//         translateX: new Animated.Value(0),
//         translateXTabOne: new Animated.Value(0),
//         translateXTabTwo: new Animated.Value(width),
//         translateY: -1000
//     };

//     handleSlide = type => {
//         let {
//             active,
//             xTabOne,
//             xTabTwo,
//             translateX,
//             translateXTabOne,
//             translateXTabTwo
//         } = this.state;
//         Animated.spring(translateX, {
//             toValue: type,
//             duration: 100,
//             useNativeDriver: true
//         }).start();
//         if (active === 0) {
//             Animated.parallel([
//                 Animated.spring(translateXTabOne, {
//                     toValue: 0,
//                     duration: 100,
//                     useNativeDriver: true
//                 }).start(),
//                 Animated.spring(translateXTabTwo, {
//                     toValue: width,
//                     duration: 100,
//                     useNativeDriver: true
//                 }).start()
//             ]);
//         } else {
//             Animated.parallel([
//                 Animated.spring(translateXTabOne, {
//                     toValue: -width,
//                     duration: 100,
//                     useNativeDriver: true
//                 }).start(),
//                 Animated.spring(translateXTabTwo, {
//                     toValue: 0,
//                     duration: 100,
//                     useNativeDriver: true
//                 }).start()
//             ]);
//         }
//     };

//     render() {
//         let {
//             xTabOne,
//             xTabTwo,
//             translateX,
//             active,
//             translateXTabOne,
//             translateXTabTwo,
//             translateY
//         } = this.state;
//         return (
//             <View style={{ flex: 1 }}>
//                 <View
//                     style={styles.calorie.tab1}
//                 >
//                     <View
//                         style={styles.calorie.tab2}
//                     >
//                         <Animated.View
//                             style={{
//                                 position: "absolute",
//                                 width: "50%",
//                                 height: "100%",
//                                 top: 0,
//                                 left: 0,
//                                 backgroundColor: "#007aff",
//                                 borderRadius: 4,
//                                 transform: [
//                                     {
//                                         translateX
//                                     }
//                                 ]
//                             }}
//                         />
//                         <TouchableOpacity
//                             style={styles.calorie.tab3}
//                             onLayout={event =>
//                                 this.setState({
//                                     xTabOne: event.nativeEvent.layout.x
//                                 })
//                             }
//                             onPress={() =>
//                                 this.setState({ active: 0 }, () =>
//                                     this.handleSlide(xTabOne)
//                                 )
//                             }
//                         >
//                             <Text
//                                 style={{
//                                     color: active === 0 ? "#fff" : "#007aff"
//                                 }}
//                             >
//                                 Kaç Kalori?
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             style={styles.calorie.tab4}
//                             onLayout={event =>
//                                 this.setState({
//                                     xTabTwo: event.nativeEvent.layout.x
//                                 })
//                             }
//                             onPress={() =>
//                                 this.setState({ active: 1 }, () =>
//                                     this.handleSlide(xTabTwo)
//                                 )
//                             }
//                         >
//                             <Text
//                                 style={{
//                                     color: active === 1 ? "#fff" : "#007aff"
//                                 }}
//                             >
//                                 Kalori Takip
//                             </Text>
//                         </TouchableOpacity>
//                     </View>

//                     <ScrollView>
//                         <Animated.View
//                             style={{
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 transform: [
//                                     {
//                                         translateX: translateXTabOne
//                                     }
//                                 ]
//                             }}
//                             onLayout={event =>
//                                 this.setState({
//                                     translateY: event.nativeEvent.layout.height
//                                 })
//                             }
//                         >
                    
//                             <View style={{ marginTop: 20 }}>
                                

//                             <SearchBar
//                                 //changeText={searchItem}
//                                 searchBarPlaceHolder={'Arama Yapınız...'}
//                             />

//                             </View>
//                         </Animated.View>

//                         <Animated.View
//                             style={{
//                                 justifyContent: "center",
//                                 alignItems: "baseline",
//                                 transform: [
//                                     {
//                                         translateX: translateXTabTwo
//                                     },
//                                     {
//                                         translateY: -translateY
//                                     }
//                                 ]
//                             }}
//                         >
//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/breakfast.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />
//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>Kahvaltı</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 255 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 85 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>
                                
//                             </View>

//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/snack.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />
//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>1. Ara Öğün</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 165 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 85 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>

//                             </View>

//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/lunch.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />
//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>Öğle Yemeği</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 330 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 85 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>

//                             </View>

//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/snack.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />

//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>2. Ara Öğün</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 165 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 85 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>

//                             </View>

//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/dinner.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />

//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>Akşam Yemeği</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 330 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 85 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>
                                
//                             </View>

//                             <View style={styles.calorie.kaloriTakipItem}>
//                                 <Image
//                                     source={require("../assets/snack.png")}
//                                     style={styles.calorie.imgStyle}
//                                 />

//                                 <View>
//                                     <Text style= {styles.calorie.kaloriTakipText1}>3. Ara Öğün</Text>
//                                     <Text style= {styles.calorie.kaloriTakipText2}>Önerilen 90 kcal</Text>
//                                 </View>

//                                 <TouchableOpacity onPress={() => { Alert.alert('Yemek Ekle') }}>
//                                     <Image

//                                         style={{ width: 40, height: 40, marginLeft: 92 }}
//                                         resizeMode="contain"
//                                         source={require("../assets/ekle.png")}
//                                         onPress={()=>{Alert.alert("")}}
//                                     >

//                                     </Image>

//                                 </TouchableOpacity>
                                
//                             </View>
                            
//                         </Animated.View>
//                     </ScrollView>
//                 </View>
//             </View>
//         );
//     }
// }


