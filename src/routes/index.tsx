import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './Stack.routes';
import { TabNavigation } from './Tab.routes';

export default function Routes() {

    return (

        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}