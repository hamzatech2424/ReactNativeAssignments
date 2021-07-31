import React from "react"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from "react-native"
import DoubleTick from "../Components/doubleTickWhatsapp"


const SendMessageView = ({ tetDikhana }) => {
    return (


//Ata Bhai's Method
// <View style={{width:"100%"}}>

//     <View style={{maxWidth:"70%",backgroundColor:"grey"}}>

// <View style={{minHeight:25,marginBottom:10,backgroundColor:"orange"}}>
//     <Text>jskacasckascacacaccacsacasascascsascacasscascascscaccsaassscacsascascsac</Text>
// </View>


// <View style={{height:10,backgroundColor:"red",justifyContent:"flex-end",alignItems:"flex-end"}}>
//     <View style={{width:70,height:25,backgroundColor:"pink"}}>
//         <Text>12:00</Text>
//     </View>

// </View>

//     </View>


// </View>





//My Method
<View style={{maxWidth:"70%",justifyContent:"center",alignItems:"flex-start",marginLeft:5}}>
    <View style={{borderRadius:5,backgroundColor:"#ECE5DD",borderRadius:5,position:"relative",margin:3}}>
    <View
         style={styles.triangle}>
     </View>

     <View style={{paddingHorizontal:10,paddingVertical:5,alignItems:"center"}}>
         <Text>{tetDikhana.message}
             <Text style={{color:"#ECE5DD"}}>AAAAAA</Text>
         </Text>
     </View>

     <View style={{position:"absolute",bottom:0,right:0,marginHorizontal:5,marginBottom:3}}>
             
                              <View style={{ flexDirection: "row", height: 18, width: "auto",justifyContent:"flex-end",alignItems:"flex-end"}}>
                              <View style={{ width: 25, height: 18, paddingTop: 4 }}>
                                  <Text style={{ fontSize: 9, color: "grey" }}>11:16</Text>
                              </View>

                             <View style={{ width: 22, height: 18, paddingTop: 3 }}>
                                  <DoubleTick color={"#3498DB"} />

                             </View>

                          </View>

     </View>

    </View>

</View>

    )
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ECE5DD",
        transform: [
            { rotateZ: "64deg" }
        ],
        position: "absolute",
        top: -2.6,
        left: -2.5
    }
})


export default SendMessageView





{/* <Text style={{color:"black",paddingTop:"2%"}}>{tetDikhana.message}</Text> */ }


//  backgroundColor:"#ECE5DD"







// <View style={{ marginVertical: 5, width: "auto", maxWidth: 200, marginLeft: 8, alignItems: "flex-start" }}>


// <View style={{ backgroundColor: "#ECE5DD", width: "auto", height: "auto", position: "relative", borderRadius: 10 }}>
//     <View
//         style={styles.triangle}>
//     </View>



//     <View style={{ width: "auto", height: "auto", maxWidth:200,marginHorizontal: 10, marginTop: 5, marginBottom: 4, flexDirection: "row", maxWidth: 200, justifyContent: "flex-end", flexWrap: "wrap", borderTopRightRadius: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>


//         <View style={{ height: "auto", width: "auto",flexDirection:"row",backgroundColor:"orange",alignItems:"flex-end" }}>

//             <Text style={{ color: "black",backgroundColor:"green",flexDirection:"row"}}>{tetDikhana.message}
//              <View style={{ flexDirection: "row",height:18,width:50,backgroundColor:"red"}}>
//             <View style={{ width: 25, height: 18, paddingTop: 4 }}>
//                 <Text style={{ fontSize: 9, color: "grey" }}>11:16</Text>
//             </View>

//             <View style={{ width: 22, height: 18, paddingTop: 3 }}>
//                 <DoubleTick color={"#3498DB"} />

//             </View>

//         </View>
//         </Text>



//         </View>





//     </View>



// </View>




// </View>

