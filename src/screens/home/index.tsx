import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Keyboard } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import NavBar from '../../components/bottomNav/index'
import SearchBar from '../../components/searchBar/index'

const index = () => {
  const User = 'Usuario'

  return (
    <>
    <ScrollView contentContainerStyle={styles.mainHomeContainer}>
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
          <View style={styles.productContainer}>
            <Image
            source={require('../../../assets/orphHeadPhone.jpg')}
            style={styles.imgProduct}
            resizeMode="contain"
            />
            <View>
              <Text style={styles.innerTextProduct}>
                Snopy Headphone
              </Text>
              <Text style={[styles.innerTextProduct, styles.fontChange]}>
                Snopy SN- BT96 Pretty Back Bluetooth Headphone
              </Text>
              <Text style={styles.innerTextProduct}>
                R$98,76
              </Text>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
            source={require('../../../assets/orphHeadPhone.jpg')}
            style={styles.imgProduct}
            resizeMode="contain"
            />
            <View>
              <Text style={styles.innerTextProduct}>
                Snopy Headphone
              </Text>
              <Text style={[styles.innerTextProduct, styles.fontChange]}>
                Snopy SN- BT96 Pretty Back Bluetooth Headphone
              </Text>
              <Text style={styles.innerTextProduct}>
                R$98,76
              </Text>
            </View>
          </View>
                </View>
        </View>
    </ScrollView>
    <NavBar />
    </>
  )
}

export default index
