import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ListaProduto from '../../components/flatlist/index';
import SearchBar from '../../components/searchBar/index'
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getProdutos } from '../../services/crud'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { deleteProduto } from '../../services/crud';


export default function Produtos() {

  const [produtos, setProdutos] = useState([]);

  const pegarProdutos = () => {
    getProdutos().then((data) => {
      setProdutos(data);
    });
  }

  useFocusEffect(
    React.useCallback(() => { 
      pegarProdutos();
    }, [])
  );
    const navigation = useNavigation();

    const handleDeleteProduto = (produtoId:any) => {
        deleteProduto(produtoId);
      };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Produtos</Text>
                </View>
            </View>
            <View style={{ position: 'relative', justifyContent: 'center', width: '100%', backgroundColor:'#151515', flex: 1}}>
                <SearchBar searchQuery="" setChangeText={() => {}} focus={false} />
                 <TouchableOpacity
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                    onPress={() => navigation.navigate("Search")}/>
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