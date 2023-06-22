import React from "react";
import { Text, View } from 'react-native';
import { globalStyles } from "../styles/globalStyles";

export const HistoryScreen = () => {
    return (
        <View style={{
            ...globalStyles.container, 
            alignItems: 'center',
            }}>
            <Text style={{fontFamily:'Niramit_semibold'}}>Historial</Text>
        </View>
    );
}