import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from './ListItem'
import EmptyState from './EmptyState'


export default class List extends React.Component {
  render() {

    const isEmptyState = this.props.items.length === 0

    if (isEmptyState) {
      return (
        <View style={[styles.container, styles.center]}>
          <EmptyState />
        </View>
      )
    }


    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.items}
          renderItem={({item}) => <ListItem item={item} deleteItem={this.props.deleteItem} />}
          keyExtractor={(item, index) => item.id}
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
  }
});