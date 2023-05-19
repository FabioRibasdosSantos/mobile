import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Aluno() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Nome do Aluno</Text>
      </Animatable.View>

      <View style={styles.containerForm}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendario')}>         
                    <View>
                    <Icon name="calendar" size={30} color="#fff"/>
                    </View>
          <Text style={styles.buttonText}>Calendario</Text>
          
          </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotasEFrequencia')}>
            <View>
                    <Icon name="qrcode" size={30} color="#fff"/>
                    </View>
              <Text style={styles.buttonText}>Notas </Text>
            </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Laboratorio')}>
                <View>
                    <Icon name="folder-open-o" size={30} color="#fff"/>
                    </View>
                  <Text style={styles.buttonText}>Laboratório</Text>
                </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato')}>
                  <View>
                    <Icon name="phone" size={30} color="#fff"/>
                    </View>
                    <Text style={styles.buttonText}>Contato</Text>
                  </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}
                >
                  <View>
                    <Icon name="line-chart" size={30} color="#fff"/>
                    </View>
                    <Text style={styles.buttonText}>Notas e Frequencia</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('NotasEFrequencia')}>
                  <View>
                    <Icon name="check" size={40} color="#fff" alignItens='center'justifyContent='center' />
                  </View>
                    {/* <Text style={styles.buttonText}></Text> */}
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
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginStart:5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
 
});