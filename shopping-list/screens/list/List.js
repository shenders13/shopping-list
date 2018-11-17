import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated
} from 'react-native'
import ListItem from './ListItem'
import EmptyState from './EmptyState'
import DraggableFlatList from 'react-native-draggable-flatlist'



export default class List extends React.Component {
  render() {

    const isEmptyState = this.props.items.length === 0

    if (isEmptyState) {
      return (
        <View style={[styles.container, styles.center]}>
          <TouchableOpacity onPress={()=>this.props.toggleNewPage(true)}>
            <EmptyState />
          </TouchableOpacity>
        </View>
      )
    }


    return (
      <View style={styles.container}>
        <Text style={styles.topInstruction}>To rearrange your list, hold and drag an item.</Text>
        <Text style={styles.bottomInstruction}>Tap gray tick to remove item.</Text>
        <DraggableFlatList
          data={this.props.items}
          onMoveEnd={({ data }) => this.props.reorderItems(data)}
          renderItem={({ item, move, moveEnd }) => {
            return (
              <ListItem 
                item={item}
                deleteItem={this.props.deleteItem}
                move={move}
                moveEnd={moveEnd}

              />
            )
          }}
          keyExtractor={item => item.name}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    height: '100%'
  },
  center: {
    alignItems: 'center',
  },
  topInstruction: {
    color: '#adadad',
    marginLeft: 12,
    marginTop: 24,
    marginBottom: 0,
    fontSize: 12,
  },
  bottomInstruction: {
    color: '#adadad',
    marginLeft: 12,
    marginTop: 6,
    marginBottom: 36,
    fontSize: 12,
  }
});