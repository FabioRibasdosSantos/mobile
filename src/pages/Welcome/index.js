
import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Animatable.View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/Logo-redondo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Bem vindo ao seu aplicativo de presença!</Text>
                <Text style={styles.text}>Faça o login para começar!!.</Text>
            
             <TouchableOpacity 
             style={styles.button}
             onPress={ () => navigation.navigate('SingIn')}
             >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>   
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#CFCBC3'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#CFCBC3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign:'center'
    },
    text:{
        color: '#a1a1a1',
        alignSelf: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#002659',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        
    }
})
