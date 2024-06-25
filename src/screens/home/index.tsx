import React, { useState } from 'react';
import { getProdutos, deleteProduto } from '../../services/crud';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import SearchBar from '../../components/searchBar/index'
import { HomeProps } from '../../routes/tabNavigation';
import CardProduto from '../../components/cardProduto';
import { UserContext } from '../../components/useContext/userProfile';
import { useContext } from 'react';

const Home = ({ route }: HomeProps) => {

  const navigation = useNavigation();
  const { usuario } = useContext(UserContext);
  const [produtos, setProdutos] = useState([]);
  const [produtosBaixoestoque, setProdutosBaixoestoque] = useState([])

  const pegarProdutos = () => {
    getProdutos().then((data) => {
      setProdutos(data);
      const ordenaProdutos = data.sort((a, b) => a.qtdEstoque - b.qtdEstoque);
      setProdutosBaixoestoque(ordenaProdutos.slice(0, 10))
    });
  }

  useFocusEffect(
    React.useCallback(() => { 
      pegarProdutos();
    }, [])
  );


  const deletarProduto = (id: any) => {
    const index = produtos.findIndex((item) => item.id === id);
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
    <ScrollView contentContainerStyle={styles.mainHomeContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.welcomeText}>Olá</Text>
        <Text style={[styles.welcomeText, styles.boldUser]}>{usuario}</Text>
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
        {/* <ListaProduto produtos={produtosBaixoestoque}/> */}
        {produtosBaixoestoque.length>0 && produtosBaixoestoque.map((item) => (
          <CardProduto item={item} deletarProduto={deletarProduto} key= {item.id}/>
      ))}
        <View style={{height: 100, backgroundColor:'#151515'}}></View>
      </View>
    </ScrollView>
    </>
  )
}

export default Home