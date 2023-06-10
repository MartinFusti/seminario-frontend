import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const CircleButton = ({ title, circleColor, circleSize, onPress }) => {

    const size = circleSize ? parseInt(circleSize) : 100;
    const color = circleColor ? circleColor : 'white';

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                ...style.buttonBox, backgroundColor: color, height: size, width: size
                }}>
            <Text style={style.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    }

style = StyleSheet.create({
    buttonBox: {
        backgroundColor: "white",
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: '300'
    },
});