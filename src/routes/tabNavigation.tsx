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

type StackNavigation = {
  Home: {id: number};
  Perfil: { id: number};
  Catalogo: { info: string};
  Criadores: undefined;
  Produto: { id: number };
  Search: { info: string };
  CadastroProduto: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackScreenProps<StackNavigation, "Home">;
export type PerfilProps = NativeStackScreenProps<StackNavigation, "Perfil">;
export type CatalogoProps = NativeStackScreenProps<StackNavigation, "Catalogo">;
export type CriadoresProps = NativeStackScreenProps<StackNavigation, "Criadores">;
export type ProdutoProps = NativeStackScreenProps<StackNavigation, "Produto">;
export type SearchProps = NativeStackScreenProps<StackNavigation, "Search">;
export type CadastroProps = NativeStackScreenProps<StackNavigation, "CadastroProduto">;

const { Navigator, Screen } = createBottomTabNavigator<StackNavigation>();

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