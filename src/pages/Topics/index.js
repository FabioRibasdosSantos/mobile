import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Topics() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Nome do Aluno</Text>
      </Animatable.View>

      <View style={styles.containerForm}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendario')}>
          <Image style={styles.gif} source={require('../../assets/calendario.gif')} />
          <Text style={styles.buttonText}>Calendario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotasEFrequencia')}>
          <Image style={styles.gif} source={require('../../assets/grafico-de-linha.gif')} />
          <Text style={styles.buttonText}>Notas e Frequencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Laboratorio')}>
          <Image style={styles.gif} source={require('../../assets/microscopio.gif')} />
          <Text style={styles.buttonText}>Reserva de Laboratório</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato')}>
          <Image style={styles.gif} source={require('../../assets/apoio-suporte.gif')} />
          <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}
                >
                    <Text style={styles.buttonText}>Notas e Frequencia</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}
                >
                    <Text style={styles.buttonText}>Notas e Frequencia</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}
                >
                    <Text style={styles.buttonText}>Notas e Frequencia</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}
                >
                    <Text style={styles.buttonText}>Notas e Frequencia</Text>
                </TouchableOpacity>

                </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002659',
  },
  containerHeader: {
    marginTop: '20%',
    marginBottom: '20%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  containerForm: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#002659',
    width: 80,
    height: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  gif: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});