import React ,{useEffect, useState, useContext} from 'react'
import {ActivityIndicator,Text,SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'
import axios from 'axios'

const LoginControl = (props) => {
    const { state, dispatch } = useContext(Context)
    const [users, setUsers] = useState([])

    useEffect(() => {
//Uygulama ilk açıldığında çalışacak kısım.
        SplashScreen.hide();
        loginControl();
        console.log("mail: ", state.userMail)
    } , [])

    const userData = async () => {
        axios.get("https://draltaynihatacar.com/api/kodluyoruz_kullanici.php?kullanicilar=asdasd")
            .then(response => {
                setUsers(response.data.kullanicilar)
             //   console.log(response.data.kullanicilar)
        //     console.log(AsyncStorage.getItem("@user_mail"))
        console.log("mail: ", state.userMail)
      //  console.log(users.find(el => el.mail == state.userMail))
    })
            .catch(error => {
                Alert.alert("Life Cycle", "Bir hata oluştu!")
            })

    }
/*
    const jungle = [
        { name: "frog", threat: 0 },
        { name: "monkey", threat: 5 },
        { name: "gorilla", threat: 8 },
        { name: "lion", threat: 10 }
      ];
      
      // methods we can do on the array of objects
      console.log(jungle.find(el => el.threat == 5)); // returns object - {name: "monkey", threat: 5}
      console.log(jungle.filter(el => el.threat > 5)); // returns array - [{name: "gorilla", threat: 8}, {name: 'lion', threat: 10}]
  */     

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