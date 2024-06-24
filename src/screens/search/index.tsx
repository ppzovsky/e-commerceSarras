import { View } from "react-native";
import SearchBar from "../../components/searchBar";
import { getProdutos } from "../../services/crud/crud";
import { useState, useEffect } from "react";
import ListaProduto from "../../components/flatlist";
import { SearchProps } from "../../routes/tabNavigation";

interface item{ 
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export default function Search({ route}: SearchProps) {

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
      <SearchBar searchQuery={searchQuery} setChangeText={setSearchQuery} focus={true}/>
      <ListaProduto listaprodutos={filteredProducts}/>
    </View>
  );
}