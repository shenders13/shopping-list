import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navbar from './components/Navbar'
import List from './screens/list/List'
import PlusButton from './screens/list/PlusButton'
import NewItem from './screens/new-item/NewItem'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isNewItemPage: true,
      items: [
        { name: 'Orange Juice', id: '0'},
        { name: 'Onions', id: '1'},
        { name: 'Milk', id: '2'},
        { name: 'Mineral Water', id: '3'},
        { name: 'Chocolate', id: '4'}
      ]
    }
  }

  clearAll = () => this.setState({items: []})
  
  deleteItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  createItem = newItem => {
    const doesItemExist = !!this.state.items.find(item=>item.name === newItem)
    if (doesItemExist) {
      return
    }
    this.setState(state=>{
      return {
        items: [...state.items, { name: newItem, id: newItem }]
      }
    })
  }

  toggleNewPage = isNewItemPage => this.setState({isNewItemPage})
  
  render() {
    if (this.state.isNewItemPage) {
      return (
        <View>
          <Navbar
            isNewItemPage={true}
            toggleNewPage={this.toggleNewPage}
          />
          <NewItem
            createItem={this.createItem}
            toggleNewPage={this.toggleNewPage}
          />
        </View>
      )
    }


    return (
      <View>
        <Navbar
          clearAll={this.clearAll}
          isNewItemPage={false}
          areItemsPresent={this.state.items.length > 0}
        />
        <View style={styles.container}>
          <List items={this.state.items} deleteItem={this.deleteItem}/>
          <View style={styles.plus}>
            <PlusButton
              toggleNewPage={this.toggleNewPage}
            />
          </View>
        </View>
      </View>
    );
  }
}

const windowDimensions = Dimensions.get("window")
const windowHeight = windowDimensions.height
const windowWidth = windowDimensions.width

const styles = StyleSheet.create({
  container: {
    height: windowHeight - 68,
    backgroundColor: '#F6F6F6',
    position: 'relative'
  },
  plus: {
    position: 'absolute',
    bottom: 0.05*windowHeight,
    left: 0.5*windowWidth,
    marginLeft: -32,
    display: 'flex',
    alignItems: 'center'
  }
});