import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const PlansDetail = () => {

     /*
        1. OPTIONAL İNSANLARI EKLEME
        2. PLAN DETAYI 
        3. PLAN BAŞLIĞI VE OPTIONAL PARA EKLEME
        4. TÜM BUNLARI DÜZENLEME
        5. OPTIONAL TARİH-SAAT EKLEME
        
    */

    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>Plans</Text>
                    </TouchableOpacity>

                    <Calendar
  minDate={'2012-05-10'}
  maxDate={'2030-05-30'}
  onDayPress={(day) => {console.log('selected day', day)}}
  monthFormat={'yyyy MM'}
  onMonthChange={(month) => {console.log('month changed', month)}}
  hideArrows={false}
  hideExtraDays={false}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={true}
  // Disable right arrow. Default = false
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  /** Replace default month and year title with custom one. the function receive a date as parameter. */
  renderHeader={(date) => {/*Return JSX*/}}
/>
            </View>
        </SafeAreaView>
    )
}

export {PlansDetail}