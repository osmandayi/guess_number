import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 15,
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 20,
        fontSize: 25,
        color: 'white',
    },
})