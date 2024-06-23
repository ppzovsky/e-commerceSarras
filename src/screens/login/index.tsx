import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

<<<<<<< HEAD
const Index = ({ navigation }: any) => { 
  const [text, setText] = useState('');
=======
const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> origin/kayque

  return (
  
    <ScrollView contentContainerStyle={styles.mainContainerLogin}>
      <View style={styles.formContainer}>
          <Text style={styles.textEntry}>Bem Vindo!</Text>
          <View>
          <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.inputArea}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.inputArea}
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
            />
          </View>
<<<<<<< HEAD
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.replace("Inicio")}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
=======
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonLoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonLoginText}>Registre-se</Text>
            </TouchableOpacity>
          </View>
>>>>>>> origin/kayque
      </View>
    </ScrollView>
  )
}

export default Index
