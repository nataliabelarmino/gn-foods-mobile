import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppButton = (props) => {
    const color = props.color || 'white';
    const backgroundColor = props.backgroundColor || 'black';
    const borderColor = props.borderColor || 'white';
    const title = props.title || '?title?';

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: color }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default AppButton;
