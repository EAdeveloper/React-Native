import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautifull.jpg';


export default class App extends React.Component {

state ={
  places: []
}


placeAddedHandler = placeName =>{
 
  this.setState(prevState =>{
    return {
      places: prevState.places.concat({
        key: Math.random().toString(), 
        value: placeName,
        image: placeImage
      })
    }
  });
};

placeDeletedHandler = key =>{
  this.setState(prevState=>{
    return {
    // Filter method filter the array and return the new array
    //The logic below will only return the places "not selected to be delete, will filter out the place with the key selected"
      places: prevState.places.filter(place=>{
        return place.key !== key;
      })
    }
  });
}



  render() {
  
    return (

      <View style={styles.container}>
      
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
       
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
  
});
