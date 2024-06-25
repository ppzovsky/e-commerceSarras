import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from "@react-navigation/stack";
import { PerfilProps } from "../../routes/tabNavigation";
import axios from "axios";
import styles from "./styles";
import { UserContext } from "../../components/useContext/userProfile";

const PerfilScreen: React.FC = ( {route}: PerfilProps) => {
  
  const  usuarioInfo  = useContext(UserContext);
  const [usuario, setUsuario] = useState(usuarioInfo.usuario?.usuario || "");
  const [email, setEmail] = useState(usuarioInfo.usuario?.email || "");
  const [username, setUsername] = useState(usuarioInfo.usuario?.username || "");
  const [senha, setSenha] = useState(usuarioInfo.usuario?.senha || "")
  const [novaSenha, setNovaSenha] = useState("");
  const navigation = useNavigation();
  

  
  


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
    if (novaSenha === null) {
      Alert.alert('Senha atualizada!');
      } else if (res.status === 200){
        Alert.alert('Digite uma nova senha')
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
    navigation.navigate("Criadores");
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
            placeholderTextColor="#FFCB11"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#FFCB11"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#FFCB11"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            placeholderTextColor="#FFCB11"
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
            placeholderTextColor="#FFCB11"
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
      <View style={styles.margem} />
    </LinearGradient>
  );
};

export default PerfilScreen;


