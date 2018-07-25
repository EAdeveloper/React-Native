import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';


import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/assets/beautifull.jpg';

import {
  addPlace, 
  deletePlace, 
  selectPlace, 
  deselectPlace  } from './src/store/actions/index';

class App extends React.Component {


placeAddedHandler = placeName =>{
 this.props.onAddPlace(placeName);
};

placeSelectedHandler = key =>{
 this.props.onSelectPlace(key)
}

placeDeletedHandler = () =>{
  this.props.onDeletePlace();
}

modalCloseHandler = ()=>{
  this.props.onDeselectPlace();
}


  render() {
  
    return (

      <View style={styles.container}>
        <PlaceDetail 
         selectedPlace={this.props.selectedPlace}
         onItemDeleted={this.placeDeletedHandler}
         onModalClosed={this.modalCloseHandler}
        />

        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>

        <PlaceList 
          places={this.props.places} 
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



// Connection between React App component and Redux store
const mapStateToProps = state =>{
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispathToProps = dispatch =>{
  return{
    onAddPlace: (name)=> dispatch(addPlace(name)),
    onDeletePlace: ()=> dispatch(deletePlace()),
    onSelectPlace: (key)=> dispatch(selectPlace(key)),
    onDeselectPlace: ()=> dispatch(deselectPlace()) 
  };
};


export default connect(mapStateToProps, mapDispathToProps)(App);