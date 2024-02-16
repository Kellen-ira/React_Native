import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
const image = require('../assets/a.jpg')


export default function Register() {
  return (
    <View style={{backgroundColor:"#f2f2f2",borderRadius:"35%"}}>
    <View style={{width:"100%",marginTop:"5%"}}>
        <Image source={image} style={{width:"100%",borderRadius:10}}/>
</View>
<View>
    <Text style={{textAlign:"center",width:"100%",fontWeight:'bold',marginTop:"-4%",fontSize:20,marginBottom:"5%"}}>Register</Text>
    </View>
    <View style={{width:"100%"}}>
    <TextInput label='Username' 
                     mode='flat' underlineColor='white' theme={{roundness:'30%'}}
                     left={<TextInput.Icon  icon={"account-outline"}     color='#ff9900' style={{backgroundColor:"#fcf7a4"}}></TextInput.Icon>}
                      style={{backgroundColor:"#fff",marginLeft:"10%",width:"80%",borderRadius:"30%",marginBottom:"3%"}}
                    
                    />
    <TextInput label='Email' 
                     mode='flat' underlineColor='white' theme={{roundness:'30%'}}
                     left={<TextInput.Icon  icon={"email-outline"}     color='#1aff66' style={{backgroundColor:"#99ffb9"}}></TextInput.Icon>}
                      style={{backgroundColor:"#fff",marginLeft:"10%",width:"80%",borderRadius:"30%",marginBottom:"3%"}}
                    
                    />
       
        <TextInput label='Password' 
                    secureTextEntry={true}
                     
                     mode='flat' underlineColor='white' theme={{roundness:'30%'}}
                     left={<TextInput.Icon  icon={"lock-outline"}  color='#3333ff' style={{backgroundColor:"#e6f3ff"}}></TextInput.Icon>}
                     style={{backgroundColor:"#fff",marginLeft:"10%",width:"80%",borderRadius:"30%",marginBottom:"3%"}}
                    
                    ></TextInput>
    </View>
    <View style={{width:"100%"}}>
    <TouchableOpacity style={{backgroundColor:'#000',borderRadius:"30%",width:"80%",marginLeft:"10%"}}>
    <Text style={{color:'#fff',padding:"5%",textAlign:'center',marginTop:"1%"}}>Register</Text>
    </TouchableOpacity>
</View>
<View style={{display:'flex',flexDirection:'row',marginLeft:"20%",gap:70,marginTop:30,marginBottom:"5%"}}>
<Icon 
            name="facebook"
            type="material"
            color="#0f37d6"
            backgroundColor="#fff"
            
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            <Icon 
            name="google"
            type="font-awesome"
            color="#ff8533"
            backgroundColor="#fff"
            
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            <Icon 
            name="apple"
            type="material"
            color="#000"
            backgroundColor="#fff"
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            
</View>
</View>


);
}