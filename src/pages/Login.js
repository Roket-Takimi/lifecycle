import React, { useState,useEffect } from 'react'
import { SafeAreaView, View, Text ,Image, Alert} from 'react-native'
import styles from './styles'
import {MyButton, MyInput} from '../components';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
const Login = (props) => {

    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(() => {
        
      },[])

    /*
        1. MAİL VE ŞİFRE INPUTU / REUSABLE COMPONENT???
        2. GİRİŞ YAP BUTONU / REUSABLE COMPONENT
        3. ŞİFREMİ UNUTTUM BUTONU / REUSABLE COMPONENT
        4. HESABIN YOK MU? HESAP OLUŞTUR BUTONU / REUSABLE COMPONENT
        5. BENİ HATIRLA BUTONU (HASAN MERTCİM BACKEND AKAR <3)

    */

      



  

    const changeMail = (text) => setMail(text) // Mail inputundaki veriyi state atan fonksiyon
    const changePassword = (text) => setPassword(text) // Password inputundaki veriyi state e atan fonksiyon
    
    const loginYap = () => {
        if((mail == "") || (password == "")){
            Alert.alert("Mail veya şifre alanı boş bırakılamaz.")
        }else{
            axios.get(`https://draltaynihatacar.com/api/kodluyoruz_kullanici.php?mail=${mail}&password=${password}`)
        .then(function(response){
            props.navigation.navigate("Main")
            AsyncStorage.setItem('@user_mail', mail)
        })
        .catch(function(error){
            console.log(error)
            Alert.alert("Kullanıcı adı veya şifre hatalı.")
        })
        }
        
    }
    const goSignUp = () => props.navigation.navigate("Signup");
    return(
        <SafeAreaView style={styles.login.mainView}>
         <View style={styles.login.logoView}>
             <Image 
             style={styles.login.logo}
             source={require('../assets/logo.png')}
             />
         </View>
         <View style={styles.login.inputView}>
             <View style={styles.login.inputRow}>
                 <View style={styles.login.inputColumnLabel}>
                     <Text style={styles.login.label}>Mail</Text>
                 </View>
                 <View style={styles.login.inputColumnForm}>
                     <MyInput
<<<<<<< HEAD
                     stil={styles.login.input}
                     veri={mail}
                     changeText={changeMail}
                     keyboard="email-address"
                     plc="mail@mail.com"
=======
                        stil={styles.login.input}
                        veri={mail}
                        changeText={changeMail}
                        keyboardType="email-address"
                        autoCapitalize="none"
>>>>>>> bedc02635d24f746dcedd7e867119bc6de6093bc
                     />
                 </View>
             </View>
             <View style={styles.login.inputRow}>
                 <View style={styles.login.inputColumnLabel}>
                     <Text style={styles.login.label}>Şifre</Text>
                 </View>

                 <View style={styles.login.inputColumnForm}>
                     <MyInput
<<<<<<< HEAD
                     stil={styles.login.input}
                     veri={password}
                     changeText={changePassword}
                     plc="şifre"
                     secure={true}
=======
                        stil={styles.login.input}
                        veri={password}
                        changeText={changePassword}
                        secureTextEntry
>>>>>>> bedc02635d24f746dcedd7e867119bc6de6093bc
                     />
                 </View>
             </View>
         </View>
         <View style={styles.login.btnView}>
             <MyButton
             stil={styles.login.loginBtn}
             stiltxt={styles.login.loginBtnTxt}
             text="GİRİŞ YAP"
             press={loginYap}
             />
              <MyButton
             stil={styles.login.marginB}
             stiltxt={styles.login.textBtn}
             text="Parolamı Unuttum"
             />
              <MyButton
             stil={styles.login.marginB}
             stiltxt={styles.login.textBtn}
             text="Kayıt Ol"
             press={goSignUp}

             />
         </View>
     </SafeAreaView>
    )
}

export {Login}
