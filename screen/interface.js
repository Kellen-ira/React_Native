import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function Sign() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View>
        <Text style={styles.hd}>Todo</Text>
        </View>
       <View>
        <Text style={{marginRight:-10}}>Todo List Items</Text>
       </View>
        <View>
          <TextInput
        style={{height: 40,borderWidth:2,borderRadius:10,padding:10,width:300,marginBottom:15,borderStyle:'dotted'}}
        value="1 Cleaning"
        
      />
       <TextInput
        style={{height: 40,borderWidth:2,borderRadius:10,padding:10,width:300,marginBottom:15,borderStyle:'dotted'}}
        value="1 Cleaning"
        />
          <TextInput
        style={{height: 40,borderWidth:2,borderRadius:10,padding:10,width:300,marginBottom:15,borderStyle:'dotted'}}
        value="1 Cleaning"
        
      />
       <TextInput
        style={{height: 40,borderWidth:2,borderRadius:10,padding:10,width:300,marginBottom:100,borderStyle:'dotted'}}
        value="1 Cleaning"
        />

</View>
<View style={{width:"100%"}}>
  
<TextInput style={{height: 40,borderBottomWidth:2,borderRadius:10,padding:10,textAlign:'left',width:"60%",marginLeft:10}}
  placeholder="Enter new todo items"
/>


<TouchableOpacity style={{backgroundColor:'orange',padding:10,width:"20%",marginLeft:300,marginTop:-40}}>
<Text style={{color:'#fff'}}>Add Todo</Text>
  </TouchableOpacity>
  
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   hd:{
    marginTop:40,
    backgroundColor:'orange',
    width:400,
    height:60,
    marginRight:10,
    marginBottom:40,
    textAlign:'right',
    padding:10,
    color:'#fff',

   }
});
