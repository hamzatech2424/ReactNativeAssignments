import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import {  Marker, Callout } from "react-native-maps"



const CustomMArkers = ({data}) => {  

    // console.log(data)

    return(
        
        <Marker
        // draggable
        coordinate={{
            latitude: data.locationLat,
            longitude: data.locationLong,
        }}
    // onDragEnd={
    //     (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
    //   }
    // pinColor="#03B8F7"
    // image={require("../assets/images/markerPerfect.png")}

    >



        <Callout tooltip>
            <View>
                <View style={styles.Bubble}>
                    <View style={{width:"100%",height:"100%"}}>
                        <View style={{backgroundColor:"grey",width:"85%",height:"45%",alignSelf:"center",marginTop:10,marginBottom:10}}>

                        </View>

                        <View style={{height:"40%",width:"85%",alignSelf:"center"}}>

                            <View style={{height:"35%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:13}}>Title:</Text>
                            <Text style={{fontWeight:"bold"}}>{data.title}</Text>
                            </View>

                            <View style={{height:"65%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:13}}>Description:</Text>
                            <Text style={{fontWeight:"bold"}}>{data.description}</Text>
                            </View>

                        </View>

                    </View>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
            </View>
        </Callout>
    </Marker>

    )

}


export default CustomMArkers


const styles = StyleSheet.create({
    Bubble: {
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: "#ccc",
        borderWidth: 0.5,
        // padding: 15,
        width: 150,
        height:200,
        backgroundColor:"white",
        marginTop: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5,
    },
    arrow: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5
    },
 
})
