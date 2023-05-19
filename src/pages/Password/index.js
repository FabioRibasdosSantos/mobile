import React, {useState} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'

export default function Password() {

    const navigation = useNavigation();

    
        const createButtonAlert = () =>
          Alert.alert(
            "Email enviado",
            "Verificar seu correio eletronico",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { 
                text: "OK", 
                onPress: () => navigation.navigate('Login'),
            }
            ]
          );
    

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >
                <Text style={styles.message}>Recuperação de Senha</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>
                Para sua segurança enviaremos um email  validar sua redefinição de senha.</Text>
                <Text style={styles.title}>E-mail</Text>
                <TextInput 
                placeholder='Digite seu e-mail...'
                style={styles.input}
                />
               

                <TouchableOpacity 
                style={styles.button}
                onPress={createButtonAlert} 
                >
                    <Text style={styles.buttonText}>Recuperar Senha</Text>
                </TouchableOpacity>

            </Animatable.View>

            


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#002659'
    },
    containerHeader:{
        marginTop: '20%',
        marginBottom: '20%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25, 
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#002659',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
   
    registerText:{
        color: '#a1a1a1'
    }

})