import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import ComputerGuess from "../components/ComputerGuess";

const generateNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
};

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ onGameOver, userNumber }) {
    const initialGuess = generateNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessCounts, setGuessCounts] = useState([initialGuess]);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessCounts);
        }
    }, [currentGuess]);

    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            return Alert.alert(
                "Don't worry, i m here for u :)",
                "Bile bile lades !",
                [{ text: "Tamam", style: "cancel" }]
            );
        }

        if (direction === "lower") {
            maxNumber = currentGuess;
        } else {
            minNumber = currentGuess + 1;
        }
        const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessCounts((prevGuess) => [...prevGuess, newRandomNumber])
    };


    return (
        <View style={styles.container}>
            <Title>Bilgisayar Tahmini</Title>
            <ComputerNumber>{currentGuess}</ComputerNumber>
            <View style={styles.card}>
                <Text style={styles.title}>Altında mı üstünde mi?</Text>
                <View style={styles.buttonsContainer}>
                    <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <AntDesign name="minus" size={24} color="white" />
                    </CustomButton>
                    <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
                        <AntDesign name="plus" size={24} color="white" />
                    </CustomButton>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessCounts}
                    keyExtractor={(item) => item}
                    renderItem={({ item, index }) => <ComputerGuess item={item} index={index + 1} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 20,
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    card: {
        backgroundColor: 'orange',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 15,
    },
});
