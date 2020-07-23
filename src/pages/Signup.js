import React from 'react'
import { SafeAreaView, View, Image ,Text} from 'react-native'
import styles from './styles'
import {MyInput, MyButton} from '../components/'
const Signup = () => {

    /*
        1. HESAP OLUŞTUR BUTONU / REUSABLE COMPONENT
        2. FIRST&LAST NAME INPUTU / REUSABLE COMPONENT (ARDINDAN HOŞGELDİN {İSİM} YAZABİLİRİZ EKRANA)
        3. BENI HATIRLA BUTONU
        4. ALREADY MEMBER? LOG IN BUTONU
        5. MAİL, ŞİFRE VE ŞİFREYİ YENİDEN GİRİN INPUTU / REUSABLE COMPONENT???

    */

    return (
        <SafeAreaView style={styles.signIn.mainView}>
           <View style={styles.signIn.logoView}>
               <Image
               style={styles.signIn.logo}
               source={require('../assets/logo.png')}
               />
           </View>
           
           <View style={styles.signIn.formView}>
               <View style={styles.signIn.formRow}>
                   <View style={styles.signIn.labelColumn}>
                       <Text style={styles.signIn.label}>Ad Soyad</Text>
                   </View>
                   <View style={styles.signIn.formColumn}>
                       <MyInput
                       stil={styles.signIn.input}
                       />
                   </View>
               </View>

              

               <View style={styles.signIn.formRow}>
                   <View style={styles.signIn.labelColumn}>
                       <Text style={styles.signIn.label}>Mail</Text>
                   </View>
                   <View style={styles.signIn.formColumn}>
                       <MyInput
                       stil={styles.signIn.input}
                       />
                   </View>
               </View>

               <View style={styles.signIn.formRow}>
                   <View style={styles.signIn.labelColumn}>
                       <Text style={styles.signIn.label}>Şifre</Text>
                   </View>
                   <View style={styles.signIn.formColumn}>
                       <MyInput
                       stil={styles.signIn.input}
                       />
                   </View>
               </View>

               <View style={styles.signIn.formRow}>
                   <View style={styles.signIn.labelColumn}>
                       <Text style={styles.signIn.label}>Şifre (Tekrar)</Text>
                   </View>
                   <View style={styles.signIn.formColumn}>
                       <MyInput
                       stil={styles.signIn.input}
                       />
                   </View>
               </View>
               <MyButton
               stil={styles.signIn.signInBtn}
               stiltxt={styles.signIn.signInBtnTxt}
               text="Kayıt Ol"
               />
           </View>
        </SafeAreaView>
    )
}

export {Signup}
