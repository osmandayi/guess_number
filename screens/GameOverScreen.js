import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'
import ComputerGuess from '../components/ComputerGuess'

export default function GameOverScreen({ guessList, userNumber, onGameOver }) {
    return (
        <View style={styles.container}>
            <Title>Oyun tamamlandı !</Title>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../assets/success.jpg')} />
            </View>
            <Text style={styles.result}>
                <Text style={styles.countAndNum}>{guessList.length} </Text>
                deneme ile
                <Text style={styles.countAndNum}> {userNumber} </Text>
                sayısını buldun.
            </Text>
            <CustomButton onPress={onGameOver}>Yeni Oyuna Başla</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        width: 350,
        height: 350,
        overflow: 'hidden',
        borderRadius: 175,
        borderWidth: 3,
        borderColor: 'red',
        margin: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    result: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    countAndNum: {
        color: 'red',
    },
    guessItem: {

    },
})