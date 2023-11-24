import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './Stack.routes';
import { TabNavigation } from './Tab.routes';
import React from 'react';

export default function Routes() {

    return (

        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}