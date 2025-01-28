import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Acessarconta = () => {
    const [lojas] = useState([
        { nome: "Panificadora Imperial", avaliacao: '4.0', dadoQualquer: "Padaria - 0,5 km, 15-30 min" },
        { nome: "Supermercado Casa Alves", avaliacao: '4.0', dadoQualquer: "Supermercado - 0,8km - 35-45min" },
        { nome: "VL Açaiteria", avaliacao: '2.0', dadoQualquer: "Sorvete - 1,0km - 15-20min" },
        { nome: "Dimas Pizza", avaliacao: '5.0', dadoQualquer: "Pizzas - 1,0km - 35-50min" },
        { nome: "Pizzaria Imperial", avaliacao: '3.0', dadoQualquer: "dado qualquer 2" },
    ]);

    const [searchText, setSearchText] = useState('');

    // Filtro das lojas
    const filteredLojas = lojas.filter((loja) =>
        loja.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
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
                <View style={styles.loja} key={index}>
                    <Text style={styles.nomeEstab}>{loja.nome}</Text>
                    <Text style={styles.dadoQualquer}>{loja.dadoQualquer}</Text>
                    <Text style={styles.avaliacao}>Avaliação: {loja.avaliacao}</Text>
                </View>
            ))}
        </View>
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
