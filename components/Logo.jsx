import React from "react";
import { Image } from "react-native";

export const Logo = ({ logoSource, logoSize }) => {
    
        const size = logoSize ? parseInt(logoSize) : 100;
   
        return (
            <Image 
            source={logoSource} 
            style={{
            backgroundColor: '#E0B893',
            width: size,
            height: size,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: size / 2
            }}
            />
        );
    }
    