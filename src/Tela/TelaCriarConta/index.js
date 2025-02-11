import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6, Entypo, FontAwesome } from '@expo/vector-icons';
import Cabecalho from '../../componentes/Cabecalho';

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <Cabecalho />
            <View style={styles.content}>
                <View>
                    <View style={styles.label}>
                        <FontAwesome6 name="user-large" size={30} color="#992800" />
                        <Text style={styles.text}>Nome ou CPF:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <View style={styles.label}>
                        <Entypo name="mail" size={30} color="#992800" />
                        <Text style={styles.text}>Email:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <View style={styles.label}>
                        <FontAwesome name="lock" size={32} color="#992800" />
                        <Text style={styles.text}>Senha:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <View style={styles.label}>
                        <FontAwesome name="lock" size={32} color="#992800" />
                        <Text style={styles.text}>Confirmar senha:</Text>
                    </View>
                    <TextInput style={styles.inputs} />
                </View>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Telaprinc')}>
                    <Text style={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>
                <View style={styles.linhass}>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>

                </View>
            </View>
            <View style={styles.lineBottom}/>
        </View>
    );

};

export default Acessarconta;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
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
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
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
    lineBottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#FEAD10',
        position: 'absolute',
        bottom: 0,
    },
});


