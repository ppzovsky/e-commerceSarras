import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import axios from "axios";
import { PerfilProps } from "../../routes/tabNavigation";

const PerfilScreen: React.FC = ( {route}: PerfilProps) => {
  
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Usuarios/")
      .then(res => {
        const { usuario, email, username, senha } = res.data;
        setUsuario(usuario);
        setEmail(email);
        setUsername(username);
        setSenha(senha);
    })
  }, [])


  const logout = async () => {
    // try {
    //   const res = await axios.post( '', {
    //     token: '',
    //   });
    //   if (res.status === 200) {
        
    //     Alert.alert("Deslogado com sucesso");
        navigation.replace("Login");
    //   } else {
    //     Alert.alert('Falha ao deslogar')
    //   }
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert('');
    // }
  };

  const updatePassword = async () => {
    try{
    const res = await axios.post('', {
      email: email,
      senhaAntiga: senha,
      novaSenha: novaSenha,
    })
    if (res.status === 200) {
      Alert.alert('Senha atualizada!');
    } else {
      Alert.alert('Falha ao atualizar a senha');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('');
  }
    alert("Senha atualizada!");
  };

  const criadores = () => {
    alert("Navegar para a página de Criadores do App");
  };

  return (
    <LinearGradient colors={["#1c1c1c", "#000"]} style={styles.container}>

      <View style={styles.profileContainer}>
        <Text style={styles.title}>Perfil</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nova Senha</Text>
          <TextInput
            style={styles.input}
            value={novaSenha}
            onChangeText={setNovaSenha}
            secureTextEntry={true}
            placeholder="Nova Senha"
            placeholderTextColor="#888"
          />
          <Text style={styles.changePassword} onPress={updatePassword}>
            alterar senha
          </Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>LogOut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.creatorsButton} onPress={criadores}>
        <Text style={styles.creatorsButtonText}>Criadores do App</Text>
      </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default PerfilScreen;


