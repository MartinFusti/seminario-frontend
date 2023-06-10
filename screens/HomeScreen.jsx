import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CircleButton } from "../components/CircleButton";
import { globalStyles } from "../styles/globalStyles";
import { Logo } from "../components/Logo";

export const HomeScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Logo logoSource={require('../assets/images/logo.png')} logoSize='100' />
            <Text>¡Chequeá tus productos, antes de llevarlos!</Text>
            <CircleButton title="Camara" circleColor='#F17F16' circleSize='150' onPress={() => alert("Pressed")} />
            <CircleButton title="Lupa" circleColor='#FB9F4B' circleSize='100' onPress={() => alert("Pressed")} />
        </View>
    );
}
