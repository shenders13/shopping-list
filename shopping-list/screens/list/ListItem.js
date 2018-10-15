import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'


const ListItem =(({item, deleteItem}) => {
  return (
    <View style={styles.container} key={item.id}>
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity onPress={()=>deleteItem(item.id)}>
        <View style={styles.checkbox} />
      </TouchableOpacity>
    </View>
  )
})

export default ListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    marginBottom: 12
  },
  itemText: {
    color: '#adadad',
    marginLeft: 24
  },
  checkbox: {
    height: 18,
    width: 18,
    backgroundColor: '#F6F6F6',
    marginRight: 24,
    borderRadius: 9,
  }
});