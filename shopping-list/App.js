import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font, AppLoading, SecureStore } from 'expo';
import Navbar from './components/Navbar'
import List from './screens/list/List'
import PlusButton from './screens/list/PlusButton'
import NewItem from './screens/new-item/NewItem'

export default class App extends React.Component {

  async componentWillMount() {

    await Font.loadAsync({
      'GTWalsheim': require('./assets/fonts/GT-Walsheim-Regular.ttf'),
    })
    let items = await SecureStore.getItemAsync("items");
    items = items ? JSON.parse(items) : []

    // items = [
    //   { name: 'Brocolli', id: '1' },
    //   { name: 'Water', id: '2' },
    //   { name: 'Milk', id: '3' },
    //   { name: 'Bottle', id: '4' },
    //   { name: 'Soap', id: '5' },
    //   { name: 'Magazines', id: '6' },
    //   { name: 'Flowers', id: '7' },
    //   { name: 'TV Guide', id: '8' },
    //   { name: 'Toilet paper', id: '9' },
    //   { name: 'Chocolate', id: '10' },
    //   { name: 'Headphones', id: '11' },
    // ]

    this.setState({ isAppLoading: false, items })
  }

  constructor(props) {
    super(props)
    this.state = {
      isFontLoaded: false,
      isAppLoading: true,
      items: []
    }
  }

  updateSecureStore = (newItems) => {
    SecureStore.setItemAsync('items', JSON.stringify(newItems))
    .then((items) => {
      console.log("SET ITEMS: ", items)
    });
  }

  clearAll = () => {
    this.setState({items: []})
    this.updateSecureStore([])
  }

  reorderItems = newOrder => {
    this.setState({items: newOrder})
    this.updateSecureStore(newOrder)
  }
  
  deleteItem = id => {
    const items = this.state.items.filter(item => item.id !== id)
    this.setState({items})
    this.updateSecureStore(items)
  }

  createItem = newItem => {
    const doesItemExist = !!this.state.items.find(item=>item.name === newItem)
    if (doesItemExist) {
      return
    }
    const items = [...this.state.items, { name: newItem, id: newItem }]
    this.setState({items})
    this.updateSecureStore(items)
  }

  toggleNewPage = isNewItemPage => this.setState({isNewItemPage})
  
  render() {
    
    if (this.state.isAppLoading) {
      return <AppLoading />
    }


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
          <List
            items={this.state.items}
            deleteItem={this.deleteItem}
            toggleNewPage={this.toggleNewPage}
            reorderItems={this.reorderItems}
          />
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