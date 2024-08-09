import React from 'react';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Cadastro(){

    return(
<View style={{ flex: 1, backgroundColor: '#050521' }}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          alt="Sua Empresa"
        />
        <Text style={styles.title}>CADASTRE-SE</Text>
        <Text style={styles.subtitle}>INSIRA OS DADOS</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            keyboardType="name"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            keyboardType="numeric"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="34/12/2000"
            keyboardType="default"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Telefone</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="+55 (11)98765-4321"
            autoComplete="tel-area-code"
            required
          />
          
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro2')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>

      </View>
    </View>
    );
}