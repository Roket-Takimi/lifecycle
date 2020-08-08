import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, TextInput, FlatList, Dimensions, Pressable } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Modal from 'react-native-modal';
import axios from 'axios'
import moment from 'moment'


const Plans = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [planDetail, setPlanDetail] = useState("")
    const [planDate, setPlanDate] = useState("")
    const [allPlans, setAllPlans] = useState([])
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };
    const userId = 1

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        axios.get(`https://draltaynihatacar.com/api/planlar.php?kullaniciId=${userId}&tarih=2020/06/12`)
            .then(response => {
                setAllPlans(response.data.planlar)
                console.log(response.data.planlar)
            })
            .catch(error => {
                Alert.alert("Life Cycle", "Bir hata oluştu!")
            })

    }
    
    const renderItem = ({item}) => {
        return (
            <View>
                <Text> {item.tarih} </Text>
                <Text> {item.icerik} </Text>
            </View>
        )
    }


    function dayPressed(day) {
        setPlanDate(day.dateString)
        console.log('selected day', planDate)
        setModalVisible(!modalVisible)
    }

    function addPlan() {
        //push details to allplans
        setModalVisible(false)
        console.log('added?', planDate)
        setPlanDetail()
        setPlanText()
    }

    const setPlanText = text => {
        console.log(text);
        setPlanDetail(text);
    };

    return (
        <SafeAreaView>
            <View>
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
                            >Planım:</Text>
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
                        '2020-05-25': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2020-05-26': { dots: [massage, workout], disabled: true }
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
                    data={allPlans}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export { Plans }