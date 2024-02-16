import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { CheckBox,Icon } from "react-native-elements";


export default function Shipping() {

    return (

<View>
    <View style={{width:"100%"}}>
    <View style={{backgroundColor:"#f0f8ff",borderRadius:"10%", width:"90%",height:"55%",marginTop:"20%",marginLeft:"5%",borderColor:"#0000ff",borderWidth:"2%"}}>
    <Text style={{marginLeft:"5%",marginTop:"20%",marginBottom:"2%",color:"#0000ff"}}>Sunamganj</Text>
    <Text style={{marginLeft:"5%",marginBottom:"5%"}}>+971-50-1234567</Text>
    <Text style={{marginLeft:"5%"}}>Room #1-Ground Floor,Al Najoun Bulding,24 B</Text>
    <Text style={{marginLeft:"5%",marginBottom:"10%"}}>Street,Dubai-United Arab Emirates</Text>
    </View>
    </View>
</View>

        );
    }
    