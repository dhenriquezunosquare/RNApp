import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'


export const GoalItem = ({ item, onDeleteItem }) => {
    return (
        <Pressable android_ripple={{ color: '#dddddd' }} style={({ pressed }) => pressed && styles.pressedItem} onPress={() => onDeleteItem(item.item.text)}>
            <View key={item.index} style={styles.goalItem}>
                <Text style={{ color: 'white', padding: 8 }}>{item.item.text}</Text>
            </View>
        </Pressable>


    )
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    }
})

