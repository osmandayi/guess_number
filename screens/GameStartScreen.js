import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

export default function GameStartScreen() {

    const confirmHandler = () => {

    }

    const resetHandler = () => {

    }

    return (
        <View style={styles.container}>
            <Text>Sayı Tahmin Uygulaması</Text>
            <View style={styles.card}>
                <TextInput keyboardType='number-pad' maxLength={3} style={styles.textInput} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={resetHandler}>Temizle</CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'yellow',
        width: 70,
        height: 50,
        marginVertical: 10,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})