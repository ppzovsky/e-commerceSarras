import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginProps } from '../../routes/stack';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useUser } from '../../components/useContext/userProfile';

const Index = ({ navigation }: LoginProps) => { 
  const { setUsuario } = useUser();
  const [usuarios, setUsuarios] = useState([]);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [password, setPassword] = useState('');
  

  useEffect(() => {
    axios.get("https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Usuarios/")
      .then(res => {
        setUsuarios(res.data);
      })
      .catch(error => {
        console.error("Erro ao buscar usuários:", error);
      });
  }, []);

  const fazerLogin = () => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === emailInput && usuario.senha === passwordInput);

    if (usuarioEncontrado) {
      setUsuario(usuarioEncontrado);
      alert('Login realizado com sucesso!');
      console.log(usuarioEncontrado)
      navigation.replace('Inicio');
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
  };


  return (
  
    <ScrollView contentContainerStyle={styles.mainContainerLogin}>
      <View style={styles.formContainer}>
          <Text style={styles.textEntry}>Bem Vindo!</Text>
          <View>
          <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.inputArea}
              value={emailInput}
              onChangeText={setEmailInput}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.inputArea}
              value={passwordInput}
              onChangeText={setPasswordInput}
              secureTextEntry
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonLogin} onPress={fazerLogin}>
              <Text style={styles.buttonLoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.buttonLoginText}>Registre-se</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}
export default Index;
