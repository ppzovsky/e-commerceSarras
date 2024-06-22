import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackComponent from './stack';
import Login from '../screens/login/index';

type DrawerNavigation = {
  Inicio: undefined;
  Login: undefined;
};

export type DrawerTypes = DrawerNavigation;

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>();

const DrawerComponent = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: false }}
      />
      <Screen
        name="Inicio"
        component={StackComponent}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default DrawerComponent;
