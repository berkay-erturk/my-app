import * as React from "react";
import {View,Text, TouchableOpacity, Alert, SafeAreaView, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react/cjs/react.development";



const HomeScreen= ()=> {
    const navigation = useNavigation()

   const [state, setstate] = useState()
   console.log(state)
return <SafeAreaView style={styles.safe}>
    <View style={{backgroundColor:'red',width:412,height:50,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24,color:'white'}}>Header</Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
        <View style={{backgroundColor:'red',borderRadius:150,height:220,width:220,justifyContent:'center',alignItems:'center'}}>
            <Text>
                %80 doldu
            </Text>
        </View>
    </View>
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Hedefiniz için % 20 daha içmelisiniz</Text>
        <TextInput style={{backgroundColor:'red',width:50,height:50}}
         onChangeText={text => setstate(text)}/>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{state})} style={{width:200,height:50,background:'red',borderRadius:10,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.text}>
            İleri
        </Text>
    </TouchableOpacity>
    </View>
</SafeAreaView>
}

const styles ={
    safe:{
flex:1,

    },
    text:{
color:'red',
fontSize:20
    }
}
export default HomeScreen;