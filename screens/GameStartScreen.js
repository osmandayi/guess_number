import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

export default function GameStartScreen({ navigation, onSendNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Lütfen geçerli bir değer giriniz !",
                "Sayı 1 ile 99 arasında olmalıdır.",
                [{ text: "Tamam", style: "destructive", onPress: resetHandler }]
            );

            return;
        }
        onSendNumber(chosenNumber);
    };

    const resetHandler = () => {
        setEnteredNumber("");
    };

    return (
        <View style={styles.container}>
            <Title>Sayı Tahmin Uygulaması</Title>
            <View style={styles.card}>
                <TextInput
                    keyboardType="number-pad"
                    value={enteredNumber}
                    maxLength={3}
                    onChangeText={setEnteredNumber}
                    style={styles.textInput}
                />
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "yellow",
        width: 70,
        height: 50,
        marginVertical: 10,
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
