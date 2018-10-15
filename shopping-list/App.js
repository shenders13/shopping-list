import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navbar from './components/Navbar'
import List from './screens/list/List'
import PlusButton from './screens/list/PlusButton'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isNewItemPage: false,
      items: [
        { name: 'Orange Juice', id: '0'},
        { name: 'Onions', id: '1'},
        { name: 'Milk', id: '2'},
        { name: 'Mineral Water', id: '3'},
        { name: 'Chocolate', id: '4'},
        { name: 'Orange Juice', id: '5'},
        { name: 'Onions', id: '6'},
        { name: 'Milk', id: '7'},
        { name: 'Mineral Water', id: '8'},
        { name: 'Chocolate', id: '9'}
      ]
    }
  }

  clearAll = () => this.setState({items: []})
  
  deleteItem = id => {
    console.log("id: ", id)
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  toggleNewPage = isNewItemPage => this.setState({isNewItemPage})


  render() {
    return (
      <View>
        <Navbar
          clearAll={this.clearAll}
          isNewItemPage={this.state.isNewItemPage}
          toggleNewPage={this.toggleNewPage}
        />
        <View style={styles.container}>
          <List items={this.state.items} deleteItem={this.deleteItem}/>
          <View onPress={()=>isNewItemPage(true)} style={styles.plus}>
            <PlusButton />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 68,
    backgroundColor: '#F6F6F6',
    position: 'relative'
  },
  plus: {
    position: 'absolute',
    left:0,
    right:0,
    marginLeft:'auto',
    marginRight:'auto'
  }
});