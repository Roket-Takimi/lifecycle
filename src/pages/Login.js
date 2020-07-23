import React from 'react'
import { SafeAreaView, View, Text ,Image} from 'react-native'
import styles from './styles'
import {MyButton, MyInput} from '../components';

const Login = (props) => {

    /*
        1. MAİL VE ŞİFRE INPUTU / REUSABLE COMPONENT???
        2. GİRİŞ YAP BUTONU / REUSABLE COMPONENT
        3. ŞİFREMİ UNUTTUM BUTONU / REUSABLE COMPONENT
        4. HESABIN YOK MU? HESAP OLUŞTUR BUTONU / REUSABLE COMPONENT
        5. BENİ HATIRLA BUTONU (HASAN MERTCİM BACKEND AKAR <3)

    */
    const bas = () => console.log("asdasdasd");
    const loginYap = () => props.navigation.navigate("MainPage");
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
                     stil={styles.login.input}
                     />
                 </View>
             </View>
             <View style={styles.login.inputRow}>
                 <View style={styles.login.inputColumnLabel}>
                     <Text style={styles.login.label}>Şifre</Text>
                 </View>
                 <View style={styles.login.inputColumnForm}>
                     <MyInput
                     stil={styles.login.input}
                     />
                 </View>
             </View>
         </View>
         <View style={styles.login.btnView}>
             <MyButton
             stil={styles.login.loginBtn}
             stiltxt={styles.login.loginBtnTxt}
             text="GİRİŞ YAP"
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
             />
         </View>
     </SafeAreaView>
    )
}

export {Login}
