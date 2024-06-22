import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ListaProduto from '../../components/flatlist/index';
import SearchBar from '../../components/searchBar/index'
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { getProdutos } from '../../components/crud/crud'
export default function Produtos() {

    const { produtos } = getProdutos();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Produtos</Text>
            </View>
            {/* <SearchBar /> */}
            <View style={styles.containerProdutos}>
                {produtos.length > 0 ? (
                    <ListaProduto listaprodutos={produtos}/>
                ) : (
                    <Text>Carregando produtos...</Text>
                )}
            </View>
        </View>
    );
}
