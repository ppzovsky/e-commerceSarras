import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Perfil from '../screens/perfil/index';
import Catalogo from '../screens/catalogo/index';
import Criadores from '../screens/criadores/index';
import Produto from '../screens/produto/index';
import Search from '../screens/search/index';
import NavBar from '../components/bottomNav/index';

const { Navigator, Screen } = createStackNavigator();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{ title: "Página Inicial", headerRight: () => <NavBar /> }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Meu Perfil", headerRight: () => <NavBar /> }}
      />
      <Screen
        name="Catalogo"
        component={Catalogo}
        options={{ title: "Catálogo", headerRight: () => <NavBar /> }}
      />
      <Screen
        name="Criadores"
        component={Criadores}
        options={{ title: "Criadores", headerRight: () => <NavBar /> }}
      />
      <Screen
        name="Produto"
        component={Produto}
        options={{ title: "Produto", headerRight: () => <NavBar /> }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{ title: "Buscar", headerRight: () => <NavBar /> }}
      />
    </Navigator>
  );
};

export default StackComponent;