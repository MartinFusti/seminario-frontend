import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const PrimaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonBox}>
            <Text style={style.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    }

style = StyleSheet.create({
    buttonBox: {
        backgroundColor: "red",
        height: 80,
        width: 80,
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