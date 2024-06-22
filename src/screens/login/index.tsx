import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Index = ({ navigation }: any) => { 
  const [text, setText] = useState('');

  return (
  
    <KeyboardAvoidingView behavior="height" style={styles.mainContainerLogin}>
      <View style={styles.formContainer}>
          <Text style={styles.textEntry}>Bem Vindo!</Text>
          <View>
          <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.inputArea}
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.inputArea}
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.replace("Inicio")}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Index
