import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Topics() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >
                <Text style={styles.message}>Nome do Aluno</Text>
            </Animatable.View>

            <View animation="fadeInUp" style={styles.containerForm}>
                
                <TouchableOpacity style={styles.topic}>
                    <Text style={styles.topicText}>Caixa 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic}>
                    <Text style={styles.topicText}>Caixa 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic}>
                    <Text style={styles.topicText}>Caixa 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic}>
                    <Text style={styles.topicText}>Caixa 4</Text>
                </TouchableOpacity>



              

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#002659'
    }, 
        topic: { 
            
            marginTop: '14%',
            marginBottom: '8%',
            paddingStart: '5%'
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
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: '#fff',
        padding: 30,
        justifyContent:"space-between"
        



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
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }

})