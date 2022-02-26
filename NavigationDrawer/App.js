import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import OpeMat from './opmat/Matematica'
import Fala from './speech/fala'
import Lista from './flatlist/FlatList'
import MassaCorporal from './imc/Imc'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go home"
      />
    </View>
  );
}
function OpMat({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <OpeMat></OpeMat>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Speech({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Fala></Fala>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function IMC({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MassaCorporal></MassaCorporal>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function FlatList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Lista></Lista>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Operações Matemáticas" component={OpMat} />
        <Drawer.Screen name="Speech" component={Speech} />
        <Drawer.Screen name="IMC da Aula" component={IMC} />
        <Drawer.Screen name="FlatList Modelo 2 com Alert" component={FlatList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



