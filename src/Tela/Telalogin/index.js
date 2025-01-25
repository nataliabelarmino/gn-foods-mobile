import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Acessarconta = ({ navigation }) => {
    const [lojas] = useState([
        {
            nome: "Dimas Pizza",
            avaliacao: 4,
            dadoQualquer: "dado qualquer",
        },
        {
            nome: "VL Açaiteria",
            avaliacao: 2,
            dadoQualquer: "dado qualquer 2",
        }
    ]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}> Email </Text>
                <TextInput style={styles.inputs} />
            </View>
            <View>
                <Text style={styles.text}> Senha </Text>
                <TextInput style={styles.inputs} />
            </View>
            
            {/* Exibindo as lojas */}
            <View>
                {lojas.map((loja, index) => (
                    <View key={index}>
                        <Text>{loja.nome}</Text>
                        <Text>{loja.avaliacao}</Text>
                        <Text>{loja.dadoQualquer}</Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity style={{ width: '100%', paddingHorizontal: 50 }}>
                <Text style={styles.text1}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Criarconta')}
            >
                <Text style={styles.botaoTexto}>Conecte-se</Text>
            </TouchableOpacity>

            <View style={styles.linhass}>
                <View style={styles.line}></View>
                <Text style={{ color: "#992800" }}> Ou </Text>
                <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.aut}>
                <AntDesign name="googleplus" size={40} color="#992800" />
                <Text style={styles.autTexto}>Entre com o Google</Text>
            </TouchableOpacity>

            <Text style={styles.autTexto1}>Não tem conta?</Text>
            <TouchableOpacity>
                <Text style={[styles.autTexto1, { fontWeight: 'bold' }]}>Cadastre-se</Text>
            </TouchableOpacity>

            <View style={styles.lineBottom}></View>
        </View>
    );
};

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
        marginBottom: 0,
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

export default Acessarconta;
