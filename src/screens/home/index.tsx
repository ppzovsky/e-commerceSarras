import React, { useState, useEffect } from 'react';
import { getProdutos } from '../../services/crud/crud';
import ListaProduto from '../../components/flatlist';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Keyboard } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/searchBar/index'
import { HomeProps } from '../../routes/tabNavigation';
import CardProduto from '../../components/cardProduto';

const Home = ({ route }: HomeProps) => {

  const navigation = useNavigation();
  
  const User = 'Usuario'

  const { produtos } = getProdutos();
  const ordenaProdutos = produtos.sort((a, b) => a.qtdEstoque - b.qtdEstoque);
  const produtosBaixoestoque = ordenaProdutos.slice(0, 10);


  return (
    <>
    <ScrollView contentContainerStyle={styles.mainHomeContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.welcomeText}>Olá</Text>
        <Text style={[styles.welcomeText, styles.boldUser]}>{User}</Text>
      </View>
      <View style={{ position: 'relative', justifyContent: 'center', width: '100%'}}>
      <SearchBar searchQuery="" setChangeText={() => {}} focus={false} />
      <TouchableOpacity
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        onPress={() => navigation.navigate("Search")}
      />
    </View>
      <Text style={styles.textOperation}>Qual a operação desejada?</Text>
      <View style={styles.containerCrudButtons}>
        <TouchableOpacity style={styles.crudButtons} onPress={() => navigation.navigate("CadastroProduto")}>
          <Text style={styles.textCrudButton}>Cadastrar produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons} onPress={() => navigation.navigate("Catalogo")}>
          <Text style={styles.textCrudButton}>Ver Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons} onPress={() => navigation.navigate("Search")}>
          <Text style={styles.textCrudButton}>Editar produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons} onPress={() => navigation.navigate("Search")}>
          <Text style={styles.textCrudButton}>Remover produto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <Text style={styles.textOperation}>Produtos com estoque baixo</Text>
        {produtosBaixoestoque.map((item) => (
          <CardProduto item={item}/>
      ))}
        <View style={{height: 100, backgroundColor:'#151515'}}></View>
      </View>
    </ScrollView>
    </>
  )
}

export default Home