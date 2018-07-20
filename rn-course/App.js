import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/assets/beautifull.jpg';


export default class App extends React.Component {

state ={
  places: [],
  selectedPlace: null
}


placeAddedHandler = placeName =>{
 
  this.setState(prevState =>{
    return {
      places: prevState.places.concat({
        key: Math.random().toString(), 
        name: placeName,
        image:{
          uri: 'https://facebook.github.io/react/logo-og.png'
        }
      })
    }
  });
};

placeSelectedHandler = key =>{
  this.setState(prevState => {
    return{
      selectedPlace: prevState.places.find(place=>{
        return place.key === key;
      })
    };

  });
   // this.setState(prevState=>{
  //   return {
  //     places: prevState.places.filter(place=>{
  //       return place.key !== key;
  //     })
  //   }
  // });
}

placeDeletedHandler = () =>{
  this.setState(prevState=>{
    return {
      places: prevState.places.filter(place=>{
        return place.key !== prevState.selectedPlace.key;
      }),
      selectedPlace: null
    }
  });
}

modalCloseHandler = ()=>{
  this.setState({
    selectedPlace: null
  });
}



  render() {
  
    return (

      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
         onItemDeleted={this.placeDeletedHandler}
         onModalClosed={this.modalCloseHandler}
        />

        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>

        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler}
         
        />
       
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
