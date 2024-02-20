import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView,Image } from 'react-native';
import Search from './screen/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fash from './screen/Fash';
import Fashion from './screen/Fash';
import { FontAwesome } from "@expo/vector-icons";
//import { TextInput, Checkbox, MD3Colors, Button } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  const data = [
    {
      title: '#bestSeller',
      image: 'https://img.freepik.com/premium-photo/denim-jeans-store-detail-row-blue-jeans-hung-plastic-hangers-store-many-jeans-are-hanging-counter_542154-1307.jpg',
       text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#2bestSeller',
      image: 'https://www.thespruce.com/thmb/_fp_9uDi1-WErzAUhALyZhUYCMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1408172736-188d50d87f9c4083b3217f3b18108e99.jpg',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#3bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.grbJGpNWRHaSp_YTbJFywQHaE8&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#4bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.xe61Ugagcj_rwPr4HvfQvQHaFh&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
    {
      title: '#5bestSeller',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Dw11c8nn6mEhoYV8xvdWGwHaE7&pid=Api&P=0&h=220',
      text: 'Gj Jean',
      price: '$46.00',
    },
  ];


  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{ borderWidth: 1, borderColor: '#cccccc', borderRadius: 80, padding: 10, backgroundColor: '#f0f0f0', marginLeft: 20}} />
        <Text style={{ fontSize: 25 }}>Search</Text>
        <Entypo name="sound-mix" size={24} color="black" style={{ borderRadius: 80, padding: 10, marginRight: 20 }} />
      </View>
      <View style={{ flexDirection: 'row', width: 300, borderWidth: 1, borderColor: '#cccccc', borderRadius: 80, padding: 10, backgroundColor: '#f0f0f0', marginLeft: 20, marginTop: 10 }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search.....' style={{ flex: 1, marginLeft: 10 }} />
        <MaterialCommunityIcons name="tune-variant" size={30}/>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingLeft: 20, backgroundColor: '#fefefe' }}>
        
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'#c59c5e',borderRadius:15,padding:5,color:'white',width:100,bordercolor:'#c59c5e'}}>All</Text>
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:100,borderStyle:'solid',borderWidth:1 }}>Man</Text>
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:100,borderStyle:'solid',borderWidth:1 }}>Woman</Text>
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:100,borderStyle:'solid',borderWidth:1 }}>Baby</Text>
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:100 ,borderStyle:'solid',borderWidth:1}}>Note</Text>
        <Text style={{ textAlign:'center',fontSize: 15, marginLeft: 10, marginTop: 20, backgroundColor:'white',borderRadius:15,padding:5,width:100 ,borderStyle:'solid',borderWidth:1}}>Picture</Text>
        </ScrollView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingLeft: 8 }}>
        {data.map((item, index) => (
          <View style={{ margin: 10, width: 200, borderRadius: 10,height:200 }} key={index}>
            <Search title={item.title} image={item.image} text={item.text} price={item.price} />
          </View>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 20, }}>
        Product result (45)
      </Text>
      
      <Fashion/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 50
  },
});








