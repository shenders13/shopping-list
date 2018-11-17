import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Vibration } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const onLongPress = move => {
  Vibration.vibrate(100)
  move()
}

class ListItem extends React.Component {

  state = {
    isDeleting: false,
    isMoving: false
  }

  onDelete = id => {
    this.setState({isDeleting: true})
    setTimeout(()=>{
      this.props.deleteItem(id)
    }, 400)
  }

  onLongPress = () => {
    this.setState({isMoving: true})
    Vibration.vibrate(100)
    this.props.move()
  }

  onPressOut = () => {
    this.setState({isMoving: false})
    this.props.moveEnd()
  }

  get itemTextStyle() {
    return this.state.isDeleting ? [styles.itemText, styles.strikeThrough] : styles.itemText
  }

  get tick() {
    if (this.state.isDeleting) {
      return <Ionicons name="md-checkmark-circle" size={32} color="#8CC1F5" />
    }
    return <Ionicons name="md-checkmark-circle" size={32} color="#F6F6F6" />
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} key={this.props.item.id} onLongPress={this.onLongPress} onPressOut={this.onPressOut}>
        <Text style={this.itemTextStyle}>
          {this.props.item.name}
        </Text>
        <TouchableOpacity onPress={()=>this.onDelete(this.props.item.id)} style={styles.tick}>
          {this.tick}
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}


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
    marginLeft: 24,
    fontSize: 16,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#8CC1F5'
  },
  tick: {
    marginRight: 18
  }
});