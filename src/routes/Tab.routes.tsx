import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons} from '@expo/vector-icons'

import { Home } from '../screens/Home';
import { Profile } from '../screens/profile';

const Tab = createBottomTabNavigator()

export function TabNavigation() {

    return (

        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />;
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />;
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {

                        if (focused) {
                            return <Ionicons name="person" size={size} color={color} />;
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    )
}