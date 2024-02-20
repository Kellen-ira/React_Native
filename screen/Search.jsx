import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Search({ title, image, price, text }) {
  return (
    <>
    <View style={styles.container}>
      
      <ImageBackground source={{ uri: image }} imageStyle={{width:200, height:150,borderRadius:20}} >
      <View style={{backgroundColor:'#c59c5e',width:100,marginTop:10,marginLeft:10,padding:5,borderRadius:15}}><Text style={{color:'white'}}>{title}</Text></View>
      <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'rgba(000,000,000,0.5)',height:40, width:200,top:73,borderBottomEndRadius:20,borderBottomStartRadius:20 }}>
        <Text style={{color:'white'}}>{price}</Text>
        <Text style={{color:'white'}}>{text}</Text>
      </View>
    
      </ImageBackground>
      
    </View>
    
    </>
  );
}





const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // img: {
  //   width: 100, 
  //   height: 100,
  // },
});