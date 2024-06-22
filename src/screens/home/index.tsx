import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Keyboard } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import NavBar from '../../components/bottomNav/index'
import SearchBar from '../../components/searchBar/index'
import ListaProduto from '../../components/flatlist/index'


const index = () => {
  const User = 'Usuario'
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
        try {
            const response = await axios.get('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos');
            setProdutos(response.data);
        } catch (error) {
            console.log(error);
            alert('Erro ao carregar os produtos');
        }
    }

    getProdutos();
}, []);

  return (
    <>
    <View style={styles.mainHomeContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.welcomeText}>Olá</Text>
        <Text style={[styles.welcomeText, styles.boldUser]}>{User}</Text>
      </View>

      <SearchBar />
          
      <Text style={styles.textOperation}>Qual a operação desejada?</Text>
      <View style={styles.containerCrudButtons}>
        <TouchableOpacity style={styles.crudButtons}>
          <Text style={styles.textCrudButton}>Cadastre um novo produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons}>
          <Text style={styles.textCrudButton}>Ver Produtos Cadastrados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons}>
          <Text style={styles.textCrudButton}>Edite um produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crudButtons}>
          <Text style={styles.textCrudButton}>Remova um produto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.textProductInfo}>Produtos com baixo estoque:</Text>
        <View style={styles.mainProductContainer}>
        <View style={styles.containerProdutos}>
                {produtos.length > 0 ? (
                    <ListaProduto listaprodutos={produtos}/>
                ) : (
                    <Text>Carregando produtos...</Text>
                )}
            </View>
        </View>
        </View>
    </View>
    <NavBar />
    </>
  )
}

export default index
