import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";


export default function SignIN() {
  return (
   <View style={{margin:30}}>
    <View>
        <Text style={{marginTop:50,marginBottom:10,textAlign:'center', fontWeight:'bold'}}>Sign In</Text>
        <Text style={{textAlign:'center',marginBottom:50}}>Welcome back! Please enter your details</Text>
    </View>
    <View style={{gap:20,width:"100%"}}>
    <TextInput label='ikellen2016@gmail.com' 
                    
                   
                     mode='offline'
                     left={<TextInput.Icon  icon={"email-outline"}     color='#ff33cc' style={{backgroundColor:"#ff99ff"}}></TextInput.Icon>}
                      
                    
                    ></TextInput>
       
        <TextInput label='password' 
                    secureTextEntry={true}
                     
                     mode='offline'
                     left={<TextInput.Icon  icon={"lock-outline"}  color='#3333ff' style={{backgroundColor:"#3399ff"}}></TextInput.Icon>}
                      
                    
                    ></TextInput>
    
    </View>
    <View  style={{display:'flex',flexDirection:'row'}}>
        <Checkbox.Android label="Remember Me" status="unchecked" />
        <Text style={{marginTop:10}}>Remember Me</Text>
    </View>
    
<View>
    <Text style={{textAlign:'center',color:'#0f37d6',marginTop:"20%",marginBottom:10}}>ForgetPassword</Text>
</View>
<View style={{width:"100%"}}>
    <TouchableOpacity 
    style={{backgroundColor:'#0f37d6',padding:10,width:"90%",
    marginLeft:10,border:2,borderRadius:30,padding:20,marginBottom:8}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Sign In</Text></TouchableOpacity>
</View>
<View>
    <View style={{width:"100%",display:'flex',flexDirection:'row',justifyContent:'space-start',marginTop:10}}>
    <Text style={{width:"40%",marginLeft:30}}>Create account</Text>
    <TouchableOpacity 
    style={{backgroundColor:'#f2f5fa',borderRadius:20,width:"25%",height:30,marginLeft:40}}>
        <Text style={{color:'orange',padding:10,textAlign:'center'}}>Sign Up</Text></TouchableOpacity>
                          </View>
</View>
<View style={{display:'flex',flexDirection:'row',marginLeft:"10%",gap:70,marginTop:30}}>
<Icon 
            name="facebook"
            type="material"
            color="#0f37d6"
            
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            <Icon 
            name="google"
            type="font-awesome"
            color="#fff"
            backgroundColor="#ff471a"
            
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            <Icon 
            name="apple"
            type="material"
            color="#000"
            
            size={30}
            iconStyle={{padding:5,borderRadius:"100%"}}
            />
            
</View>
   </View>
   
  );
}


