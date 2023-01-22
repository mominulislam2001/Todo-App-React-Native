import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';
import myImage from '../assets/images/test.jpg'
const InputPlace = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={{
          width: 200,
          borderBottomWidth: 1,
          borderColor:"black",
          padding:7
        }}
        placeholder="Clean the dishes"
        value={props.inputValue}
        onChangeText={text=>props.setInputValue(text)}
       />
       <Button 
       onPress={()=>{

        if(props.inputValue!==""){
          props.setPlaceList([...props.placeList,
            {key:Math.random().toString(),
            value: props.inputValue,
            image: myImage,
          }]);
          props.setInputValue("");
        }
    

       }}
       title="Add" />

      </View>
  );
}

const styles = StyleSheet.create({
   inputView: {
      width:"100%",
      padding: 20,
      marginTop:50,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
  
    },
    
  });
  
export default InputPlace;