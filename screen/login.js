import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
const image = require('../assets/b.jpg')


export default function Login({navigation}) {
  return (
    <View style={{backgroundColor:"#f5f3ed",borderRadius:"35%"}}>
    <View style={{width:"100%",marginTop:"1%"}}>
        <Image source={image} style={{width:"100%",borderRadius:10}}/>
</View>
<View>
    <Text style={{textAlign:"center",width:"100%",fontWeight:'bold',marginTop:"5%",fontSize:20,marginBottom:"5%"}}>Login</Text>
    </View>
    <View style={{width:"100%"}}>
    <TextInput label='Email' 
                     mode='flat' underlineColor='white' theme={{roundness:'30%'}}
                     left={<TextInput.Icon  icon={"account-outline"}     color='#000' style={{backgroundColor:"#fcf7a4"}}></TextInput.Icon>}
                      style={{backgroundColor:"#fff",marginLeft:"10%",width:"80%",borderRadius:"30%",marginBottom:"3%"}}
                    
                    />
       
        <TextInput label='password' 
                    secureTextEntry={true}
                     
                     mode='flat' underlineColor='white' theme={{roundness:'30%'}}
                     left={<TextInput.Icon  icon={"lock-outline"}  color='#3333ff' style={{backgroundColor:"#e6f3ff"}}></TextInput.Icon>}
                     style={{backgroundColor:"#fff",marginLeft:"10%",width:"80%",borderRadius:"30%"}}
                    
                    ></TextInput>
    </View>
<View style={{display:'flex',flexDirection:'row',gap:"80%",marginTop:"5%",marginBottom:"3%",marginLeft:"10%",alignItems:"baseline"}}>
    <Text style={{color:"#0000cc"}}>ForgetPassword?</Text>
<TouchableOpacity style={{backgroundColor:'#000',borderRadius:20,width:"35%",height:30}}  onPress={() =>
        navigation.navigate("Register")}>
        <Text style={{color:'#fff',padding:"2%",textAlign:'center',marginTop:"1%",}}>Login</Text></TouchableOpacity>
</View>
<View style={{display:'flex',flexDirection:'row',marginLeft:"10%",gap:70,marginTop:30,marginBottom:"5%"}}>
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