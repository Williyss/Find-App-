import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importa ícones da biblioteca
import DATA from '../../Data/Data'; 
import Bottomnav from '../../routes/bootomnavbar';

export default function Home() {
  return (
    <>
    <View style={styles.iconButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}> // Coloquei "cadastro" só para testar se funcionava
          <Icon name="plus" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>

          {DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerJogos}
              onPress={() => alert(`${item.nomeProduto} selected`)} // Adicionei um alerta para testar se o item é selecionável
            >
              <Image
                style={styles.images}
                source={{ uri: item.imgProduto }}
              />
              <View>
                <Text style={styles.titulo}>{item.nomeProduto}</Text>
                <Text style={styles.imgProduto}>{item.imgProduto}</Text>
                <Text style={styles.imgLoja}>{item.imgLoja}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

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
    fontSize: 14,
    color: '#555',
  },
  imgProduto: {
    fontSize: 14,
    color: '#999',
  }
});
