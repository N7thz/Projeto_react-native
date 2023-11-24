import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'
import Home from '../screens/Home/Home';
import { Profile } from '../screens/Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export function TabNavigation() {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#c09d53' },

            }}
        >
            <Tab.Screen
                name="Inicio"

                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name="sword-cross" size={size} color={"#13d8f6"} />;
                        }
                        return <MaterialCommunityIcons name="sword-cross" size={size} color={color} />;
                    },
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {

                        if (focused) {
                            return <Ionicons name="person" size={size} color={"#13d8f6"} />;
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />;
                    },
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    )
}