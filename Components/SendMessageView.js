import React from "react"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from "react-native"
import DoubleTick from "../Components/doubleTickWhatsapp"


const SendMessageView = ({ tetDikhana }) => {
    return (

        <View style={{ marginVertical: 5, height: "auto", width: "auto", maxWidth: 200, marginLeft: 8, alignItems: "flex-start", backgroundColor: "red" }}>


            <View style={{ backgroundColor: "#ECE5DD", width:"auto", height: "auto", borderRadius: 10 }}>



                {/* <View style={{backgroundColor:"green",width:"auto",height:"auto"}}> */}


                <View style={{ flexDirection: "row", height: "auto",width:"auto",display:"flex",alignItems:"flex-end" }}>
                    <Text style={{ backgroundColor: "grey",maxWidth:200,padding:5}}>acacascaacaacacacacsacacasascaaascacacascsaacacascacacaccaccaccas </Text>  




                        <View style={{ flexDirection: "row", height: 18, width: 50,justifyContent:"flex-end",alignItems:"flex-end"}}>
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




// <View style={{width:200,backgroundColor:"red",flexDirection:"row",flexWrap:"wrap"}}>
//             <View style={{flexDirection:"row",width:200,alignItems:"flex-end",justifyContent:"flex-start"}}>
//                 <Text style={{maxWidth:200,width:"auto",flexDirection:"row"}}>hsdvsvsscacascasacasacsascascacacc 
           


//                              <View style={{ flexDirection: "row", height: 18, width: "auto",justifyContent:"flex-end",alignItems:"flex-end"}}>
//                              <View style={{ width: 25, height: 18, paddingTop: 4 }}>
//                                  <Text style={{ fontSize: 9, color: "grey" }}>11:16</Text>
//                              </View>

//                              <View style={{ width: 22, height: 18, paddingTop: 3 }}>


//                                  <DoubleTick color={"#3498DB"} />

//                             </View>

//                          </View>

//                          </Text>

//           </View>

// </View>




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

