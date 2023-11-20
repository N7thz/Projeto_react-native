import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Home } from '../screens/home'
import { Profile } from '../screens/profile'


import { Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from './Tab.routes'



const Tab = createBottomTabNavigator ()
export function Routes() {

    return(
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    );
  }