import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView, View, TouchableOpacity, Text, Image, TextInput, FlatList, Dimensions,
    Pressable, Alert
} from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Modal from 'react-native-modal';
import axios from 'axios'
import moment from 'moment'
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'
import { LocaleConfig } from 'react-native-calendars';
import Context from '../context/store'


const Plans = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [planDetail, setPlanDetail] = useState("")
    const [planDate, setPlanDate] = useState("")
    const [allPlans, setAllPlans] = useState([])
    const [isDone, setIsDone] = useState(false)
    const [calDates, setCalDates] = useState({})
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };
    //const userId = route.params.id
        const [loading, setLoading] = useState(false)
        const { state, dispatch } = useContext(Context)

    //   const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {
        fetchData();

    }, [])




    const fetchData = async () => {
        setLoading(true)
        console.log("idcheck: ", state.userId)

        await axios.get(`https://draltaynihatacar.com/api/planlar.php?person_id=${state.userId}`)
            .then(response => {
                setAllPlans(response.data.aktiviteler)
                console.log(response.data.aktiviteler)
                setCalDates(JSON.stringify(allPlans.map(el => el.tarih)))
                console.log("callDates: ", calDates)
                setLoading(false)

                //
                /*
                const pokemon = [
                    { name: "charmander", type: "fire" },
                    { name: "squirtle", type: "water" },
                    { name: "bulbasaur", type: "grass" }
                ]

                const activiteler = [
                    { "durum": "0", "icerik": "plan yapacağım", "id": "8", "person_id": "15", "tarih": "2020-08-29" },
                    {
                        "durum": "0", "icerik": "planlarıma uyacağım...", "id": "9", "person_id": "15",
                        "tarih": "2020-08-30"
                    },
                    {
                        "durum": "0", "icerik": "yoga", "id": "10", "person_id": "15",
                        "tarih": "2020-08-01"
                    }]

                //We want to change this object to look like:
                markedDates = {{
                    '2020-06-15': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                    '2020-06-15': { dots: [massage, workout], disabled: true }
                }}
                */
                const obj = allPlans.reduce((o, tarih) => ({ ...o, [tarih]: "whatever"}), {})
                console.log("obj: ", obj)
/*
const pokemonModified = {
            charmander: { type: "fire" },
            squirtle: { type: "water" },
            bulbasaur: { type: "grass" }
        };

        const getMapFromArray = data =>
            data.reduce((acc, item) => {
                // add object key to our object i.e. charmander: { type: 'water' }
                acc[item.name] = { type: item.type };
                return acc;
            }, {});

*/
    })
            .catch (error => {
                setLoading(false)
    Alert.alert("Life Cycle", "Bir hata oluştu!")

})

    }


LocaleConfig.locales['tr'] = {
    monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    dayNamesShort: ['Pzr.', 'Pts.', 'Sal.', 'Çarş.', 'Perş.', 'Cum.', 'Cts.'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'tr';

const renderItem = ({ item }) => {
    var idLocale = require('moment/locale/tr');
    moment.locale('tr', idLocale);

    return (
        <View style={{
            height: Dimensions.get('window').height / 10,
            margin: 10,
            alignSelf: 'center',
            backgroundColor: '#448AFF',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get("window").width / 1.20,
            //                borderTopColor: 'gray',
            //                borderTopWidth: 1,
        }}>


            <Text > {moment(item.tarih).format("D MMMM, YYYY, dddd")} </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    disabled={false}
                    value={isDone}
                    onValueChange={(isDone) => setIsDone(!isDone)}
                />
                <Text > {item.icerik} </Text>
            </View>
        </View>

    )
}

function dayPressed(day) {
    setPlanDate(day.dateString)
    console.log('selected day', planDate)
    setModalVisible(!modalVisible)
}

function addPlan() {
    if (planDetail == "") {
        Alert.alert("Planı yazmayı unuttunuz.")
    } else {
        axios.post('https://draltaynihatacar.com/api/planlar.php',
            JSON.stringify({
                tarih: planDate,
                plan: planDetail,
                person_id: userId,
                isComplete: 0
            })
        )
            .then(function (response) {
                console.log(response.data.cevap);
                setModalVisible(false)
                moment.locale('es'); // change the global locale to Spanish
                //     console.log(moment(planDate).format("D MMMM, YYYY, dddd")); // Domingo 15 Julio 2012 11:01
                setPlanDetail()
            })
            .catch(function (error) {
                //       console.log(error.response);
            });

    }
}

const setPlanText = text => {
    setPlanDetail(text);
};

return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Text>Plans</Text>


            </TouchableOpacity>
            <Modal
                isVisible={modalVisible}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={{ margin: 15, marginTop: deviceHeight / 2.8, }}
            >
                <View style={{ flex: 1, backgroundColor: '#f2f2f2', borderRadius: 20, }}>
                    <View style={{ flex: 1, margin: 20, }}>



                        <Text
                            style={{ fontSize: 15 }}
                        >Plan:</Text>
                        <View>
                            <View style={{
                                flexDirection: 'row', margin: 5, borderRadius: 5,
                                backgroundColor: '#fefefe', alignItems: 'center'
                            }}>


                            </View>
                            <View style={{
                                flexDirection: 'row', margin: 5, borderRadius: 5,
                                backgroundColor: '#fefefe', alignItems: 'center'
                            }}>
                                <Image source={require('../assets/checklist.png')} />
                                <TextInput
                                    autoCapitalize="none"
                                    onChangeText={setPlanText}
                                    placeholder="Detay"
                                    style={{
                                        margin: 0, padding: 3,
                                        width: deviceWidth / 1.4,
                                    }}
                                    multiline
                                />
                            </View>
                        </View>
                        <Pressable
                            style={{
                                backgroundColor: "#2196F3",
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                width: 50, height: 30,
                                margin: 10,
                            }}
                            onPress={() => addPlan()} >
                            <Text style={{ color: 'white' }}>Ekle</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}

                scrollEnabled={true}

                //  selected day {"dateString": "2020-08-28", "day": 28, "month": 8, 
                //"timestamp": 1598572800000, "year": 2020}
                onMonthChange={(month) => { console.log('month changed', month) }}
                onDayPress={(day) => { dayPressed(day) }}
                markedDates={{
                    calDates: { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                    '2020-06-15': { dots: [massage, workout], disabled: true }
                }}
                markingType={'multi-dot'}


                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 350
                }}
                firstDay={1}
            />
            <Text
                style={{ fontSize: 15 }}
            >{JSON.stringify(planDate)}</Text>
            <Text
                style={{ fontSize: 15 }}
            >{planDetail}</Text>

            <FlatList

                style={{ flex: 1 }}
                data={allPlans}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                refreshing={loading}
                onRefresh={fetchData}

            />
        </View>
    </SafeAreaView>
)
}

export { Plans }