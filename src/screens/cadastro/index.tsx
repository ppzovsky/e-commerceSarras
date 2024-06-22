import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import axios, { AxiosError } from 'axios';
import styles from './styles';

interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  codigo: string;
  qtdEstoque: number;
  foto: string | null;
}

const CadastroProduto: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [codigo, setCodigo] = useState<string>('');
  const [qtdEstoque, setQtdEstoque] = useState<string>('');
  const [foto, setFoto] = useState<string | null>(null);
  const [fotoBase64, setFotoBase64] = useState<string | null>(null);
  const [codigoInvalido, setCodigoInvalido] = useState<boolean>(false);
  const [verificandoCodigo, setVerificandoCodigo] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 400 } }],
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
      );

      setFoto(manipResult.uri);
      const base64 = await FileSystem.readAsStringAsync(manipResult.uri, { encoding: FileSystem.EncodingType.Base64 });
      setFotoBase64(base64);
    }
  };

  const verificarCodigoExistente = async (): Promise<boolean> => {
    try {
      const response = await axios.get(`https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos?codigo=${codigo}`);
      return response.data.length > 0;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 404) {
          return false;
        } else {
          console.error('Erro ao verificar código:', axiosError);
          Alert.alert('Erro', 'Erro ao verificar código. Por favor, tente novamente.');
        }
      } else {
        console.error('Erro ao verificar código:', error);
        Alert.alert('Erro', 'Erro ao verificar código. Por favor, tente novamente.');
      }
      return true;
    }
  };

  const validarCampos = (): boolean => {
    if (!nome || !descricao || !preco || !codigo || !qtdEstoque) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return false;
    }
    return true;
  };

  const salvarProduto = async () => {
    if (!validarCampos()) {
      return;
    }

    setVerificandoCodigo(true);
    setIsLoading(true);

    const codigoJaExiste = await verificarCodigoExistente();
    setVerificandoCodigo(false);

    if (codigoJaExiste) {
      setCodigoInvalido(true);
      Alert.alert('Erro', 'Já existe um produto cadastrado com este código.');
      setIsLoading(false);
      return;
    }

    const novoProduto: Produto = {
      nome,
      descricao,
      preco: parseFloat(preco),
      codigo,
      qtdEstoque: parseInt(qtdEstoque),
      foto: fotoBase64 ? `data:image/jpeg;base64,${fotoBase64}` : null,
    };

    try {
      const response = await axios.post('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos', novoProduto);
      console.log('Produto cadastrado:', response.data);
      Alert.alert('Produto cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setPreco('');
      setCodigo('');
      setQtdEstoque('');
      setFoto(null);
      setFotoBase64(null);
      setCodigoInvalido(false);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      Alert.alert('Erro', 'Erro ao cadastrar produto. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {foto ? <Image source={{ uri: foto }} style={styles.image} /> : <Text style={styles.imagePickerText}>Escolha uma imagem</Text>}
        </TouchableOpacity>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome do Produto</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descrição do Produto</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
              multiline={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Preço Unitário</Text>
            <TextInput
              style={styles.input}
              value={preco}
              keyboardType="numeric"
              onChangeText={setPreco}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Código do Produto</Text>
            <TextInput
              style={[styles.input, codigoInvalido && styles.inputError]}
              value={codigo}
              onChangeText={(text) => { setCodigo(text); setCodigoInvalido(false); }}
            />
            {verificandoCodigo && (
              <Text style={styles.verificarText}>Verificando código...</Text>
            )}
            {codigoInvalido && (
              <Text style={styles.errorText}>Código do produto já existe!</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantidade em estoque</Text>
            <TextInput
              style={styles.input}
              value={qtdEstoque}
              keyboardType="numeric"
              onChangeText={setQtdEstoque}
            />
          </View>
          <TouchableOpacity style={styles.cadastro} onPress={salvarProduto}>
            {isLoading ? (
              <ActivityIndicator size="small" color="skyblue" />
            ) : (
              <Text style={styles.cadastroText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CadastroProduto;
