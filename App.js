import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

//imported Js Files
import InputPlace from './components/InputPlace';
import PlaceList from './components/PlaceList';
import PlaceDetail from './components/PlaceDetail';
//..

export default function App() {

  const [inputValue , setInputValue] = useState("");
  const [placeList,  setPlaceList ] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null)
  

  const handleSelectedPlace=(key)=>{

    const place = placeList.find(place =>{
      return place.key === key;
    });

    setSelectedPlace(place);
  }
  
  const handleHideModal =()=>{
    setSelectedPlace(null);

  }
  const handleDeleteTodo =(key)=>{
     setPlaceList(
      placeList.filter(place => 
        place.key !== key)
     );
     setSelectedPlace(null);
  }
 
  return (
    <View style={styles.container}>

      {selectedPlace!==null?<PlaceDetail place = {selectedPlace}
       handleHideModal={handleHideModal} 
       handleDeleteTodo={handleDeleteTodo} />:null}
   
     <InputPlace 
     inputValue={inputValue}
     setInputValue={setInputValue}
     placeList={placeList}
     setPlaceList={setPlaceList}
     />
   
    <PlaceList placeList={placeList} 
    handleSelectedPlace={handleSelectedPlace}
   />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'column'  },
 
  
});
