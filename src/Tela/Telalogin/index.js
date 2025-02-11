import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import logo from '../../img/logogn.png'; // Ajuste o caminho conforme necessário

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <Cabecalho />
            <View style={styles.content}>
                <View style={{marginBottom: 15}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Entypo name="mail" size={30} color="#992800" />
                        <Text style={styles.text}>Email:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="lock" size={32} color="#992800" />
                        <Text style={styles.text}>Senha:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>

                <View style={{ width: 300, justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => 0}>
                        <Text style={styles.text1}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Telaprinc')}>
                    <Text style={styles.botaoTexto}>Conecte-se</Text>
                </TouchableOpacity>

                <View style={styles.linhass}>
                    <View style={styles.line}></View>
                    <Text style={{ color: "#992800" }}>Ou</Text>
                    <View style={styles.line}></View>
                </View>

                <TouchableOpacity style={styles.aut}>
                    <AntDesign name="googleplus" size={40} color="#992800" />
                    <Text style={styles.autTexto}>Entre com o Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Criarconta')}>
                    <Text style={styles.autTexto1}>Não tem conta?</Text>
                    <Text style={[styles.autTexto1, { fontWeight: 'bold' }]}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineBottom}></View>
        </View>
    );
};

export default Acessarconta;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#992800",
        fontWeight: 'bold',
    },
    text1: {
        color: "blue",
        alignSelf: "flex-start",
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
        borderRadius: 10,
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
