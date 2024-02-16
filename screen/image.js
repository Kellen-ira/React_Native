import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
const image2a= require('../assets/d.jpeg')
const image2b= require('../assets/w.jpeg')
const image2c= require('../assets/x.jpeg')
const image2d= require('../assets/z.jpeg')

export default function Images() {
    return (
<View style={{margin:10}}>
    <View><Text>Text to image</Text></View>
<View style={{width:"100%",display:'flex',flexDirection:'row',flexWrap:'wrap',marginTop:"10%",gap:10}}>
    <Image source={image2a} style={{width:"40%"}}/>
    <Image source={image2b} style={{width:"40%"}}/>
    <Image source={image2c} style={{width:"40%"}}/>
    <Image source={image2d} style={{width:"40%"}}/>
</View>

</View>


    );
}
