import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import TabComponent from "./tabNavigation";
import Login from '../screens/login/index';
import Cadastro from "../screens/registro/index";
import SplashScreen from "../screens/splash/splash";

type StackNavigation = {
  Inicio : undefined;
  Login: undefined;
  Cadastro: undefined;
  Splash: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;
export type InicioProps = StackScreenProps<StackNavigation, "Inicio">;
export type LoginProps = StackScreenProps<StackNavigation, "Login">;
export type CadastroProps = StackScreenProps<StackNavigation, "Cadastro">;
export type SplashProps = StackScreenProps<StackNavigation, "Splash">;


const { Navigator, Screen } = createStackNavigator<StackNavigation>();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Login"
        component={Login}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: "Cadastro" }}
      />
      <Screen
        name="Inicio"
        component={TabComponent}
        options={{ title: "Inicio", headerShown: false, gestureEnabled: false }}
      />
    </Navigator>
  );
};

export default StackComponent;
