import React from 'react';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clients } from './Clients';
import { Properties } from './Properties';
import { Menu } from './Menu';
import { Business } from './Business';
import { Dashboard } from './Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

export function HomeRoutes () {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions= {{
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 52,
                },
                tabBarLabelStyle: {
                    margin: 3,
                },
                tabBarLabelPosition: 'below-icon', 
                tabBarActiveTintColor: theme.COLORS.gray_100,
                tabBarActiveBackgroundColor: theme.COLORS.blue_900,
                tabBarInactiveTintColor: theme.COLORS.gray_700,
                tabBarInactiveBackgroundColor: theme.COLORS.blue_500
            }}
        >
            <Screen
                name='Painel' 
                component={Dashboard} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='chart-bar'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Imóveis' 
                component={Properties} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='home'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Menu' 
                component={Menu} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='plus-thick'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Clientes' 
                component={Clients} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='account-multiple'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Negócios' 
                component={Business} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='file-document-multiple'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}