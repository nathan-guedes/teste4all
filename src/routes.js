import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Main from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

const routes = () => (
    <NavigationContainer>
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#444',
                },
            }}
        >
            <Screen name="Home" component={Home} options={{ title: 'Home' }} />

            <Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Main',
                    headerStyle: {
                        backgroundColor: '#e08b00',
                    },
                }}
            />
        </Navigator>
    </NavigationContainer>
);

export default routes;
