// import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameStartScreen from './screens/GameStartScreen';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessList, setGuessList] = useState([]);

  const SendedNumberHandler = (sendedNumber) => {
    setUserNumber(sendedNumber);
    setGameIsOver(false)
  }

  const gameOverHandler = (guessList) => {
    setGameIsOver(true)
    setGuessList(guessList);
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
  }

  let screen = <GameStartScreen onSendNumber={SendedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen onGameOver={newGameHandler} guessList={guessList} userNumber={userNumber} />
  }

  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.container}
      >
        <ImageBackground style={styles.container} source={require('./assets/back.jpg')} imageStyle={styles.backImage}>
          {screen}
        </ImageBackground>
      </LinearGradient>
      {/* 
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
  backImage: {
    opacity: .2,
  },
});
