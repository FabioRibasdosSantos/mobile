import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Professor() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Nome do Professor</Text>
      </Animatable.View>

      <View style={styles.containerForm}>

      <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendario')}>                   
           <Icon name="user" size={30} color="#fff"/>             
          </TouchableOpacity>
          <Text style={styles.buttonText}>Perfil</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendario')}>                   
           <Icon name="calendar" size={30} color="#fff"/>             
          </TouchableOpacity>
          <Text style={styles.buttonText}>Calendario</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotasEFrequencia')}>
            <Icon name="check" size={30} color="#fff"/>                      
          </TouchableOpacity>
          <Text style={styles.buttonText}>Check-in</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="qrcode" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>QR Code</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Laboratorio')}>
             <Icon name="flask" size={30} color="#fff"/>                             
          </TouchableOpacity>
          <Text style={styles.buttonText}>Laboratório</Text>
        </View>

        <View>                    
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato')}>
            <Icon name="phone" size={30} color="#fff"/>                               
          </TouchableOpacity>
          <Text style={styles.buttonText}>Contato</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')} >
            <Icon name="bar-chart" size={30} color="#fff"/>                                 
          </TouchableOpacity>
          <Text style={styles.buttonText}>Frequência</Text>
        </View> 

        <View>
            <TouchableOpacity  style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
              <Icon name="archive" size={40} color="#fff" alignItens='center'justifyContent='center' />                                   
            </TouchableOpacity>
            <Text style={styles.buttonText}>Documentos</Text>
        </View>

        <View> 
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>            
            <Icon name="copy" size={40} color="#fff" alignItens='center'justifyContent='center' />                              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Avaliação</Text> 
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="building" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Estagios</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="graduation-cap" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Certificados</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="comment" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Comunicados</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="wheelchair" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Acessibilidade</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="street-view" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Localização</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NotasEFrequencia')}>
            <Icon name="site" size={40} color="#fff" alignItens='center'justifyContent='center' />              
          </TouchableOpacity>
          <Text style={styles.buttonText}>Site</Text>
        </View>

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
    color: '#000',
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },
  logo:{
    width:250,
    resizeMode:'contain'

  },
 
});