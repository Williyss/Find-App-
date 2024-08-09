import React from 'react';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Cadastro2(){

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
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder="12345-678"
            keyboardType="numeric"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.input}
            placeholder="Logradouro"
            keyboardType="default"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            placeholder="Bairro"
            keyboardType="default"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Cidade</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            autoComplete="name"
            required
          />
          
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Não é membro?{' '}
          <TouchableOpacity>
            <Text style={styles.footerLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
    );
}