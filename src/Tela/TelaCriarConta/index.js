import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AppButton from '../../componentes/AppButton';

 const Acessarconta = ({ navigation }) => {
    const [save, setSave] = useState(false);  

    return (
        <View style={{color:'white'}}>
            <View>
                <Text> Acessar </Text>
            </View>
        </View>
    );
 };

export default Acessarconta;