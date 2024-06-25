import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não foi possível abrir o link: ${url}`);
  }
};

export default function Criadores() {
  return (
    <View style={styles.container}>
      <View style={styles.contato}>
        <View style={styles.perfil}>
          <Image source={require('../../../assets/bianco.png')} style={styles.foto} />
        </View>
        <View style={styles.quad}>
          <View style={styles.texto}>
            <Text style={styles.nome}>
              Bianco Lorencini
            </Text>
          </View>
          <View style={styles.texto}>
            <TouchableOpacity onPress={() => openLink('https://github.com/BiancoLorencini')}>
              <AntDesign name="github" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/bianco-lorencini/')}>
              <AntDesign name="linkedin-square" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contato}>
        <View style={styles.quad}>
          <View style={styles.texto}>
            <Text style={styles.nome}>
              César Guerra Peixe
            </Text>
          </View>
          <View style={styles.texto}>
            <TouchableOpacity onPress={() => openLink('https://github.com/CesarGuerraPeixe')}>
              <AntDesign name="github" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/cesarguerrapeixe')}>
              <AntDesign name="linkedin-square" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.perfil}>
          <Image source={require('../../../assets/cesar.jpg')} style={styles.foto} />
        </View>
      </View>
      <View style={styles.contato}>
        <View style={styles.perfil}>
          <Image source={require('../../../assets/joao.jpeg')} style={styles.foto} />
        </View>
        <View style={styles.quad}>
          <View style={styles.texto}>
            <Text style={styles.nome}>
              João Pedro Brito
            </Text>
          </View>
          <View style={styles.texto}>
            <TouchableOpacity onPress={() => openLink('https://github.com/ppzovsky')}>
              <AntDesign name="github" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/jo%C3%A3o-pedro-soares-164964236/')}>
              <AntDesign name="linkedin-square" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contato}>
        <View style={styles.quad}>
          <View style={styles.texto}>
            <Text style={styles.nome}>
              Kayque Lucas Silva
            </Text>
          </View>
          <View style={styles.texto}>
            <TouchableOpacity onPress={() => openLink('https://github.com/KayqueLucas')}>
              <AntDesign name="github" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/kayque-lucas-dev/')}>
              <AntDesign name="linkedin-square" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.perfil}>
          <Image source={require('../../../assets/kayque.jpeg')} style={styles.foto} />
        </View>
      </View>
      <View style={styles.contato}>
        <View style={styles.perfil}>
          <Image source={require('../../../assets/victor.png')} style={styles.foto} />
        </View>
        <View style={styles.quad}>
          <View style={styles.texto}>
            <Text style={styles.nome}>
              Victor Siqueira
            </Text>
          </View>
          <View style={styles.texto}>
            <TouchableOpacity onPress={() => openLink('https://github.com/VictorGSiqueira')}>
              <AntDesign name="github" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/victor-g-siqueira/')}>
              <AntDesign name="linkedin-square" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.margem} />
    </View>
  );
}
