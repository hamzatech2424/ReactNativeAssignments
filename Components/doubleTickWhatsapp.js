import React from "react"
import {View,Text,StyleSheet} from "react-native"


const DoubleTick = ({color}) =>{

    // console.log(color)

    const styles = StyleSheet.create({
        tickView:{
            width:22,
            height:18,
            // backgroundColor:"green",
            position:"relative",
            justifyContent:"center",
            alignItems:"center"
        },
        firstTick:{
            width:12,
            height:2.5,
            backgroundColor:color,
            transform:[
                {rotateZ:"-38deg"}
            ],
            position:"absolute",
            top:4
       },
       firstTickSmall:{
         width:5,
         height:2.5,
         backgroundColor:color,
         transform:[
             {rotateZ:"50deg"}
         ],
         position:"relative",
         right:5,
         top:1
     },
     SecondTick:{
         width:13,
         height:2.5,
         backgroundColor:color,
         transform:[
             {rotateZ:"-38deg"}
         ],
         position:"relative",
         left:3,
         bottom:2,
         left:5
        //  top:1
     },
     SecondTickSmall:{
         width:3,
         height:2.5,
         backgroundColor:color,
         transform:[
             {rotateZ:"45deg"}
         ],
         position:"relative",
        //  left:0,
         bottom:1.5,
         
     },
     
     })


    return(
        <View style={styles.tickView}>
          <View style={styles.firstTick}></View>
          <View style={styles.firstTickSmall}></View>
          <View style={styles.SecondTick}></View>
          <View style={styles.SecondTickSmall}></View>
        </View>
    )
}




export default DoubleTick