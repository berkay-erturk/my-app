import * as React from "react";
import {View,Text,TouchableOpacity, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"




// bunu her sayfaya eklemessen o sayfada navigation işlemi yapamassın


const DetailsScreen = (props) => { // Klasik sayfa fonskiyosu
const navigation = useNavigation() 
console.log(props.route.params.state)
    return <SafeAreaView>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{marginTop:150}}>
            <Text>{props.route.params.state}</Text>
        </TouchableOpacity>
    </SafeAreaView>
}
export default DetailsScreen;// bunu yazmazsan Stackte çağıramazsın