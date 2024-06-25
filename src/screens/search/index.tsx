import { View } from "react-native";
import SearchBar from "../../components/searchBar";
import { getProdutos } from "../../services/crud";
import { useState, useEffect } from "react";
import ListaProduto from "../../components/flatlist";
import { SearchProps } from "../../routes/tabNavigation";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";

interface item{ 
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export default function Search({ route}: SearchProps) {
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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(produtos);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(produtos);
    } else { 
      const filtered = produtos.filter((item: item) =>
        item.nome.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  return (
    <View style={{ flex: 1, backgroundColor: '#151515' }}>
      <SearchBar searchQuery={searchQuery} setChangeText={setSearchQuery} focus={true}/>
      <ListaProduto listaprodutos={filteredProducts}/>
    </View>
  );
}