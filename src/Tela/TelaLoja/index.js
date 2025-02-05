import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';


const Acessarloja = ({ route }) => {
   const [save, setSave] = useState(false);
   const loja = route.params || {} ;
    
    function Produto({produto}) {
        return (
            <View style={styles.caixa}>
                <Text style={styles.nomeProd}>{produto.nome}</Text>
                <View style={styles.desc}>
                <Text>{produto.descricao}</Text>
                <Text>{produto.preco}</Text>
                </View>
            </View>
        );
    }

    function Categoria({categoria}) {
        return (
            <View >
                <Text>{categoria.nome}</Text>
                { categoria.produtos.map( (produto, index) => <Produto produto={produto} key={index} /> ) }
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>{loja.nome}</Text>
            <Text>{loja.dadoQualquer}</Text>

            { loja.categorias.map( (categoria, index) => <Categoria categoria={categoria} key={index} /> )}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    titulo: {
        padding: 16,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 60,
    },
    caixa:{
        flexDirection: 'row', // Alinha os produtos na horizontal
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Distribui os itens uniformemente
        padding: 10,
    },
    desc:{
        flexWrap: 'wrap', // Permite que os itens quebrem de linha
    }
})

export default Acessarloja;

