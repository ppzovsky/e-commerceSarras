import React from 'react'
import { View, TextInput } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({searchQuery, setChangeText, focus}:any) => {

   
  return (
    <View style={styles.iconInput}>
        <View style={styles.iconPosition}>
          <AntDesign style={styles.innerIcon} name="search1" size={25} color="black"/>
        </View>
      <TextInput style={styles.input}  
        value={searchQuery}
        onChangeText={setChangeText}
        autoFocus={focus}
        />
    </View>
  )
}

export default SearchBar
