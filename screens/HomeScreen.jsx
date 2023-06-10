import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from "../components/PrimaryButton";

export const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <PrimaryButton title="Press Me" onPress={() => alert("Pressed")} />
        </View>
    );
}
