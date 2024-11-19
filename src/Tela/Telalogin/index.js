import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text> Email </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <View>
                <Text> Senha </Text>
                <TextInput style={styles.inputs}/>
            </View>
            <TouchableOpacity>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Conecte-se</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.aut}>
                <AntDesign name="googleplus" size={24} color="black" />
                <Text style={styles.autTexto}>Entre com o Google</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Acessarconta;



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red' 
    },
    inputs: {
        borderWidth: 1,
        width: 200
    },
    botao: {
        padding: 20,
        backgroundColor: "#992800",
        borderRadius: 20
    },
    botaoTexto: {
        color: "white"
    },
    autenticacao: {

    }
});