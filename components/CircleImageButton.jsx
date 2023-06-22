import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

export const CircleImageButton = ({ circleImage, circleSize, onPress }) => {

    const size = circleSize ? parseInt(circleSize) : 100;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                    borderRadius: size/2,
                    height: size, 
                    width: size
                    }}>
            <Image 
                source={circleImage}
                contentFit="cover"
                style={{ 
                    height: "100%",
                    width: "100%",
                    }}
            />
            </View>
        </TouchableOpacity>
    );
    }

style = StyleSheet.create({
    buttonBox: {

    },
});