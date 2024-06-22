import { View, FlatList, Text } from 'react-native';
import CardProduto from '../cardProduto/index';
import {styles} from './styles';

export default function ListaProduto({listaprodutos}:any){
    
    const produtos = ({item}:any) => {
        return(
            <CardProduto
                item={item}
            />
        )
    }
    return(
        <FlatList
                data={listaprodutos}
                renderItem={produtos}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                keyExtractor={item => item.id}
        />
    )
}