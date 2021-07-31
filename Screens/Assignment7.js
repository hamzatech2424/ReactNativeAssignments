import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaskedView from '@react-native-community/masked-view';


const Assignment7 = () => {
    return (
        <View style={styles.container}>


            <LinearGradient
                style={styles.topView}
                colors={['#f77fd8', '#bd68ec', '#a760f6']}
                start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                useAngle={true}
                angle={100}
                angleCenter={{ x: 0.9, y: 0.0 }}
            >
                <View style={styles.bubbleTopLeftView}>

                    <View style={styles.bubbleOneTopLeft}></View>
                    <View style={styles.bubbleTwoTopLeft}></View>

                </View>


                <View style={styles.bubbleTopRightView}>

                    <View style={styles.bubbleOneTopRight}></View>
                    <View style={styles.bubbleTwoTopRight}></View>

                </View>

                <View style={{ width: 150, height: 50, position: "absolute", bottom: 30, alignSelf: "center", transform: [{ scaleX: 0.34 }] }}>

                    <Text style={{ color: "#fedbfe", alignSelf: "center", fontWeight: "bold", fontSize: 19 }}>Jenifer Scott</Text>
                    <View style={{ width: "60%", height: "40%", alignSelf: "center", flexDirection: "row" }}>
                        <MaterialIcons name="location-on" color={"#fcc9fd"} size={15} />
                        <Text style={{ color: "#e8a5fb", fontSize: 12, paddingLeft: "5%" }}>London, UK</Text>
                    </View>
                </View>

                <View style={{ width: 50, height: 20, alignSelf: "center", position: "absolute", bottom: 0 }}>

                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: "grey",
                        zIndex: 1,
                        position: "absolute",
                        left: -15,
                        top: 5,
                        transform: [{ scaleX: 0.34 }],
                        shadowColor: "#fff5fb",
                        shadowOffset: {
                            width: 20,
                            height: 20,
                            // zIndex:1
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 30.00,

                        elevation: 30,

                    }}>

                        <Image source={require("../Constants/images/model.jpg")} style={{ width: 80, height: 80, borderRadius: 40 }} />
                    </View>

                </View>


            </LinearGradient>




            <View style={{ width: "100%", height: 50, flexDirection: "row", zIndex: 1 }}>

                <View style={{ width: "40%", height: "100%", justifyContent: "center", alignItems: "center" }}>


                    <View style={{ width: 65, height: 40, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{
                            color: "#f77fd8",
                            fontWeight: "bold",
                            textShadowColor: 'grey',
                            textShadowOffset: { width: -0, height: -0.5 },
                            textShadowRadius: 1
                        }}>
                            25K
                        </Text>
                        <Text style={{
                            color: "#f77fd8",
                            textShadowColor: 'grey',
                            textShadowOffset: { width: -0, height: -0.5 },
                            textShadowRadius: 1
                        }}
                        >
                            Followers
                        </Text>
                    </View>
                </View>

                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>



                </View>


                <View style={{ width: "40%", height: "100%", justifyContent: "center", alignItems: "center" }}>

                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 12.5,
                        backgroundColor: "#a760f6",
                        position: "absolute",
                        bottom: 25,
                        left: 76,
                        transform: [{ scaleX: 1 }],
                        shadowColor: "#fff5fb",
                        shadowOffset: {
                            width: 10,
                            height: 10,
                            // zIndex:1
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 30.00,

                        elevation: 2,
                    }}></View>


                    <View style={{
                        width: 15,
                        height: 15,
                        borderRadius: 7.5,
                        backgroundColor: "#a760f6",
                        position: "absolute",
                        bottom: -3,
                        left: 90,
                        transform: [{ scaleX: 1 }],
                        shadowColor: "#fff5fb",
                        shadowOffset: {
                            width: 10,
                            height: 10,
                            // zIndex:1
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 30.00,

                        elevation: 2,
                    }}></View>



                    <View style={{ width: 65, height: 40, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{
                            color: "#a760f6",
                            fontWeight: "bold",
                            textShadowColor: 'grey',
                            textShadowOffset: { width: -0, height: -0.5 },
                            textShadowRadius: 1
                        }}>
                            55
                        </Text>
                        <Text style={{
                            color: "#a760f6",
                            textShadowColor: 'grey',
                            textShadowOffset: { width: -0, height: -0.5 },
                            textShadowRadius: 1
                        }}
                        >
                            Following
                        </Text>
                    </View>

                </View>

            </View>







            <MaskedView
                style={{
                    width: "100%",
                    height: "65%",
                    backgroundColor: "#fff0fa"
                }}
                maskElement={
                    <View style={styles.bottomView}>
                    </View>
                }


            >



                <View style={styles.bottomView}>


                    <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    // backgroundColor:"green",
                    backgroundColor: "#fff0fa",
                    position: "absolute",
                    bottom: 20,
                    left: 80,
                    transform: [{ scaleX: 0.5 }],
                    shadowColor: "#fff5fb",
                    shadowOffset: {
                        width: 10,
                        height: 10,
                        // zIndex:1
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 30.00,

                    elevation: 2,
                }}></View>


                <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    borderColor: "#f1d7e9",
                    borderWidth: 1,
                    backgroundColor: "#fff0fa",
                    position: "absolute",
                    left: 10,
                    bottom: 60,
                    transform: [{ scaleX: 0.5 }],
                    shadowColor: "#fff5fb",
                    shadowOffset: {
                        width: 10,
                        height: 10,
                        // zIndex:1
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 30.00,

                    elevation: 2,
                }}></View>


                    <View style={styles.bottomViewInner}>



                        <View style={{
                            backgroundColor: "#faf1fb",
                            height: 160,
                            width: 160,
                            borderRadius: 80,
                            overflow: "hidden",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [{ scaleX: 0.2 }],
                            position: "absolute",
                            top: -90,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.53,
                            shadowRadius: 13.97,
                            
                            elevation: 21,
                        }}>



                            <View style={{
                                backgroundColor: "#fff5fb",
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#e68fc3",
                                position: "absolute",
                                bottom: 18,
                                left: 36,
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [{ scaleX: 1.1 }],
                                shadowColor: "#fff5fb",
                                shadowOffset: {
                                    width: 10,
                                    height: 10,
                                    // zIndex:1
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 30.00,

                                elevation: 2,
                            }}>


                                <FontAwesome name="facebook" color={"#e68fc3"} size={13} />

                            </View>





                            <View style={{
                                backgroundColor: "#fff5fb",
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#e68fc3",
                                position: "absolute",
                                bottom: 8,
                                left: 71,
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [{ scaleX: 1.1 }],
                                shadowColor: "#fff5fb",
                                shadowOffset: {
                                    width: 10,
                                    height: 10,
                                    // zIndex:1
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 30.00,

                                elevation: 2,
                            }}>


                                <Ionicons name="ios-basketball-outline" color={"#e68fc3"} size={13} />

                            </View>




                            <View style={{
                                backgroundColor: "#fff5fb",
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#e68fc3",
                                position: "absolute",
                                bottom: 18,
                                right: 35,
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [{ scaleX: 1.1 }],
                                shadowColor: "#fff5fb",
                                shadowOffset: {
                                    width: 10,
                                    height: 10,
                                    // zIndex:1
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 30.00,

                                elevation: 2,
                            }}>


                                <Ionicons name="logo-twitter" color={"#e68fc3"} size={13} />

                            </View>







                        </View>





                        <View style={{ width: 270, height: "64%", position: "absolute",top: 80, transform: [{ scaleX: 0.21 }] }}>

                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <MaterialIcons name="folder" color={"#e7b2d1"} size={24} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }}>Shots</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }} >66</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>



                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="heart-outline" color={"#e7b2d1"} size={24} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }}>Likes</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }} >47</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>


                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="bell-outline" color={"#e7b2d1"} size={24} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }}>Notifications</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }} >32</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>


                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name="bucket" color={"#e7b2d1"} size={24} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }}>Buckets</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }} >88</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>


                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Ionicons name="share-social-outline" color={"#e7b2d1"} size={24} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }}>Share</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#e7b2d1" }} >96</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>


                            <View style={{ width: "100%", height: "16%", flexDirection: "row" }}>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Ionicons name="pricetags-outline" color={"#e7b2d1"} size={21} />
                                </View>
                                <View style={{ width: "60%", height: "100%", justifyContent: "center" }}>
                                    <Text style={{ color: "#e7b2d1" }}>Tags</Text>
                                </View>
                                <View style={{ width: "20%", height: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#e7b2d1" }} >56</Text>
                                    <MaterialCommunityIcons name="greater-than" color={"#e7b2d1"} size={18} style={{ marginLeft: 2 }} />
                                </View>
                            </View>



                        </View>




                    </View>



                </View>








            </MaskedView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#fff0fa",
        // overflow:"hidden",
        // zIndex:1
    },
    topView: {
        backgroundColor: "red",
        height: "27%",
        width: "40%",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        alignSelf: "center",
        transform: [
            { scaleX: 2.8 }
        ],
        shadowColor: "#fff5fb",
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 20,
    },
    bubbleTopLeftView: {
        width: 50,
        height: 50,
        //    backgroundColor:"blue",
        transform: [{ scaleX: 0.34 }],
        position: "absolute",
        top: 40,
        left: 2,
        flexDirection: "column"
    },
    bubbleOneTopLeft: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#f77fd8",
        position: "absolute",
        right: 0,
        shadowColor: "#f5d9ea",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 5,
    },
    bubbleTwoTopLeft: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#f77fd8",
        // backgroundColor:"red",
        position: "absolute",
        bottom: 15,
        right: 20,
        shadowColor: "#f5d9ea",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 5,
    },
    bubbleTopRightView: {
        width: 50,
        height: 50,
        //    backgroundColor:"blue",
        transform: [{ scaleX: 0.34 }],
        position: "absolute",
        bottom: 10,
        right: 2,
        flexDirection: "column"
    },
    bubbleOneTopRight: {
        width: 20,
        height: 20,
        borderRadius: 10,
        // backgroundColor: '#a760f6',
        position: "absolute",
        bottom: 15,
        right: 20,
        shadowColor: "#fff5fb",
        borderWidth: 0.5,
        borderColor: "white",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 1,
    },
    bubbleTwoTopRight: {
        width: 10,
        height: 10,
        borderRadius: 5,
        // backgroundColor: '#a760f6',
        // backgroundColor:"red",
        position: "absolute",
        right: 15,
        borderWidth: 0.5,
        borderColor: "white",
        shadowColor: "#fff5fb",
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 1,
    },
    bottomView: {
        // backgroundColor: "#fff0fa",
        backgroundColor: "grey",
        // position: "absolute",
        //   overflow:"hidden",
        // top: 0,
        // height: "100%",
        // width: "20%",
        height: "100%",
        width: "60%",
        borderWidth: 0.2,
        borderColor: "grey",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        alignItems: "center",
        alignSelf: "center",
        transform: [
            { scaleX: 2.0 }
        ],
        shadowColor: "#fff5fb",
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 40,
        zIndex: 1


    },
    bottomViewInner: {
        //    backgroundColor: "#fff0fa", 
        backgroundColor: "white",
        // height:50,width:50,
        overflow: "hidden",
        position: "absolute",
        top: -20,
        height: "95%",
        width: "30%",
        // borderTopRightRadius: 100,
        // borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        alignSelf: "center",
        alignItems: "center",
        transform: [
            { scaleX: 2.3 }
        ],
        shadowColor: "#fff5fb",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 30.00,

        elevation: 20,
        zIndex: 0


    }
})


export default Assignment7


















