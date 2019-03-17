import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from './src/02Kasir/Menu';
import Penjualan from './src/02Kasir/Penjualan';
import DataBarang from './src/02Kasir/DataBarang';
import Tentang from './src/02Kasir/Tentang';

const createAppNavigator = createStackNavigator(
  {
    Menu: Menu,
    Penjualan: Penjualan,
    DataBarang: DataBarang,
    Tentang: Tentang,
  },
  {
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
