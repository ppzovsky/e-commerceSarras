import { View, Text, Image, TouchableOpacity } from "react-native";
import {styles} from "./styles";

export default function CardProduto({item}: any){

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: `${item.foto}`}}
                />
                <View style={styles.texto}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                    <Text style={styles.preco}>R${item.preco}</Text>
                </View>
            </View> 
        </TouchableOpacity>
    )
}