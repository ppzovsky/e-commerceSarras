import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import axios from "axios";
import { cadastroUsuario } from "../../services/crud";

export type usuario ={
  usuario: string;
  username: string;
  email: string;
  senha: string;
}

const RegistroScreen: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();
  
  const handleRegistro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert("As senhas não coincidem!");
      return;
    }
    const user = {
      usuario,
      username,
      email,
      senha,
    }
    try {
      const res = await cadastroUsuario(user);
        navigation.replace("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro no cadastrar");
    }
  };

  return (
    <LinearGradient colors={["#1c1c1c", "#000"]} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            placeholder="usuario"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#888"
          />
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
            placeholderTextColor="#888"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegistroScreen;
