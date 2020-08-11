import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import addPara from '../components'
import item from '../components'
import SearchBar from '../components'
const Expenses = () => {

    /*
        GÜN GÜN TOPLAM HARCAMA LİSTESİ
        GRAFİK İLE GÖSTEREBİLİRİZ
        TIKLAYINCA DETAY SAYFASINA GİDER


    */


    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>Expenses</Text>
                   
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {Expenses}
