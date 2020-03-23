import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
    
  return (
    <TouchableOpacity style={styles.listitem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text} </Text>
            <Ionicons name="md-remove-circle" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    listitem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18
    }
})

export default ListItem;