import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, View, LayoutAnimation, TouchableOpacity, Text, FlatList, StatusBar} from 'react-native'
import styles from './styles'
import SearchBar from "react-native-dynamic-search-bar";
import { Transitioning, Transition } from 'react-native-reanimated';
import { CustomLayoutSpring } from "react-native-animation-layout";
import {CaloriesItem} from './DETAILS/CaloriesItem'
import { Header } from '../components/Header';

const Calories = props => {

    // const [yemekler,setYemekler] = useState([
    //     {id:1,adi:"Elma",kalori:47,protein:85,enerji:90,karbonhidrat:50},
    //     {id:2,adi:"Armut",kalori:55,protein:85,enerji:90,karbonhidrat:50},
    //     {id:3,adi:"Üzüm",kalori:58,protein:85,enerji:90,karbonhidrat:50},
    //     {id:4,adi:"Kiraz",kalori:25,protein:85,enerji:90,karbonhidrat:50},
    //     {id:5,adi:"Dolma",kalori:30,protein:85,enerji:90,karbonhidrat:50},
    //     {id:6,adi:"Karpuz",kalori:15,protein:85,enerji:90,karbonhidrat:50},
    //     {id:7,adi:"Dondurma",kalori:70,protein:85,enerji:90,karbonhidrat:50},
    //     {id:8,adi:"Çekirdek",kalori:55,protein:85,enerji:90,karbonhidrat:50},
    //     {id:9,adi:"Kola",kalori:80,protein:85,enerji:90,karbonhidrat:50},
    //     {id:10,adi:"Çikolata",kalori:125,protein:85,enerji:90,karbonhidrat:50}
    // ])



    const [foodList, setFoodList] = useState([]);
    const [orginalFoodList, setOrginalFoodList] = useState([]);
    const transitionRef = useRef();
    const transition = <Transition.Change interpolation='easeInOut' />


    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      let {data} = await axios.get('https://draltaynihatacar.com/api/besinler.php?besinler=asdas');
      setFoodList(data.besinler);
      //console.log(data.besinler);
      setOrginalFoodList(data.besinler);
    };

    const onPress = () => {
      transitionRef.current.animateNextTransition();
    }
  
    const renderItems = ({item}) => {
      
      return <CaloriesItem 
          item={item} 
          // press={itemSelect} 
          onPress={onPress}
        />;
    };
  
    function itemSelect(item) {
      props.navigation.navigate('CaloriesDetail', {data: item.id});
    }
  
    function searchItems(text) {
      let filteredList = orginalFoodList.filter(item => {
        const ıtemData = item.adi.toUpperCase();
        const textData = text.toUpperCase();
        return ıtemData.indexOf(textData) > -1;
      });
      setFoodList(filteredList);
    }


    return(
        <>
        <SafeAreaView style={styles.calorie.safeAreaViewStyle}>
          <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>
          <View style={styles.calorie.container}>
            <SearchBar
              onPressToFocus
              autoFocus={false}
              fontColor= 'black'
              iconColor="black"
              shadowColor="#282828"
              cancelIconColor="black"
              backgroundColor="#fff"
              placeholder="Ara"
              onChangeText={searchItems}
            />
            
            <Transitioning.View ref={transitionRef} transition={transition} style={styles.calorie.flatListStyle}>   
              <FlatList
                  //refreshing={loading}
                  //onRefresh={fetchData}
                  keyExtractor={(item, index) => index.toString()}
                  data={foodList}
                  renderItem={renderItems}
              />
            </Transitioning.View>
           
          </View>
        </SafeAreaView>

        
        </>
    )
}

export {Calories}
