import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { StackTypes } from "../../routes/stack";

export default function SplashScreen(){

    const navigation = useNavigation<StackTypes>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#151515' }}>
            <LottieView 
                source={require('../../../assets/splash.json')}
                style={{ width: '100%', height: '100%'}}
                autoPlay
                speed={0.5}
                loop={false}
                onAnimationFinish={ () => {
                    navigation.navigate('Login');
                }}
            />
        </View>
    )
}