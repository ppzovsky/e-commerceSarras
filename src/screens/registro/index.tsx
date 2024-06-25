import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import axios from "axios";

const RegistroScreen: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const handleRegistro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert("As senhas não coincidem!");
      return;
    }

    try {
      const res = await axios.post('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/', {
        nome: nome,
        email: email,
        senha: senha,
      });

      if (res.status === 201) {
        Alert.alert("Usuário cadastrado com sucesso!");
        navigation.replace("Login");
      } else {
        Alert.alert("Falha ao cadastrar o usuário");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <LinearGradient colors={["#1c1c1c", "#000"]} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
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
