import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, KeyboardAvoidingView,  Keyboard } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const NavBar = () => {

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      {!keyboardVisible && (
    <KeyboardAvoidingView behavior="padding" style={styles.navBar}>
        <View style={styles.innerContainerNav}>
          <TouchableOpacity>
          <Ionicons name="home-outline" size={30} color="#FFCB11" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backgroundButtonSearch}>
            <View style={styles.mainButtonSearch}>
              <AntDesign name="barcode" size={30} color="black" />
            </View>
          </TouchableOpacity>
            <TouchableOpacity>
            <SimpleLineIcons name="user" size={30} color="#FFCB11" />
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    )}
    </>
  )
}

export default NavBar
