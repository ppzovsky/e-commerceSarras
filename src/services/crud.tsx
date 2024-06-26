import { Alert } from 'react-native';
import axios, { AxiosError } from 'axios';

export async function getProdutos() {
      try {
        const response = await axios.get('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos');
        return response.data;
      } catch (error) {
        alert('Erro ao carregar os produtos');
        console.log(error);
      }
    }


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

export async function deleteProduto(codigo: number) {
  
  try{
    const response = await axios.delete(`https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos/${codigo}`);
    console.log('Produto deletado:', response.data);
    Alert.alert('Produto deletado com sucesso!')
  }
  catch (error) {
    console.error('Erro ao deletar produto:', error);
    Alert.alert('Erro', 'Erro ao deletar produto. Por favor, tente novamente.');
  }
}

export async function buscaPorId(id: number) {
  try{
    const response = await axios.get(`https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos/${id}`);
    const produto = response.data;
    return produto;
  }
  catch (error) {
    console.error('Erro ao acessar produto:', error);
  }
}

export async function atualizarProduto(id: number, novoProduto: any) {
  try{
    const response = await axios.put(`https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Produtos/${id}`, novoProduto);
    Alert.alert('Produto atualizado com sucesso!')
  }
  catch (error) {
    console.error('Erro ao atualizar produto:', error);
  }
}

export async function cadastroUsuario(usuario: any) { 
  try {
    const res = await axios.post('https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Usuarios', usuario);
    console.log('Usuario cadastrado:', res.data);
    Alert.alert('Usuario cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuario:', error);
    Alert.alert('Erro', 'Erro ao cadastrar usuario. Por favor, tente novamente.');
  }
}