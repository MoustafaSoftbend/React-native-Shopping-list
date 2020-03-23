import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({addItem}) => {

    const [text, setText] =useState('');

    const onChange = text => setText(text)
    
  return (
    <View>
        <TextInput onChangeText={onChange} placeholder="Add Item..." style={styles.input} />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
            <Text style={styles.btnText}><Ionicons name="ios-add" size={20} /> Add Item</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;