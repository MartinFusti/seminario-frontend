import React from "react";
import { Image } from "react-native";

export const Logo = ({ logoSource, logoSize, position }) => {
    const size = logoSize ? parseInt(logoSize) : 100;

    const styles = {
        container: {
            backgroundColor: '#E0B893',
            width: size,
            height: size,
            borderRadius: size / 2,
            position: 'relative',
            left: position ? position.x : 0,
            bottom: position ? position.y : 0
        }
    };

    return (
        <Image 
            source={logoSource} 
            style={styles.container}
        />
    );
};
