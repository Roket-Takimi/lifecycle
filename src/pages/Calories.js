import React, {useState} from "react";
import {View, Text, TouchableOpacity, Animated, ScrollView, Image, Dimensions} from "react-native";

import styles from './styles'
import {SearchBar} from '../components'

import {CaloriesItem} from './DETAILS/CaloriesItem'

const { width } = Dimensions.get("window");

// const [yemekler,setYemekler] = useState([
//              {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
//              {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
//              {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
//              {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
//              {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
//              {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
//              {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
//              {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
//              {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
//              {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
//          ])

export default class Calories extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                Kaç Kalori?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Kalori Takip
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            {/* <Text>Hi, I am a cute cat</Text> */}
                            <View style={{ marginTop: 20 }}>
                                {/* <Image
                                    source={require("../assets/cat.jpg")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                /> */}

                            <SearchBar
                                //changeText={searchItem}
                                searchBarPlaceHolder={'Arama Yapınız...'}
                            />

                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "baseline",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 15, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#007aff', padding: 10 }}>
                                <Image
                                    source={require("../assets/breakfast.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>Kahvaltı</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 255 kcal</Text>
                                </View>
                                
                            </View>

                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#77a0ff', padding: 10 }}>
                                <Image
                                    source={require("../assets/snack.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>1. Ara Öğün</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 165 kcal</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#77a0ff', padding: 10 }}>
                                <Image
                                    source={require("../assets/lunch.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>Öğle Yemeği</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 330 kcal</Text>
                                </View>

                            </View>

                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#77a0ff', padding: 10 }}>
                                <Image
                                    source={require("../assets/snack.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />

                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>2. Ara Öğün</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 165 kcal</Text>
                                </View>

                            </View>

                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#77a0ff', padding: 10 }}>
                                <Image
                                    source={require("../assets/dinner.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />

                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>Akşam Yemeği</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 330 kcal</Text>
                                </View>
                                
                            </View>

                            <View style={{flexDirection: 'row', margin: 15, marginLeft: 0, width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.08, borderWidth: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#007aff', borderColor: '#77a0ff', padding: 10 }}>
                                <Image
                                    source={require("../assets/snack.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 15,
                                        resizeMode: 'contain'
                                    }}
                                />

                                <View>
                                    <Text style= {{marginLeft: 10, color: 'white', fontSize: 16}}>3. Ara Öğün</Text>
                                    <Text style= {{marginLeft: 10, color: 'white', opacity: 0.6}}>Önerilen 90 kcal</Text>
                                </View>
                                
                            </View>
                            
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// import React, { useState } from 'react'
// import { SafeAreaView, View, TouchableOpacity, Text, FlatList} from 'react-native'
// import styles from './styles'
// import {SearchBar} from '../components'

// import {CaloriesItem} from './DETAILS/CaloriesItem'


// const Calories = props => {
    
//     return (
//         <View style={{flex: 1}}>
//             <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
//                 <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 20, height: 36, position: 'relative'}}>
//                    <View
//                    style={{position: 'absolute', width: '50%', height: '100%', top: 0, left: 0, backgroundColor: '#007aff', borderRadius: 4}}
//                    />
//                     <TouchableOpacity
//                     style={{flex:1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#007aff', borderRadius: 4, borderRightWidth: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0}}
//                     >
//                         <Text>Kaç Kalori?</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                     style={{flex:1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#007aff', borderRadius: 4, borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
//                     >
//                         <Text>Kalori Takip</Text>
//                     </TouchableOpacity>

//                 </View>
//             </View>
//         </View>
//     )
// }


// const Calories = props => {

//     const [itemList, setItemList] = useState([]);

//     const [yemekler,setYemekler] = useState([
//         {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
//         {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
//         {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
//         {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
//         {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
//         {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
//         {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
//         {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
//         {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
//         {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
//     ])

//     /*
//         TÜM GÜNLER VE TOPLAM KALORİLER GÖSTERİLİR
//         YİYECEK LİSTESİ GÖSTERİLİR
//         TIKLAYINCA DETAY SAYFASINA GİDER

//     */

//     const renderItems = ({item}) => {
//         return <CaloriesItem propsData={item} pressHandler={caloriesPress} />;
//     };

//     function caloriesPress(item) {
//         props.navigation.navigate('CaloriesDetail', {data: item});
//     }

//    function searchItem(text) {
//        //console.log(text);
//     let filteredList = yemekler.filter(item => {
//       const itemData = item.name.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     yemekler(filteredList);
//   }
  

//     return(
//         <SafeAreaView style={styles.calorie.mainView}>
          
//             <View style={styles.calorie.headerView}>
//                 <Text style={styles.calorie.headerText}>KALORİLERİNİ ÖĞREN</Text>
//             </View>

//             <SearchBar
//                 changeText={searchItem}
//                 searchBarPlaceHolder={'Arama Yapınız...'}
//             />

            
//            <FlatList
//                 style={styles.calorie.liste}
//                 data={yemekler}
//                 keyExtractor={(_,index) => index.toString()}
//                 renderItem={renderItems}
//            />
          
//         </SafeAreaView>
//     )
// }

// export {Calories}
