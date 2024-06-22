import { useState, useEffect } from 'react';
import axios from 'axios';

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
