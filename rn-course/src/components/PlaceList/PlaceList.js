import React from 'react';
import {StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';


const placeList = props =>{
     
    return<FlatList 
            style={styles.ListContainer}
            data={props.places}
            renderItem={(info)=> (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={()=> props.onItemSelected(info.item.key) }
                />
            )}
        />;

};



const styles = StyleSheet.create({
  
    ListContainer: {
        width: "100%",

    }

});



export default placeList;