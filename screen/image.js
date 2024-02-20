import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Entypo from "react-native-vector-icons/Entypo"
const image2a= require('../assets/aa.jpeg')
const image2b= require('../assets/ab.jpeg')
const image2c= require('../assets/ac.jpeg')
const image2d= require('../assets/ad.jpeg')

export default function Images() {
    return (
<View>
    <View style={{display:'flex',flexDirection:'row',gap:"80%",marginTop:"10%",marginLeft:"10%",alignItems:'baseline'}}>
        
    
    <FontAwesome6 name="arrow-left-long" size={15}/>
    <Text style={{fontWeight:'bold',fontSize:"20%"}}> Text to image</Text>
    <Entypo name="dots-three-vertical" size={15} />
    
       </View>
<View style={{width:"100%",display:'flex',flexDirection:'row',flexWrap:'wrap',marginTop:"10%",gap:10}}>
    <Image source={image2a} style={{width:"40%",marginLeft:"8%"}}/>
    <Image source={image2b} style={{width:"40%"}}/>
    <Image source={image2c} style={{width:"40%",marginLeft:"8%"}}/>
    <Image source={image2d} style={{width:"40%"}}/>
</View>

</View>


    );
}
