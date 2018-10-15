import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navbar from './components/Navbar'
import List from './screens/list/List'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isNewItemPage: false,
      items: [
        { name: 'Orange Juice', key: '0'},
        { name: 'Onions', key: '1'},
        { name: 'Milk', key: '2'},
        { name: 'Mineral Water', key: '3'},
        { name: 'Chocolate', key: '4'},
        { name: 'Orange Juice', key: '5'},
        { name: 'Onions', key: '6'},
        { name: 'Milk', key: '7'},
        { name: 'Mineral Water', key: '8'},
        { name: 'Chocolate', key: '9'}
      ]
    }
  }

  render() {
    return (
      <View>
        <Navbar />
        <View style={styles.container}>
          <List items={this.state.items}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 68,
    backgroundColor: '#F6F6F6'
  }
});