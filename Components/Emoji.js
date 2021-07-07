import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Svg, { Path,Ellipse } from "react-native-svg"




const Emoji = ({ eyeStyleRight, eyeStyleLeft, mouthStyle, prominent, SizeBhaeja,mouthColor ,strokeLinecap,fill }) => {


    console.log(typeof SizeBhaeja, "Page")



    return (
        <View style={prominent ? [{ ...styles.EmojiStyle }, { width: parseInt(SizeBhaeja), height: parseInt(SizeBhaeja), borderRadius: parseInt(SizeBhaeja) / 2 }] : styles.EmojiStyleProminent}>

            <View
                // onPress={onmakingActive}
                style={styles.EmojiInnerView} >
                <View style={styles.eyesView}>

                    <View style={prominent ? { ...eyeStyleLeft, backgroundColor: "#9F6507" } : eyeStyleLeft} ></View>
                    <View style={prominent ? { ...eyeStyleRight, backgroundColor: "#9F6507" } : eyeStyleRight} ></View>

                </View>

                <View style={styles.Mouthiew}>

                {/* <View style={prominent?{...GreatmouthStyle,backgroundColor:"#9F6507"}:GreatmouthStyle} ></View> */}

                <Svg height="25" width="50" >
                <Path
                    d={mouthStyle}
                    fill={fill}
                    stroke={prominent?mouthColor:"white"}
                    strokeWidth="5"
                    strokeLinecap={strokeLinecap}
                />
              
              </Svg>
           
            
                      

                </View>
              

            </View>

        </View>

        //  </View >
    )
}


const styles = StyleSheet.create({

    EmojiStyle: {
        width: 55,
        height: 55,
        backgroundColor: "#F6D44B",
        borderRadius: 55 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2.5,
    },
    EmojiStyleProminent: {
        width: 55,
        height: 55,
        backgroundColor: "grey",
        borderRadius: 55 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2.5,
    },
    EmojiInnerView: {
        // backgroundColor: "pink",
        width: "70%",
        height: "70%",
        flexDirection: "column",
        // justifyContent:"center"
    },
    eyesView: {
        width: "80%",
        height: "50%",
        // backgroundColor: "green",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center"
    },

    Mouthiew: {
        width: "100%",
        height: "50%",
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"3%"
    },



})




//      <View style={prominent?{...mouthStyle,backgroundColor:"#9F6507"}:mouthStyle} >









export default Emoji