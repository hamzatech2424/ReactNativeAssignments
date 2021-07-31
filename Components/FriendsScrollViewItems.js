import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';






const FriendsScrollViewItems = ({name,details}) => {
    return(

        <View style={{ width: "100%", height: 45, flexDirection: "row",marginBottom:10 }}>
        <View style={{ width: "15%", height: "100%",justifyContent:"center",alignItems:"center" }}>
         <View style={{width:30,height:30,borderRadius:15}}>
             <Image source={require("../Constants/images/men.jpg")} style={{height:30,width:30,borderRadius:15}} />
         </View>
        </View>

        <View style={{ width: "70%", height: "100%",justifyContent:"center",paddingLeft:10 }}>
           <Text>{name}</Text>
           <Text style={{color:"grey",fontSize:12}}>{details}</Text>
        </View>

        <View style={{ width: "15%", height: "100%", flexDirection:"row",justifyContent:"center",alignItems:"center" }}>

        <MaterialCommunityIcons name="star-circle-outline" color="grey" size={21} />
        <Text style={{color:"grey",paddingLeft:3}}>9</Text>

        </View>
    </View>

    )
}


export default FriendsScrollViewItems