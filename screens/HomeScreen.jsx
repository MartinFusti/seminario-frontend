import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CircleButton } from "../components/CircleButton";
import { globalStyles } from "../styles/globalStyles";

export const HomeScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text>¡Chequeá tus productos, antes de llevarlos!</Text>
            <CircleButton title="Camara" circleColor='#F17F16' circleSize='150' onPress={() => alert("Pressed")} />
            <CircleButton title="Lupa" circleColor='#F17F16' circleSize='150' onPress={() => alert("Pressed")} />
        </View>
    );
}
