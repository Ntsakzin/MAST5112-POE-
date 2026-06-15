import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import AddItemScreen from './AddItemScreen';
import ManageMenuScreen from './ManageMenuScreen';
import FilterScreen from './FilterScreen';
import { MenuItem } from './MenuItem';

type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  ManageMenu: undefined;
  Filter: undefined;
};

type MenuItemWithoutId = Omit<MenuItem, 'id'>;

const Stack = createStackNavigator<RootStackParamList>();

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItemWithoutId) => {
    setMenu(prev => [...prev, { ...item, id: generateId() }]);
  };

  const removeItem = (id: string) => {
    setMenu(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator id="RootStack" initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="AddItem">
          {props => <AddItemScreen {...props} onAdd={addItem} />}
        </Stack.Screen>
        <Stack.Screen name="ManageMenu">
          {props => <ManageMenuScreen {...props} menu={menu} onRemove={removeItem} />}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {props => <FilterScreen {...props} menu={menu} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
