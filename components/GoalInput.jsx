import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal,Image } from 'react-native'

export const GoalInput = ({ handlePress, showModal,handleCancel }) => {

    const [text, setText] = useState('');
    handleChange = (text) => {
        setText(text);
    }


    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput value={text} style={styles.textInput} placeholder='Your course goal' onChangeText={handleChange} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={() => { handlePress(text); setText('') }} title='Add Goal' color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={handleCancel} title='Cancel' color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        width: '100%',
        padding: 16,
        color: '#120438',
        backgroundColor:'#ccc'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16
    },
    button:{
        width:'30%',
        marginHorizontal:8
    }

})