import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios, { AxiosError } from 'axios';

export const getProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProdutos() {
      try {
        const response = await axios.get('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos');
        setProdutos(response.data);
      } catch (error) {
        alert('Erro ao carregar os produtos');
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getProdutos();
  }, []);

  return { produtos, loading, error };
};

export const buscaPorCordigo = async ({codigo}: {codigo: string}): Promise<boolean> => {
  try {
    const response = await axios.get(`https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos?codigo=${codigo}`);
    return response.data.length > 0;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        return false;
      } else {
        console.error('Erro ao verificar código:', axiosError);
        Alert.alert('Erro', 'Erro ao verificar código. Por favor, tente novamente.');
      }
    } else {
      console.error('Erro ao verificar código:', error);
      Alert.alert('Erro', 'Erro ao verificar código. Por favor, tente novamente.');
    }
    return true;
  }
};
export async function cadastrarProduto(novoProduto: any) {
  try {
    const response = await axios.post('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos', novoProduto);
    console.log('Produto cadastrado:', response.data);
    Alert.alert('Produto cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    Alert.alert('Erro', 'Erro ao cadastrar produto. Por favor, tente novamente.');
  }
}
