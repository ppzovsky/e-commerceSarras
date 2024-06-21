import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ListaProduto from '../../components/flatlist/index';
import axios from 'axios';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Produtos() {
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
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <TouchableOpacity>
                <FontAwesome5 name="arrow-left" size={24} color="#E1E1E1" />
                </TouchableOpacity>
                <Text style={styles.titulo}>Produtos</Text>
            </View>
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
