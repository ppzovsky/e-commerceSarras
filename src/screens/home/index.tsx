import React, { useState, useContext } from 'react';
import { getProdutos, deleteProduto } from '../../services/crud';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import SearchBar from '../../components/searchBar/index'
import { HomeProps, TabTypes } from '../../routes/tabNavigation';
import { UserContext } from '../../contexts/userProfile';
import ListaProduto from '../../components/flatlist';

const Home = ({ route }: HomeProps) => {

  const navigation = useNavigation<TabTypes>();
  const { usuario } = useContext(UserContext);
  const [produtos, setProdutos] = useState([]);
  const [produtosBaixoestoque, setProdutosBaixoestoque] = useState([])

  const pegarProdutos = () => {
    getProdutos().then((data) => {
      setProdutos(data);
      const ordenaProdutos = data.sort((a: any, b: any) => a.qtdEstoque - b.qtdEstoque);
      setProdutosBaixoestoque(ordenaProdutos.slice(0, 10))
    });
  }

  useFocusEffect(
    React.useCallback(() => { 
      pegarProdutos();
    }, [])
  );


  const deletarProduto = (id: any) => {
    const index = produtos.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      try{
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
              onPress: () => {produtos.splice(index, 1);  deleteProduto(id);}  
            }
          ],
          { cancelable: false }
        );
        }catch(err){
        }
    }
  }

  return (
    <>
    <View style={styles.mainHomeContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.welcomeText}>Olá</Text>
        <Text style={[styles.welcomeText, styles.boldUser]}>{usuario?.username}</Text>
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
      </View>
      <View style={styles.list}>
        <Text style={styles.textOperation}>Produtos com estoque baixo</Text>
        {produtos.length > 0 ? (
                    <ListaProduto listaprodutos={produtosBaixoestoque}/>
                ) : (
                    <ActivityIndicator size="large" color="#ffcb11" />
                )}
      </View>
    </View>
    </>
  )
}

export default Home