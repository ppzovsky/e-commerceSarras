import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { buscaPorCordigo, cadastrarProduto } from '../../services/crud/crud';
import styles from './styles';

interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  codigo: string;
  qtdEstoque: number;
  foto: string | null;
}

export default function Cadastro() {

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
      quality: 1,
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

    const codigoJaExiste = await buscaPorCordigo({codigo});
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

    const response = await cadastrarProduto(novoProduto);
    setNome('');
    setDescricao('');
    setPreco('');
    setCodigo('');
    setQtdEstoque('');
    setFoto(null);
    setFotoBase64(null);
    setCodigoInvalido(false);
    setIsLoading(false);
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
