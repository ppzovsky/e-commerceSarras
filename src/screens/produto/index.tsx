import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export default function Produto() {
  const produto = {
    nome: 'Nome do Produto',
    descricao: 'Descrição do produto.',
    preco: 'R$ 99,99',
    codigo: '12345',
    qtdEstoque: 20,
    foto: 'https://i.ytimg.com/vi/U9aYhsEUMQY/mqdefault.jpg',
    avaliacao: 4,
  };

  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <Icon
          key={i}
          name={i <= avaliacao ? 'star' : 'star-o'}
          size={15}
          color="white"
        />
      );
    }
    return estrelas;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="pencil" size={18} color="#fff" />
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Icon name="trash-o" size={18} color="#fff" />
              <Text style={styles.buttonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.avaliacaoContainer}>
          <View style={styles.starsContainer}>
            {renderEstrelas(produto.avaliacao)}
          </View>
          <Text style={styles.avaliacaoNumero}>{produto.avaliacao.toFixed(1)}</Text>
        </View>
        <Image source={{ uri: produto.foto }} style={styles.image} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preço</Text>
          <View style={styles.precoContainer}>
            <Text style={styles.preco}>{produto.preco}</Text>
            <Text style={styles.codigo}>Cód. {produto.codigo}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantidade em Estoque</Text>
          <Text style={styles.qtdEstoque}>{produto.qtdEstoque}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

