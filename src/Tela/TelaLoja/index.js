import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';


const Acessarloja = ({ route }) => {
   const [save, setSave] = useState(false);
   const loja = route.params;
    
    function Produto({produto}) {
        return (
            <View>
                <Text>{produto.nome}</Text>
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
    }
})

export default Acessarloja;

