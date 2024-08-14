
// import { useNavigation, useRoute } from '@react-navigation/native'
// import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import React from 'react';
import Data from '../../Data/Data.js'
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Exemplo de estilo básico para o componente
const styles = StyleSheet.create({
  containerJogos: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  images: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgLoja: {
  },
  imgProduto: {
  }
});

export default function CardMovies({ id, nomeProduto, imgProduto, imgLoja }) {
  const navigation = useNavigation();
  const id = id;

  return (
    <TouchableOpacity
      style={styles.containerJogos}
      // onPress={() => navigation.navigate('Details', { nomeProduto, nota, imgProduto })}
    >
      <Image
        style={styles.images}
        source={{ uri: imgProduto }} // Usando URL da imagem do produto
      />
      <View>
        <Text style={styles.titulo}>{nomeProduto}</Text>
        <Text style={styles.imgProduto}>{imgProduto}</Text>
        <Text style={styles.imgLoja}>{imgLoja}</Text>
      </View>
    </TouchableOpacity>
  );
}
  