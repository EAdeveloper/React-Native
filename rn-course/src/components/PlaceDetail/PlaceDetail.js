import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const placeDetail = props => {

    let modalContent = null;
    if (props.selectedPlace){
        modalContent = (        
            <View>
            <Image source={props.selectedPlace.image} style={styles.placeImage}/>
            <Text  style={styles.placeName}>{props.selectedPlace.name} </Text>
            </View>
        );
    }


    return(

        <Modal 
            onRequestClose={props.onModalClosed} 
            visible={props.selectedPlace !== null} 
            animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent}
            <View> 
                {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
                <TouchableOpacity onPress={props.onItemDeleted}>
                <View style={styles.deleteBtn}>
                    <Icon size={40} name="delete" color='red'/>
                </View >
                </TouchableOpacity>
                <Button title="Close" onPress={props.onModalClosed} />
            </View>
        </View>
        </Modal>
        
    );


};


const styles = StyleSheet.create({

    modalContainer:{
        margin: 22,
        // backgroundColor: 'yellow'
    },
   
    placeImage:{
        height: 200 ,
        width: "100%"
    },

    placeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 27
    },
    deleteBtn:{
        alignItems: 'center'
    }



});


export default placeDetail;