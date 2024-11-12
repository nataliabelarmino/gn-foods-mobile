import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';

 const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);  

    return (
        <SafeAreaView style={{ backgroundColor: "#FFAF00" }}>
            <Text style={{ color: "red", marginBottom: 10, marginLeft: 15, fontWeight: "bold" }}>GNFoods</Text>
        </SafeAreaView>
    );
 };

export default Acessarconta;