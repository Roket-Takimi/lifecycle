import React, { useState } from 'react'
import { SafeAreaView, View, Image ,Text, Alert} from 'react-native'
import styles from './styles'
import {MyInput, MyButton} from '../components/'
import axios from 'axios'

const Signup = () => {

    /*
        1. HESAP OLUŞTUR BUTONU / REUSABLE COMPONENT
        2. FIRST&LAST NAME INPUTU / REUSABLE COMPONENT (ARDINDAN HOŞGELDİN {İSİM} YAZABİLİRİZ EKRANA)
        3. BENI HATIRLA BUTONU
        4. ALREADY MEMBER? LOG IN BUTONU
        5. MAİL, ŞİFRE VE ŞİFREYİ YENİDEN GİRİN INPUTU / REUSABLE COMPONENT???

    */
    const [adSoyad,setAdSoyad] = useState("")
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("") 

    const changeAd = (text) => setAdSoyad(text)
    const changeMail = (text) => setMail(text)
    const changePassword = (text) => setPassword(text)
    const changeRePassword = (text) => setRePassword(text)

    const doSignIn = (text) => {
        if(password != rePassword){
            Alert.alert("Şifreler aynı değil.")
        }else if((adSoyad == "") || (mail == "") || (password == "") || (rePassword == "")){
            Alert.alert("Her alanı doldurunuz lütfen.")
        } else{
                axios.post('https://draltaynihatacar.com/api/kodluyoruz_kullanici.php',
                {
                    'adi': 'hasanmerttt',
                    'mail': 'hasanmerer@gmail.com',
                    'password': 'asdasd'
                }
                
                )

            }
    }
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
                       changeText={changeAd}
                       veri={adSoyad}
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
                       changeText={changeMail}
                       veri={mail}
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
                       changeText={changePassword}
                       veri={password}
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
                       changeText={changeRePassword}
                       veri={rePassword}
                       />
                   </View>
               </View>
               <MyButton
               stil={styles.signIn.signInBtn}
               stiltxt={styles.signIn.signInBtnTxt}
               text="Kayıt Ol"
               press={doSignIn}
               />
           </View>
        </SafeAreaView>
    )
}

export {Signup}
