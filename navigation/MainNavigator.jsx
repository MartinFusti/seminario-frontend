import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from "../screens/HomeScreen";
import { RegimenConfigScreen } from "../screens/RegimenConfigScreen";
import { HistoryScreen } from "../screens/HistoryScreen";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="RegimenConfig" component={RegimenConfigScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
            </Tab.Navigator>
    );
}
