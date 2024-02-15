import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({ item, index }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.guessIndex}>{index}. tahmin : </Text>
            <Text style={styles.guess}>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 15,
        borderRadius: 30,
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: "95%",
        elevation: 4,
        shadowColor: 'white',
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 4,
        shadowOpacity: .25,
    },
    guess: {},
    guessIndex: {},
})