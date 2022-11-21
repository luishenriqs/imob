import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Settings } from '@pages/Settings';
import { User } from '@pages/User';
import { HomeRoutes } from '@pages/Home/home.routes';
import { CustomDrawer } from '@components/CustomDrawer';

const Drawer = createDrawerNavigator();

// Route to app menu;
export function AppRoutes() {
  const theme = useTheme();
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: false,
        drawerActiveTintColor: theme.COLORS.gray_100,
        drawerInactiveTintColor: theme.COLORS.gray_500,
        drawerActiveBackgroundColor: theme.COLORS.blue_300,
        drawerInactiveBackgroundColor: theme.COLORS.gray_200,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: theme.FONT_FAMILY.bold,
          fontSize: 15
        }
      }}  
    >
      <Drawer.Screen 
        name="Início" 
        component={HomeRoutes}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons 
              name='home-outline'
              size={20}              
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Configurações" 
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons 
              name='md-settings-outline'
              size={20}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Usuario"
        component={User}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons 
              name='account-outline'
              size={20}              
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};