import React ,{useEffect} from 'react'
import {ActivityIndicator,Text,SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'
const LoginControl = (props) => {

    useEffect(() => {
//Uygulama ilk açıldığında çalışacak kısım.
        SplashScreen.hide();
        loginControl();
    } , [])

    const loginControl = () => {
        AsyncStorage.getItem("@user_mail")
        .then(res => {
            if(res == null){
                props.navigation.navigate("Login");
            }else{
                props.navigation.navigate("Main");
            }
        })
      }

    return(
        <SafeAreaView style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Giriş Bilgileri Kontrol Ediliyor...</Text>

        </SafeAreaView>
    )
}

export {LoginControl}