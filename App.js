import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameStartScreen from './screens/GameStartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View>
        <GameStartScreen />
      </View>
      {/* <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            // options={{ headerShown: false }} // spesifik olarak bir sayfanın headerinin gösterilmemesi için !
            name="GameStart" component={GameStartScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
});
