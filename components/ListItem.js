import React from "react";
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native'

const ListItem =(props)=>{
    return (
       
       <TouchableOpacity onLongPress={props.onItemPressed} >
             <View style={styles.listitem} >
                <Text>
                        {props.placeName}
                </Text>
             </View>
        </TouchableOpacity>
        
    );
}

const styles =StyleSheet.create({
    listitem:{
        width:"100%",
        padding:10,
        backgroundColor:"#eee",
        margin:5
    }
})

export default ListItem;