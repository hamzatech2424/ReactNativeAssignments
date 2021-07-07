import React from "react"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from "react-native"
import DoubleTick from "../Components/doubleTickWhatsapp"


const ReceiveMessageView = ({tetDikhana}) =>{
    return(
        <View style={{ marginVertical:5, width:"auto",maxWidth:200,alignItems: "flex-end",marginLeft:"42%"}}>

<View style={{ backgroundColor: "#DCF8C6", width: "auto", height: "auto", position: "relative", borderRadius: 10 }}>
                <View
                    style={styles.triangle}>
                </View>



                <View style={{ width: "100%", height: "auto", marginHorizontal: 10, marginTop: 5, marginBottom: 4, flexDirection: "row", maxWidth: 200, justifyContent: "flex-end", flexWrap: "wrap", borderTopRightRadius: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>


                    <View style={{ height: "auto", width: "auto", flexDirection: "row", justifyContent: "center", position: "relative" }}>

                        <Text style={{ color: "black" }}>{tetDikhana.message}</Text>

                    </View>


                    <View style={{ flexDirection: "row", width: "auto", marginLeft: "3%" }}>
                        <View style={{ width: 25, height: 18, paddingTop: 4 }}>
                            {/* <Text style={{ fontSize: 9, color: "grey" }}>11:16</Text> */}
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