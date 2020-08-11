import React, { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, StatusBar, ImageBackground, Image} from 'react-native'
import {ActivitiesContext} from '../context/ActivitiesContext';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper';
import { Header } from '../components/Header';


const AddActivities = ( {navigation} ) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const {state,dispatch} = useContext(ActivitiesContext)

    const [image, setImage] = useState('https://avatarfiles.alphacoders.com/873/thumb-87367.png');
    const {colors} = useTheme();

    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        bs.current.snapTo(1);
      });
    }

    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image.path);
        setImage(image.path);
        bs.current.snapTo(1);
      });
    }

    renderInner = () => (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Fotoğraf Yükle</Text>
          <Text style={styles.panelSubtitle}>Aktiviteniz için fotoğraf seçin</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Fotoğraf Çek</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Galeriden Seç</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Kapat</Text>
        </TouchableOpacity>
      </View>
    );

    renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor= "white"/>
        <Header titleText = 'Aktivite Oluştur' />            
        <View style={{flex:1}}>

        <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100, justifyContent:'center'}}
                imageStyle={{borderRadius: 15, justifyContent: 'center'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        </Animated.View>

            <TextInput
                label = "Aktivitenize Başlık Ekleyiniz"
                values = {title}
                mode = 'outlined'
                onChangeText = {(text) => setTitle(text)}
                style = {[styles.title]}
            />

            <TextInput
                label = "Aktivitenize Açıklama Ekleyiniz"
                values = {content}
                mode = 'flat'
                onChangeText = {(text) => setContent(text)}
                multiline = {true}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
                style = {styles.text}
            />

            <FAB
                style = {styles.fab}
                // small
                icon = "check"
                disabled = {title == '' ? true : false}
                onPress = { () => {
                    dispatch({type:"ADD", option:{title,content,image}}) 
                    navigation.goBack();
                }}
            />

        </View>
        </>
    )
}

export {AddActivities}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#219653',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 150,
    marginBottom: 16,
  },
  fab: {
    backgroundColor: '#448AFF',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },container: {
    flex: 1,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#448AFF',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
})
