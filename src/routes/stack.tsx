import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import TabComponent from "./tabNavigation";
import Login from '../screens/login/index';

type StackNavigation = {
  Inicio : undefined;
  Login: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;
export type InicioProps = StackScreenProps<StackNavigation, "Inicio">;
export type LoginProps = StackScreenProps<StackNavigation, "Login">;

const { Navigator, Screen } = createStackNavigator<StackNavigation>();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Screen
        name="Inicio"
        component={TabComponent}
        options={{ title: "Inicio", headerShown: false }}
      />
    </Navigator>
  );
};

export default StackComponent;
