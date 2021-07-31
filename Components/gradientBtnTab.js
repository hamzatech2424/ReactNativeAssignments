import React from "react"
import { View,Text,StyleSheet } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';




const GradientBtnTab = ({ active, style, iconName, text, rotation, g1, g2, g3,angle,angleCenterX,angleCenterY }) => {

    // console.log(g1, g2, g3)

    return (

        <LinearGradient

            colors={active?['#f5badc', 'white', 'white']:['white', 'white', 'white']}


            start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
            useAngle={true}
            angle={180}
            angleCenter={{x: 1.0,y:0.7}}

            style={active?styles.Active:styles.NonActive}
        >

        

                

                    {iconName == "chat-outline" ?
                         <MaterialCommunityIcons name="chat-outline" color={"#fb40ac"} size={26} />
                        : iconName == "bell-outline" ?
                                   <MaterialCommunityIcons name="bell-outline" color={"#fb40ac"} size={26} />
                            : iconName == "beaker" ?
                                  <Octicons name="beaker" color={"#fb40ac"} size={26} />
                                       : iconName == "signal-cellular-outline" ?
                                     <MaterialCommunityIcons name="signal-cellular-outline" color={"#fb40ac"} size={26} />
                                : iconName == "user" ?
                                        <FontAwesome name="user" color={"#fb40ac"} size={26} />
                                    : null}

              
                
          

            </LinearGradient >

    )
}


export default GradientBtnTab


const styles = StyleSheet.create({
    NonActive:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",   
          borderTopWidth: 3,
          borderTopColor: "white",
        backgroundColor:"red",
    },
    Active:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        borderTopColor: "#fb40ac",
        borderTopWidth: 3,
        backgroundColor:"red",
    }
  
})