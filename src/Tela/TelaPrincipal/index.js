import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import cadastroLojas from '../../dados/lojas';
import { useNavigation } from '@react-navigation/native';

const Acessarconta = () => {
    const navigation = useNavigation();

    const [lojas, setLojas] = useState(cadastroLojas);

    const [searchText, setSearchText] = useState('');

    // Filtro das lojas
    const filteredLojas = lojas.filter((loja) =>
        loja.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>
            {/* Barra de pesquisa */}
            <TextInput
                style={styles.searchBox}
                placeholder="Buscar loja..."
                placeholderTextColor="#888"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />

            {/* Lista de lojas */}
            {filteredLojas.map((loja, index) => (
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Loja') }
                >
                    <View style={styles.loja} key={index}>
                        <Text style={styles.nomeEstab}>{loja.nome}</Text>
                        <Text style={styles.dadoQualquer}>{loja.dadoQualquer}</Text>
                        <Text style={styles.avaliacao}>Avaliação: {loja.avaliacao}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchBox: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 100,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    loja: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        elevation: 2, // Sombras no Android
    },
    nomeEstab: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dadoQualquer: {
        color: '#555',
        marginBottom: 5,
    },
    avaliacao: {
        color: '#888',
    },
});

export default Acessarconta;
