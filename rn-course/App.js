import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';



export default class App extends React.Component {

state ={
  placeName: "",
  places: []
}

placeNameChangedHandler = val =>{
  this.setState({
    placeName: val
  });
};

placeSubmitHandler = () =>{
  if (this.state.placeName.trim() === ""){
    return;
  }

  this.setState(prevState =>{
    return {
      places: prevState.places.concat(prevState.placeName)
    }
  });
};




  render() {
    const placesOutput= this.state.places.map( (place, i) =>(
      <ListItem key={i} placeName={place} />
    ));

    return (

      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <Button
            style={styles.placeButton}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress= {this.placeSubmitHandler}
          />
        </View>
        <View style={styles.ListContainer}>
          {placesOutput}
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },

  placeInput: {
    width: "70%"

  },

  placeButton: {
    width: "30%"
  },

  ListContainer: {
    width: "100%",

  }

 

});
