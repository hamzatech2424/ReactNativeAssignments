import React from "react"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from "react-native"
import DoubleTick from "../Components/doubleTickWhatsapp"


const ReceiveMessageView = ({tetDikhana}) =>{
    return(

<View style={{ width:"auto",maxWidth:200,alignItems: "flex-end",marginLeft:"42%",}}>
    <View style={{borderRadius:5,backgroundColor:"#DCF8C6",borderRadius:5,position:"relative",margin:3}}>
    <View
         style={styles.triangle}>
     </View>

     <View style={{paddingHorizontal:10,paddingVertical:5,alignItems:"center"}}>
         <Text>{tetDikhana.message}
             <Text style={{color:"#DCF8C6"}}>AAAAAA</Text>
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
    triangle:{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#DCF8C6",
        transform:[
            {rotateZ:"64deg"}
        ],
        position:"absolute",
        top:-2.6,
        right:-5
    }
})


export default ReceiveMessageView