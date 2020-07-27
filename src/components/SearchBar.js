import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Component_styles';

const SearchBar = props => {
  return (
    <View style={styles.searchBarStyle.container}>
      <TextInput
        onChangeText={props.changeText}
        placeholder={props.searchBarPlaceHolder}
      />
    </View>
  );
};
export  {SearchBar};
