import * as React from "react";
import {View } from "react-native"


const View = ()=>{

    return <View style={{marginTop:20}}>
        {props.children}
    </View>
}
export default View;