import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <Pressable onPress={() => Alert.alert("sdlkfnklnl")} style={[styles.cards, styles.cardOne]}>
            <Text style={styles.text}>Red</Text>
        </Pressable>
        <View style={[styles.cards, styles.cardTwo]}>
            <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
            <Text style={styles.text}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 900
    },
    text: {
        color: "white"
    },
    container: {
        flex: 1,
        gap: 4,
        flexDirection: "row",
    },
    cards: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 8
    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "green"
    },
    cardThree: {
        backgroundColor: "blue"
    },
})