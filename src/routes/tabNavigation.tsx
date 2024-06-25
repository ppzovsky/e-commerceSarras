import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/index';
import CadastroProduto from '../screens/cadastro/index';
import Perfil from '../screens/perfil/index';
import Catalogo from '../screens/catalogo/index';
import Criadores from '../screens/criadores/index';
import Produto from '../screens/produto/index';
import Search from '../screens/search/index';
import NavBar from '../components/bottomNav/index';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

type TabNavigation = {
  Home: undefined;
  Perfil: undefined;
  Catalogo: undefined;
  Criadores: undefined;
  Produto: { id: number };
  Search: undefined;
  CadastroProduto: undefined;
};

export type TabTypes = NativeStackNavigationProp<TabNavigation>;
export type HomeProps = NativeStackScreenProps<TabNavigation, "Home">;
export type PerfilProps = NativeStackScreenProps<TabNavigation, "Perfil">;
export type CatalogoProps = NativeStackScreenProps<TabNavigation, "Catalogo">;
export type CriadoresProps = NativeStackScreenProps<TabNavigation, "Criadores">;
export type ProdutoProps = NativeStackScreenProps<TabNavigation, "Produto">;
export type SearchProps = NativeStackScreenProps<TabNavigation, "Search">;
export type CadastroProps = NativeStackScreenProps<TabNavigation, "CadastroProduto">;

const { Navigator, Screen } = createBottomTabNavigator<TabNavigation>();

const StackComponent = () => {
  return (
    <Navigator tabBar={(props) => <NavBar />}>
      <Screen 
        name="Home"
        component={Home}
        options={{ headerShown: false}}
      />
      <Screen
        name="CadastroProduto"
        component={CadastroProduto}
        options={{headerShown: false}}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{headerShown: false}}
      />
      <Screen
        name="Catalogo"
        component={Catalogo}
        options={{ headerShown: false}}
      />
      <Screen
        name="Criadores"
        component={Criadores}
        options={{ headerShown: false}}
      />
      <Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: false}}
      />
      <Screen
        name="Search"
        component={Search}
        options={{ headerShown: false}}
      />
    </Navigator>
  );
};

export default StackComponent;