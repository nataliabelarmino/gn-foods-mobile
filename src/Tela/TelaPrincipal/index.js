import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
        flex: 1,
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
