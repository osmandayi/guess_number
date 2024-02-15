// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameStartScreen from './screens/GameStartScreen';

import { LinearGradient } from 'expo-linear-gradient';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.container}
      >
        <GameStartScreen />
      </LinearGradient>
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
  container: {
    flex: 1,
  },
});
