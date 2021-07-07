import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Emoji from "../Components/Emoji"
import Svg, { Path,Ellipse } from "react-native-svg"


const Assignmaent3 = () => {

    const [input,Setinput] = useState(0)
    const [Size, setSize] = useState(65)
    const [terribleActive,setterribleActive] = useState(false)
    const [BadActive,setBadActive] = useState(false)
    const [OkayActive,setOkayActive] = useState(false)
    const [GoodActive,setGoodActive] = useState(false)
    const [GreatActive,setGreatActive] = useState(false)
  




    return (
        <View style={styles.container}>


            <View style={styles.Top} >

                <Text style={styles.textColor}>Enter Your Choice of Size</Text>
                <TextInput
                    placeholder="e.g 5,10..."
                    style={styles.SizeTextInputStyle}
                    keyboardType={"number-pad"}
                    onChangeText={(txt) => Setinput(txt)}
                    // onEndEditing={() => { setSize(Size) }}
                />
                <TouchableOpacity
                onPress={()=>setSize(input)}
                style={styles.EnterBtn}
                >
                    <Text style={styles.EnterBtnText}>Enter</Text>
                    </TouchableOpacity>

            </View>






            <View style={styles.Bottom} >

                <View style={styles.EmojiBarView}>

                  
     {/* <View style={{backgroundColor:"red",width:"100%",height:100,jus}}> */}

                    <View style={styles.behindEmojiLine} >


                        <TouchableOpacity
                        activeOpacity={0.8}
                            onPress={() => {
                                setterribleActive(true)
                                setBadActive(false)
                                setOkayActive(false)
                                setGoodActive(false)
                                setGreatActive(false)
                            }}
                            style={styles.EmojiView}>
                            <Emoji
                                eyeStyleLeft={styles.TerribleEyeStyleLeft}
                                eyeStyleRight={styles.TerribleEyeStyleRight}
                                mouthStyle={"M15 10 Q25,0 36,10"}
                                mouthColor={"#9F6507"}
                                prominent={terribleActive}
                                SizeBhaeja={Size}
                                fill={"none"}
                                strokeLinecap={"round"}

                            />
                            <Text style={terribleActive ? { color: "black" } : { color: "grey" }}>Terrible</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                         activeOpacity={0.8}
                            onPress={() => {
                                setterribleActive(false)
                                setBadActive(true)
                                setOkayActive(false)
                                setGoodActive(false)
                                setGreatActive(false)
                            }}
                        style={styles.EmojiView}>
                            <Emoji
                                eyeStyleLeft={styles.BadEyeStyleLeft}
                                eyeStyleRight={styles.BadEyeStyleRight}
                                mouthStyle={"M15 10 Q25,0 36,10"}
                                SizeBhaeja={Size}
                                mouthColor={"#9F6507"}
                                prominent={BadActive}
                                fill={"none"}
                                strokeLinecap={"round"}
                            />
                            <Text style={BadActive ? { color: "black" } : { color: "grey" }}>Bad</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                         activeOpacity={0.8}
                          onPress={() => {
                            setterribleActive(false)
                            setBadActive(false)
                            setOkayActive(true)
                            setGoodActive(false)
                            setGreatActive(false)
                        }}
                        style={styles.EmojiView}>
                            <Emoji
                                eyeStyleLeft={styles.OkayEyeStyleLeft}
                                eyeStyleRight={styles.OkayEyeStyleRight}
                                mouthStyle={"M15 13 Q25,10 36,8"}
                                mouthColor={"#9F6507"}
                                SizeBhaeja={Size}
                                prominent={OkayActive}
                                fill={"none"}
                                strokeLinecap={"round"}
                            />
                            <Text style={OkayActive ? { color: "black" } : { color: "grey" }}>Okay</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                         activeOpacity={0.8}
                          onPress={() => {
                            setterribleActive(false)
                            setBadActive(false)
                            setOkayActive(false)
                            setGoodActive(true)
                            setGreatActive(false)
                        }}
                        style={styles.EmojiView}>
                            <Emoji
                                eyeStyleLeft={styles.GoodEyeStyleLeft}
                                eyeStyleRight={styles.GoodEyeStyleRight}
                                mouthStyle={"M15 10 Q25,15 36,10"}
                                mouthColor={"#9F6507"}
                                SizeBhaeja={Size}
                                prominent={GoodActive}
                                fill={"none"}
                                strokeLinecap={"round"}
                            />
                            <Text style={GoodActive ? { color: "black" } : { color: "grey" }}>Good</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                         activeOpacity={0.8}
                          onPress={() => {
                            setterribleActive(false)
                            setBadActive(false)
                            setOkayActive(false)
                            setGoodActive(false)
                            setGreatActive(true)
                        }}
                        style={styles.EmojiView}>
                            <Emoji
                                eyeStyleLeft={styles.GreatEyeStyleLeft}
                                eyeStyleRight={styles.GreatEyeStyleRight}
                                mouthStyle={"M12,6 A2,0 0 0,0 38,6" }
                                mouthColor={"#9F6507"}
                                SizeBhaeja={Size}
                                prominent={GreatActive}
                                fill={"white"}
                                strokeLinecap={"none"}
                            />
                            <Text style={GreatActive ? { color: "black" } : { color: "grey" }}>Great</Text>
                        </TouchableOpacity>


                    {/* </View> */}


                    </View>



                </View>




            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Top: {
        width: "100%",
        height: "20%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    textColor:{
        color:"grey",
    },
    SizeTextInputStyle: {
        borderColor: "grey",
        borderWidth: 1,
        width: 180,
        height: 40
    },
    EnterBtn:{
       width:"20%",
       height:30,
       backgroundColor:"#9F6507",
       marginTop:5,
       justifyContent:"center",
       alignItems:"center",
       borderRadius:5
    },
    EnterBtnText:{
        color:"white"
      },
    Bottom: {
        width: "100%",
        height: "80%",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    EmojiBarView: {
        width: 320,
        height: 120,
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    behindEmojiLine: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        // marginBottom:"10%"

    },
    EmojiView: {
        width: 55,
        height: 80,
        // backgroundColor:"red",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5%"
    },
    // EmojiText: {
    //     color: "black"
    // },
    TerribleEyeStyleRight: {
        width: 10,
        height: 8,
        backgroundColor: "white",
        // borderRadius:5,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        transform: [
            // {scaleX:1},
            // {scaleY:1.1}
            { rotateZ: "-15deg" }
        ]

    },
    TerribleEyeStyleLeft: {
        width: 10,
        height: 8,
        backgroundColor: "white",
        // borderRadius:5,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        transform: [
            // {scaleX:1},
            // {scaleY:1.1}
            { rotateZ: "15deg" }
        ]
    },
   
   
    BadEyeStyleRight: {
        width: 10,
        height: 8,
        backgroundColor: "white",
        // borderRadius:5,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        transform: [
            // {scaleX:1},
            // {scaleY:1.1}
            { rotateZ: "30deg" }
        ]

    },
    BadEyeStyleLeft: {
        width: 10,
        height: 8,
        backgroundColor: "white",
        // borderRadius:5,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        transform: [
            // {scaleX:1},
            // {scaleY:1.1}
            { rotateZ: "-30deg" }
        ]

    
    },
    OkayEyeStyleRight: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
    OkayEyeStyleLeft: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
 
    GoodEyeStyleRight: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
    GoodEyeStyleLeft: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
    GreatEyeStyleRight: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
    GreatEyeStyleLeft: {
        width: 10,
        height: 10,
        backgroundColor: "white",
        borderRadius: 5

    },
    GreatMouthStyle: {
        width: 24,
        height: 12,
        backgroundColor: "white",
        // borderColor:"white",
        // borderWidth:5,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        transform: [
            { scaleX: -1.3 },
            // { rotateX: "10deg" },
            // {rotateZ:"15deg"}
        ]



    },



})


export default Assignmaent3