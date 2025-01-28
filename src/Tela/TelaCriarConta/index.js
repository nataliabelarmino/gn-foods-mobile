import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>  Nome ou CPF; </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.text}> Email </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.text}> Senha </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.text}> Confirmar senha:</Text>
                <TextInput style={styles.inputs}/>
            </View>

                <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Telaprinc')}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.linhass}> 
            <View style={styles.line}></View>
            <View style={styles.line}></View>

            </View>
            </View>
            );
       
};

export default Acessarconta;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: 'red', 
        paddingTop: 50,
        flex: 1,
    },

     text: {
        color: "#992800",
        fontWeight: 'bold', 
     },
    
    inputs: {
        borderWidth: 1,
        width: 300,
        height: 50,
        marginTop: 2,
        borderRadius: 7,
    },
    botao: {
        padding: 20,
        backgroundColor: "#992800",
        borderRadius: 7,
        width: 200,
        marginTop: 10,
    },
    botaoTexto: {
        color: "white",
        fontSize: 15,
        textAlign: 'center',
    },

    lineBottom: {
        width: '100%',
        height: 50, // Tamanho da linha inferior
        backgroundColor: '#FEAD10', // Cor corrigida da linha inferior
        marginBottom: 0, // Garante que a linha inferior não tenha margens que a afastem
        position: 'absolute', // Posiciona a linha de forma independente
        bottom: 0, 
      },
    
    
    line: {
        width: '40%', // Define uma largura fixa para as linhas
        height: 1.5, // Altura da linha
        backgroundColor: "#992800", // Cor da linha
      },

    

});

 
