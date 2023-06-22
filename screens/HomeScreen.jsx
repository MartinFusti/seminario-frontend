import React from "react";
import { Text, View } from 'react-native';
import { CircleButton } from "../components/CircleButton";
import { globalStyles } from "../styles/globalStyles";
import { Logo } from "../components/Logo";
import { CircleImageButton } from "../components/CircleImageButton";

export const HomeScreen = () => {
    return (
        <View style={{
            ...globalStyles.container, 
            alignItems: 'center',
            }}>
            <Logo logoSource={require('../assets/images/logo.png')} logoSize='110'/>
            <Text style={{fontFamily:'Niramit_semibold'}}>¡Chequeá tus productos, antes de llevarlos!</Text>
            <CircleImageButton circleImage={require('../assets/images/camera.png')} circleSize='150' onPress={() => alert("Pressed")} />
            <CircleImageButton circleImage={require('../assets/images/magnifyingGlass.png')} circleSize='100' onPress={() => alert("Pressed")} />
        </View>
    );
}
