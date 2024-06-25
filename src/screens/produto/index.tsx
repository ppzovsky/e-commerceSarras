import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { ProdutoProps } from '../../routes/tabNavigation';
import { buscaPorId, deleteProduto } from '../../services/crud';
import { useFocusEffect } from '@react-navigation/native';

export type produto = {
  nome: string;
  descricao: string;
  preco: string;
  codigo: string;
  qtdEstoque: string;
  foto: string;
};

export default function Produto({route} : ProdutoProps) {

  const props = route.params

  const [produto, setProduto] = React.useState<produto| any>();

  const defineProduto = async () => {
    try{
      const data = await buscaPorId(props.id);
      setProduto(data);
    } 
    catch(error){
      console.log('Erro ao buscar produto');
    }
  };

  useFocusEffect(() => {
    defineProduto();
  });

  const deletarProduto = (id: any) => {
        Alert.alert(
            "Confirmação",
            "Tem certeza que deseja deletar este produto?",
            [
              {
                text: "Não",
                onPress: () => console.log("Ação cancelada"),
                style: "cancel"
              },
              { 
                text: "Sim", 
                onPress: () => {deleteProduto(id);}  
              }
            ],
            { cancelable: false }
          );
  }


  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <FontAwesome
          key={i}
          name={i <= avaliacao ? 'star' : 'star-o'}
          size={15}
          color="#FFCB11"
        />
      );
    }
    return estrelas;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.nome}>{produto?.nome}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesome name="pencil" size={18} color="#FFCB11" />
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deletarProduto(produto?.id)}>
              <FontAwesome name="trash-o" size={18} color="#FFCB11" />
              <Text style={styles.buttonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.avaliacaoContainer}>
          <View style={styles.starsContainer}>
            {renderEstrelas(4.5)}
          </View>
        </View>
        <Image source={{ uri: produto?.foto }} style={styles.image} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descricao}>{produto?.descricao}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preço</Text>
          <View style={styles.precoContainer}>
            <Text style={styles.preco}>{produto?.preco}</Text>
            <Text style={styles.codigo}>Cód. {produto?.codigo}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantidade em Estoque</Text>
          <Text style={styles.qtdEstoque}>{produto?.qtdEstoque}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

