import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho'

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <Cabecalho />

            <View>
                <Text style={styles.text}>  Nome ou CPF; </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.text}> Email </Text>
                <TextInput style={styles.inputs}/>
            </View>
            
            <TouchableOpacity style={{ width: '100%', paddingHorizontal: 50 }}>
                 <Text style={styles.text1}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Telaprinc')}>
                <Text style={styles.botaoTexto}>Conecte-se</Text>
            </TouchableOpacity>
            <View style={styles.linhass}> 
            <View style={styles.line}></View>
            <Text style={{ color: "#992800" }} > Ou </Text>
            <View style={styles.line}></View>

            </View>

            
            <TouchableOpacity style={styles.aut}>
                <AntDesign name="googleplus" size={40} color="#992800"/>
                <Text style={styles.autTexto}>Entre com o Google.</Text>
            </TouchableOpacity>

                
            <TouchableOpacity onPress={()=> navigation.navigate('Criarconta')}>
                <Text style={styles.autTexto1}>Não tem conta?</Text>
                <Text style={[styles.autTexto1, { fontWeight: 'bold' }]}>Cadastre-se</Text>
            </TouchableOpacity>
            <View style={styles.lineBottom}></View>
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
     
     text1: {
        color: "blue",
        alignSelf: "flex-start", // Alinha à esquerda do contêiner
        marginLeft: 10, // Ajuste para a margem esquerda (valor positivo)
        fontSize: 11,
        marginBottom: 10,
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
    
    linhass:{
        flexDirection: 'row', // Coloca os itens em linha horizontal
        alignItems: 'center', // Alinha os itens verticalmente
        justifyContent: 'space-between', // Espaça os itens horizontalmente
        width: '90%', // Ajusta a largura para evitar sobreposição
        marginVertical: 20, // Adiciona espaçamento vertical
    },
    line: {
        width: '40%', // Define uma largura fixa para as linhas
        height: 1.5, // Altura da linha
        backgroundColor: "#992800", // Cor da linha
      },
    aut: {
        flexDirection: 'row', // Coloca o ícone e o texto lado a lado
        alignItems: 'center', // Alinha verticalmente ao centro
        justifyContent: 'center', // Centraliza os itens horizontalmente no contêiner
        backgroundColor: '#f0f0f0', // Adiciona uma cor de fundo (opcional)
        borderRadius: 10, // Bordas arredondadas
        padding: 10, // Espaçamento interno
        width: '80%', // Ajusta a largura do botão
        marginVertical: 20, // Espaçamento superior e inferior
    },
    autTexto: {
        marginLeft: 10, // Espaço entre o ícone e o texto
        fontSize: 14, // Tamanho da fonte
        color: "#992800", // Cor do texto
    
    },
   

    ddd:{
        fontWeight: 'bold',
    },
    autTexto1: {
        marginLeft: 10, // Espaço entre o ícone e o texto
        fontSize: 14, // Tamanho da fonte
        color: "#992800", // Cor do texto
    
    },

});

 
