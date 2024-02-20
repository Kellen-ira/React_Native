
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

//import Shipping from './screen/sign_screen.js';
//import Images from './screen/image.js';
  //import Login from './screen/login.js';


  // import {NavigationContainer} from '@react-navigation/native';
  // import {createNativeStackNavigator} from '@react-navigation/native-stack';


//import Register from './screen/register.js';
  //const Stack = createNativeStackNavigator();
//import Scroll from './screen/scroll.js';

// import Fashion from './screen/fashion.js';

// export default function App() {
//   return (

{/* <Fashion>

</Fashion> */}

  // <Images>

  // </Images>

  //<Login>

  //</Login>

  //<Register>

  //</Register>

  // <Scroll>

  // </Scroll>


// <NavigationContainer>

// <Stack.Navigator initialRouteName='login'>
//         <Stack.Screen name="login" component={Login}/>
//        <Stack.Screen name="register" component={Register} />
//      </Stack.Navigator>

// </NavigationContainer>

// );
// }



import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
//import React from 'react'


//import { StatusBar } from 'expo-status-bar'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
//import { color } from 'react-native-elements/dist/helpers'

export default function Fashion() {
  return (
    <View>
<View  style={{display:'flex',flexDirection:'row',gap:"100%",marginTop:"10%",alignItems:'baseline',margin:"10%"}}>
<Icon name='arrow-back' backgroundColor={"#fffefa"}  borderRadius='100%'/>
<Text style={{fontWeight:'bold'}}>Search</Text>
<Icon name="tune"/>
</View>

<View>
  <TextInput 
   label='search'
   style={{borderRadius:20, width:"80%",justifyContent:'center', marginLeft:"10%"}}
   mode='offline'
   underlineColor='#fff'
   them={{roundness:25}}
   left={<TextInput.Icon size={15} Icon={"magnify"} color='#5756'/>}
   right={<TextInput.Icon size={15} Icon={"tune-variant"} color='#5756'/>}
  />
  </View>
  <View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{borderRadius:30, backgroundColor:"#ff6600", color:"white", padding:"3%",gap:"5%",width:"40%"}}><Text style={{textAlign:'center'}}>All</Text></View>
    <View style={{borderRadius:30, backgroundColor:"#fff", color:"black", padding:"4%",gap:"5%",width:"40%",borderStyle:'solid',borderWidth:1}}><Text style={{textAlign:'center'}}>Man</Text></View>
    <View  style={{borderRadius:30, backgroundColor:"#fff", color:"black",  padding:"4%",gap:"5%",width:"40%",borderStyle:'solid',borderWidth:1}}><Text style={{textAlign:'center'}}>Women</Text></View>
    <View  style={{borderRadius:30, backgroundColor:"#fff", color:"black",  padding:"4%",gap:"5%",width:"40%",borderStyle:'solid',borderWidth:1}}><Text style={{textAlign:'center'}}>Dress</Text></View>
    <View  style={{borderRadius:30, backgroundColor:"#fff", color:"black", padding:"4%",gap:"5%",width:"40%",borderStyle:'solid',borderWidth:1}}><Text style={{textAlign:'center'}}>Bab</Text></View>
   </ScrollView>
  
  </View>
  </View>

  );
  }