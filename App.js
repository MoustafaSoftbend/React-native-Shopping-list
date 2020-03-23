import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import uuid from 'uuid-random'
import AddItem from './components/AddItem';

const App = () => {
  const  [items, setItems] = useState([
    {id: uuid() , text:'Milk'},
    {id: uuid() , text:'Eggs'},
    {id: uuid() , text:'Bread'},
    {id: uuid() , text:'Juice'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  const addItem = text => {
    if (!text) {
        Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    }else {
      setItems(prevItems => {
        return [{id: uuid(), text},...prevItems]
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        data ={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} /> }
        keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60
  }
})

export default App;
