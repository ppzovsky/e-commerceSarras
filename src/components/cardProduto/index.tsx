import { View, Text, Image, TouchableOpacity, Alert, Modal, Button } from "react-native";
import {styles} from "./styles";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/tabNavigation";

export default function CardProduto({item, deletarProduto}: any){

    const navigation = useNavigation<StackTypes>();
    const [modalVisible, setModalVisible] = useState(false);

    function opcoesProduto() {
        setModalVisible(true);
    }
    
    const deletar = (id: any) => {
        deletarProduto(id);
        setModalVisible(false);
    }

    function abreProduto() {
        navigation.navigate("Produto", {id: item?.id});
    }
    
    return (
        <>
        <TouchableOpacity onLongPress={opcoesProduto} onPress={abreProduto}>
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
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonClose}>
                <FontAwesome name="close" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> deletar(item.id)} style={styles.button}>
                <Text style={styles.textButton}>Excluir Produto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
                <Text style={styles.textButton}>Editar Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </>
    )
}