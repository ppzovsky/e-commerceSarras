import React, { useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { ProdutoProps, TabTypes } from '../../routes/tabNavigation';
import { deleteProduto, atualizarProduto, getProdutos } from '../../services/crud';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export type produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  codigo: string;
  qtdEstoque: string;
  foto: string;
};

export default function Produto({ route }: ProdutoProps) {
  const props = route.params;
  const navigation = useNavigation<TabTypes>();


  const [produto, setProduto] = React.useState<produto | null>(null);
  const [produtos, setProdutos] = React.useState<produto[]>([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editProduto, setEditProduto] = React.useState<produto | null>(null);

  const listaProdutos = async () => {
    try {
      const data = await getProdutos();
      setProdutos(data);
    } catch (error) {
      console.log('Erro ao buscar produtos', error);
    }
  };

  const defineProduto = async () => {
    try {
      const produtoEncontrado : any = produtos.find((prod: produto) => prod.id === props.id);
      setProduto(produtoEncontrado);
      setEditProduto(produtoEncontrado);
    } catch (error) {
      console.log('Erro ao definir produto', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      listaProdutos();
    }, [])
  );

  useEffect(() => {
    if (produtos.length > 0) {
      defineProduto();
    }
  }, [produtos, props.id]);

  const deletarProduto = (id: number) => {
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
          onPress: async () => {
            try {
              await deleteProduto(id);
              listaProdutos();
              navigation.navigate('Catalogo');
            } catch (error) {
              console.log('Erro ao deletar produto', error);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  const atualizaProduto = async () => {
    if (editProduto) {
      try {
        await atualizarProduto(editProduto.id, editProduto);
        setProduto(editProduto);
        setIsEditing(false);
      } catch (error) {
        console.log('Erro ao atualizar produto', error);
      }
    }
  };

  const handleEditChange = (field: keyof produto, value: string) => {
    if (editProduto) {
      setEditProduto({ ...editProduto, [field]: value });
    }
  };

  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <FontAwesome
          key={i}
          name={i <= avaliacao ? 'star' : 'star-o'}
          size={15}
          color="#ffcb11"
        />
      );
    }
    return estrelas;
  };

  if (!produto) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffcb11" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editProduto?.nome}
              onChangeText={(text) => handleEditChange('nome', text)}
            />
          ) : (
            <Text style={styles.nome}>{produto?.nome}</Text>
          )}
          <View style={styles.buttonContainer}>
            {isEditing ? (
              <TouchableOpacity style={styles.editButton} onPress={atualizaProduto}>
                <FontAwesome name="save" size={18} color="#ffcb11" />
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                <FontAwesome name="pencil" size={18} color="#ffcb11" />
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.deleteButton} onPress={() => deletarProduto(produto?.id)}>
              <FontAwesome name="trash-o" size={18} color="#ffcb11" />
              <Text style={styles.buttonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.avaliacaoContainer}>
          <View style={styles.starsContainer}>
            {renderEstrelas(4.5)}
          </View>
        </View>
        
        <View style={styles.imageContainer}>
          <Image source={{ uri: produto?.foto }} style={styles.image} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editProduto?.descricao}
              onChangeText={(text) => handleEditChange('descricao', text)}
            />
          ) : (
            <Text style={styles.descricao}>{produto?.descricao}</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preço</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editProduto?.preco}
              keyboardType="numeric"
              onChangeText={(text) => handleEditChange('preco', text)}
            />
          ) : (
            <View style={styles.precoContainer}>
              <Text style={styles.preco}>R${produto?.preco}</Text>
              <Text style={styles.codigo}>Cód. {produto?.codigo}</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantidade em Estoque</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={editProduto?.qtdEstoque}
              keyboardType="numeric"
              onChangeText={(text) => handleEditChange('qtdEstoque', text)}
            />
          ) : (
            <Text style={styles.qtdEstoque}>{produto?.qtdEstoque}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
