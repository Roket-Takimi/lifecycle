import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, TextInput, FlatList, Dimensions, Pressable } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Modal from 'react-native-modal';


const PlansDetail = () => {
  
    /*
       1. OPTIONAL İNSANLARI EKLEME
       2. PLAN DETAYI 
       3. PLAN BAŞLIĞI VE OPTIONAL PARA EKLEME
       4. TÜM BUNLARI DÜZENLEME
       5. OPTIONAL TARİH-SAAT EKLEME
       
   */

   function addPlan () {
       //push details to allplans
   }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>Plans</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export { PlansDetail }