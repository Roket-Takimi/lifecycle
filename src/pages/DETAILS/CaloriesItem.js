import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, Modal } from 'react-native';

import styles from '../styles';

const CaloriesItem = ({ item, onPress }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onItemPress = () => {
    onPress()
    setExpanded(!expanded)
  }
  

  return (
    <TouchableOpacity style={styles.calorie.wrap} onPress={onItemPress}>
      <View >
        <View>
          <Text style={styles.calorie.calorieText2}>{item.adi}</Text>
        </View>
      </View>
      {expanded && (
        <View>
            <View style={styles.calorie.calorieItem}>
                <Text style={styles.calorie.calorieText}>Kalori: {item.kalori} kcal</Text>
            </View>

            <View style={styles.calorie.calorieItem}>
                <Text style={styles.calorie.calorieText}>Protein: {item.protein} gr</Text>
            </View>

            <View style={styles.calorie.calorieItem}>
                <Text style={styles.calorie.calorieText}>Yağ: {item.enerji} gr</Text>
            </View>

            <View style={styles.calorie.calorieItem}>
                <Text style={styles.calorie.calorieText}>Karbonhidrat: {item.karbonhidrat} gr</Text>
            </View>

            <View style={styles.calorie.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.calorie.centeredView}>
                    <View style={styles.calorie.modalView}>
                        
                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>Kahvaltı</Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>1. Ara Öğün</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>Öğle Yemeği</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                    
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>2. Ara Öğün</Text>

                        </TouchableHighlight>

                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>Akşam Yemeği</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.calorie.modalText}>3. Ara Öğün</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={[styles.calorie.modalText, {color: 'red'}]}>Vazgeç</Text>
                        </TouchableHighlight>

                    </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.calorie.calorieItem}

                    onPress={() => {
                    setModalVisible(true);
                    }}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image
                            style={{ width: 25, height: 25, marginRight: 10}}
                            resizeMode="contain"
                            source={require("../../assets/ekle.png")}
                        
                            />
                        <Text style={styles.calorie.calorieText}>ÖĞÜNE EKLE</Text>
                    </View>
                </TouchableHighlight>
                </View>

            

        </View>
      )}
    </TouchableOpacity>
  );
};

export {CaloriesItem}


// import React from 'react'
// import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'

// import styles from '../styles'

// const CaloriesItem = props => {

//     return(
//         <SafeAreaView>
//             <View>
//                 <TouchableOpacity onPress={() => props.press(props.dataItem)} style={styles.calorie.calorieItem}>
//                     <Text style={styles.calorie.calorieText}>{props.dataItem.adi}</Text>
//                     {/* <Text style={styles.calorie.calorieText}>{props.dataItem.kalori} Kalori</Text> */}
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     )
// }

// export {CaloriesItem}