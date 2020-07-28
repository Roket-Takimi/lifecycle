import React, {useState} from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions, Modal, Pressable } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const PlansDetail = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [plan, setPlan] = useState("")
    const [date, setDate] = useState("")

    /*
       1. OPTIONAL İNSANLARI EKLEME
       2. PLAN DETAYI 
       3. PLAN BAŞLIĞI VE OPTIONAL PARA EKLEME
       4. TÜM BUNLARI DÜZENLEME
       5. OPTIONAL TARİH-SAAT EKLEME
       
   */
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>Plans</Text>
                </TouchableOpacity>
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
           <View >
          <View >
            <Text>Hello World!</Text>

            <Pressable
              style={{ backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                  
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    onDayPress={(day) => { console.log('selected day', day); setModalVisible(!modalVisible) }}
                    onMonthChange={(month) => { console.log('month changed', month) }}

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
            </View>
        </SafeAreaView>
    )
}

export { PlansDetail }