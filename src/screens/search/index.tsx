import { View } from "react-native";
import SearchBar from "../../components/searchBar";
import { getProdutos } from "../../components/crud/crud";
import { useState, useEffect } from "react";
import ListaProduto from "../../components/flatlist";

export default function Search() {

const { produtos } = getProdutos();
const [searchQuery, setSearchQuery] = useState('');
const [filteredProducts, setFilteredProducts] = useState(produtos);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(produtos);
    } else { 
      const filtered = produtos.filter(item =>
        item.nome.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  return (
    <View>
      <SearchBar searchQuery={searchQuery} setChangeText={setSearchQuery}/>
      <ListaProduto listaprodutos={filteredProducts}/>
    </View>
  );
}