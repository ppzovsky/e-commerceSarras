import { View, FlatList, Alert } from 'react-native';
import CardProduto from '../cardProduto/index';
import {styles} from './styles';
import { deleteProduto } from '../../services/crud';

export default function ListaProduto({listaprodutos}:any){

    const deletarProduto = (id: any) => {
        const index = listaprodutos.findIndex((item:any) => item.id === id);
        if (index !== -1) {
            Alert.alert(
                "Confirmação",
                "Tem certeza que deseja deletar este produto?",
                [
                  {
                    text: "Não",
                    onPress: () => console.log("Ação cancelada"),
                    style: "cancel"
                  },
                  { 
                    text: "Sim", 
                    onPress: () => {listaprodutos.splice(index, 1);  deleteProduto(id);}  
                  }
                ],
                { cancelable: false }
              );
        }
    }

    const produtos = ({item}:any) => {
        return(
            <CardProduto
                item={item}
                deletarProduto={deletarProduto}
            />
        )
    }
    return(
        <>
        <FlatList
                style={styles.container}
                data={listaprodutos}
                renderItem={produtos}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                keyExtractor={item => item.id}
                extraData={listaprodutos}
        />
        <View style={{ height: 100 }}/>
        </>
    )
}
