import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import logo from '../../img/logogn.png'; // Ajuste o caminho conforme necessário

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <Cabecalho />
            
            <View>
                <Text style={styles.text}>Nome ou CPF:</Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text style={styles.text}>Email:</Text>
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
                <Text style={{ color: "#992800" }}>Ou</Text>
                <View style={styles.line}></View>
            </View>
            
            <TouchableOpacity style={styles.aut}>
                <AntDesign name="googleplus" size={40} color="#992800"/>
                <Text style={styles.autTexto}>Entre com o Google</Text>
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
        paddingTop: 50,
        flex: 1,
    },
    logoContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    logo: {
        width: 150, // 
        height: 170,
        resizeMode: 'contain',
    },
    text: {
        color: "#992800",
        fontWeight: 'bold',
    },
    text1: {
        color: "blue",
        alignSelf: "flex-start",
        marginLeft: 10,
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
        height: 50,
        backgroundColor: '#FEAD10',
        position: 'absolute',
        bottom: 0,
    },
    linhass: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 20,
    },
    line: {
        width: '40%',
        height: 1.5,
        backgroundColor: "#992800",
    },
    aut: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        marginVertical: 20,
    },
    autTexto: {
        marginLeft: 10,
        fontSize: 14,
        color: "#992800",
    },
    autTexto1: {
        marginLeft: 10,
        fontSize: 14,
        color: "#992800",
    },
});
