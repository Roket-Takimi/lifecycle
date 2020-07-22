import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
        <SafeAreaView style={{flex:1}}>
            <View style={styles.login.mainView}>
                <View style={styles.login.logoView}>
                    <Text style={styles.login.logoText}>logo</Text>
                </View>
                <View style={styles.login.inputView}>
                    <Text style={styles.login.inputLabel}>Kullanıcı Adı</Text>
                    <MyInput
                        plc="kullanıcı adı"
                        stil={styles.login.input}
                    />

                </View>
                <View style={styles.login.inputView}>
                    <Text style={styles.login.inputLabel}>Şifre</Text>
                    <MyInput
                        plc="**********"
                        stil={styles.login.input}
                    />

                </View>
                <View>
                    <MyButton
                        stil={styles.login.loginButton}
                        stiltxt={styles.login.loginButtonTxt}
                        text="Giriş Yap"
                        press={loginYap}
                    />
                </View>
                <View>
                    <MyButton
                        stil={styles.login.signInButton}
                        stiltxt={styles.login.signInButtonTxt}
                        text="Kayıt Ol"
                        press={bas}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export {Login}
