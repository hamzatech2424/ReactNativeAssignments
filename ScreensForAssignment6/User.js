import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import LinearGradientBtn from "../Components/gradientBtn"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FriendsScrollViewItems from "../Components/FriendsScrollViewItems";


const User = () => {


    const [posts, setPosts] = useState(false)
    const [badges, setBadges] = useState(false)
    const [user, setUser] = useState(false)
    const [coins, setCoins] = useState(false)





    return (
        <View style={styles.container}>
            <View style={styles.Top}>



                <View style={styles.CircleBackground}>
                    <View style={styles.imageCircle}>
                        <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={require("../Constants/images/witch1.jpg")} />
                    </View>


                    <TouchableOpacity style={styles.cone1}
                        activeOpacity={1}
                        onPress={() => {
                            setPosts(true),
                                setBadges(false),
                                setUser(false),
                                setCoins(false)
                        }}
                    >
                        <LinearGradientBtn
                            touchabaleOpacitystyle={styles.cone1}
                            linearCon1style={styles.linearCone1}
                            iconName={"image"}
                            text={"112 Posts"}
                            rotation={0}
                            active={posts}
                            g1={"#fc157a"}
                            g2={"#f9199b"}
                            g3={"#ec1aae"}
                            angle={60}
                            angleCenterX={0.6}
                            angleCenterY={0.3}
                        />

                    </TouchableOpacity>





                    <TouchableOpacity style={styles.cone2}
                        activeOpacity={1}
                        onPress={() => {
                            setPosts(false),
                                setBadges(false),
                                setUser(true),
                                setCoins(false)
                        }}
                    >
                        <LinearGradientBtn
                            linearCon1style={styles.linearCone2}
                            iconName={"user"}
                            text={"4K Friends"}
                            rotation={-90}
                            active={user}
                            g1={"#7e19a6"}
                            g2={"#c62fcf"}
                            g3={"#eb1bad"}
                            angle={50}
                            angleCenterX={0.6}
                            angleCenterY={0.3}
                        />

                    </TouchableOpacity>





                    <TouchableOpacity style={styles.cone3}
                        activeOpacity={1}
                        onPress={() => {
                            setPosts(false),
                                setBadges(true),
                                setUser(false),
                                setCoins(false)
                        }}
                    >

                        <LinearGradientBtn
                            linearCon1style={styles.linearCone3}
                            iconName={"badge"}
                            text={"18 Badges"}
                            rotation={90}
                            active={badges}
                            g3={"#ec9f05"}
                            g2={"#F47E03"}
                            g1={"#ff4e00"}
                            angle={50}
                            angleCenterX={0.6}
                            angleCenterY={0.3}
                        />

                    </TouchableOpacity>





                    <TouchableOpacity style={styles.cone4}
                        activeOpacity={1}
                        onPress={() => {
                            setPosts(false),
                                setBadges(false),
                                setUser(false),
                                setCoins(true)
                        }}
                    >
                        <LinearGradientBtn
                            linearCon1style={styles.linearCone4}
                            iconName={"star-circle-outline"}
                            text={"132 Coins"}
                            rotation={180}
                            active={coins}
                            g1={"#20bf55"}
                            g2={"#0ABCC1"}
                            g3={"#01baef"}
                            angle={50}
                            angleCenterX={0.6}
                            angleCenterY={0.3}
                        />

                    </TouchableOpacity>


                </View>




            </View>





{user?



            <View style={styles.Bottom}>


               <View style={{ width: "100%", height: "15%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "80%", height: "95%", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", color: "#7e19a6", fontSize: 22,paddingLeft:8 }}>4,392 Friends</Text>

                    </View>

                </View>


                <View style={{ width: "100%", height: 260, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "80%", height: 260 }}>


                        <ScrollView contentContainerStyle={{width:"100%"}} showsVerticalScrollIndicator={false}>

                          <FriendsScrollViewItems name="Anjenika Alizebth" details="Adowery" />

                      
                          <FriendsScrollViewItems name="George Clarke" details="Adowery" />

                          <FriendsScrollViewItems name="Elle Mickson" details="Adowery" />


                          <FriendsScrollViewItems name="Kennedy Cook" details="Adowery" />

                          <FriendsScrollViewItems name="Olivier Mark" details="Adowery" />

                          <FriendsScrollViewItems name="Jenny Smith" details="Adowery" />

                          <FriendsScrollViewItems name="Shaun Marsh" details="Adowery" />

                        </ScrollView>


                    </View>

                </View> 

                </View>



:



 <View style={styles.Bottom}>
     
                <View style={{ width: "100%", height: "15%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "80%", height: "80%", justifyContent: "center"}}>
                        <Text style={{ fontWeight: "bold", color: "#fc157f", fontSize: 22, paddingLeft: 8 }}>112 Posts</Text>

                    </View>

                </View>


                <View style={{ width: "100%", height: 260, backgroundColor: "pink" }}>


                    <View style={{ width: "100%", height: 260, backgroundColor: "grey" }}>
                        <ScrollView contentContainerStyle={{ width: "100%" }} showsVerticalScrollIndicator={false} >

                            <View style={{ width: "100%", flexDirection: "row", height: 100, backgroundColor: "skyblue" }}>

                                <View style={{ backgroundColor: "green", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w1.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "blue", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w2.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "red", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w3.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                            </View>



                            <View style={{ width: "100%", flexDirection: "row", height: 100, backgroundColor: "skyblue" }}>

                                <View style={{ backgroundColor: "green", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w6.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "blue", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w5.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "pink", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w4.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                            </View>



                            <View style={{ width: "100%", flexDirection: "row", height: 100, backgroundColor: "skyblue" }}>

                                <View style={{ backgroundColor: "green", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w7.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "blue", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w8.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                                <View style={{ backgroundColor: "pink", width: "33.3%", height: 100 }} >
                                    <Image source={require("../Constants/images/w9.jpg")} style={{ width: "100%", height: 100 }} />
                                </View>

                            </View>

                    


                        </ScrollView>
                    </View>


                </View>
                


</View>

}

            

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    Top: {
        width: "100%",
        height: "45%",
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center",
        
    },
    CircleBackground: {
        width: 240,
        height: 240,
        backgroundColor: "lightgrey",
        borderRadius: 120,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,

    },
    imageCircle: {
        width: 70,
        height: 70,
        backgroundColor: "orange",
        borderRadius: 35,
        zIndex: 1

    },
    cone1: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        position: "absolute",
        left: 0,
        bottom: 0,
   
    },
    linearCone1: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        position: "absolute",
        left: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#fc157a",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,
        
        elevation: 0,
    },
    cone2: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        // backgroundColor: "red",
        transform: [
            { rotateZ: "90deg" }
        ],
        position: "absolute",
        left: 0,
        top: 0
    },
    linearCone2: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        position: "absolute",
        left: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#fc157a",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,
        
        elevation: 0,

    },
    cone3: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        // backgroundColor: "blue",
        transform: [
            { rotateZ: "-90deg" }
        ],
        position: "absolute",
        right: 0,
        bottom: 0
    },
    linearCone3: {
        width: 119.5,
        height: 119.5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        // backgroundColor: "blue",
        position: "absolute",
        right: 0,
        bottom: 0,
        shadowColor: "#fc157a",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,
        
        elevation: 0,
    },
    cone4: {
        width: 119.5,
        height: 119.8,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        // backgroundColor: "black",
        transform: [
            { rotateZ: "-180deg" }
        ],
        position: "absolute",
        right: 0,
        top: 0
    },
    linearCone4: {
        width: 119.5,
        height: 119.8,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 120,
        position: "absolute",
        right: 0,
        top: 0,
        shadowColor: "#fc157a",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,
        
        elevation: 0,
    },
    Bottom: {
        width: "100%",
        height: "65%",
        backgroundColor:"white",
        marginTop:5
     
    }
})


export default User




{/* <View style={{width:105,height:1,backgroundColor:"grey",position:"absolute",left:10}}></View> */ }

{/* 
            <MaterialCommunityIcons name="chat-outline" color={"#fb40ac"} size={25} /> */}