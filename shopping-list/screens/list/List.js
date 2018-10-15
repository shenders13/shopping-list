import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from './ListItem'

// {this.props.items.map(item => <ListItem item={item}/>)}

export default class List extends React.Component {
  render() {
    console.log("items: ", this.props.items)
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.items}
          renderItem={ListItem}
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
  }
});