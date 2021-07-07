import React from "react"
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const LoginDesign = () => {
    return (
        <View style={styles.conatiner}>

            <View style={styles.MiddleOuter}>


                <View style={styles.MiddleInner}>

                    <View style={styles.SignUpView}>
                        <Text style={styles.SignUpText}>Sign UP</Text>
                    </View>




                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >

                        <View style={styles.textInputView}>

                            <View style={styles.textInputViewStyle} >
                                <View style={styles.iconView}>
                                    <Icon name="account-circle" size={25} color="purple" />

                                </View>

                                <View style={styles.textInputViewStyletextInputView}>

                                    <TextInput placeholder="Name" />

                                </View>

                            </View>



                            <View style={styles.textInputViewStyle} >
                                <View style={styles.iconView}>
                                    <Icon name="email-open" size={25} color="purple" />

                                </View>

                                <View style={styles.textInputViewStyletextInputView}>

                                    <TextInput placeholder="E-mail" />

                                </View>

                            </View>


                            <View style={styles.textInputViewStyle} >
                                <View style={styles.iconView}>
                                    <Icon name="lock" size={25} color="purple" />

                                </View>

                                <View style={styles.textInputViewStyletextInputViewForPassword}>

                                    <TextInput style={{ width: "80%", height: "100%" }} placeholder="Password" />

                                </View>

                                <TouchableOpacity style={styles.iconView}>
                                    <Icon name="eye-outline" size={25} color="purple" />

                                </TouchableOpacity>



                            </View>


                            <View style={styles.TextkliyeView}>
                                <Text style={{ textAlign: "center", fontSize: 11 }}>I need and agree to <Text style={{ color: "purple" }}>Terms & Conditions</Text></Text>
                            </View>



                            <TouchableOpacity activeOpacity={0.8} style={[styles.textInputViewStyle, { justifyContent: "center", alignItems: "center", backgroundColor: "purple" }]} >


                                <Text style={{ color: "white" }} >CREATE ACCOUNT</Text>

                            </TouchableOpacity>


                            <View style={styles.TextkliyeView2}>
                                <Text style={{ textAlign: "center", fontSize: 11 }}>Already have an account? <Text style={{ color: "purple" }}>Sign In</Text></Text>
                            </View>



                        </View>

                    </ScrollView>




                    <View style={styles.AlreadySignInView}>

                    </View>



                </View>






            </View>



        </View>

    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    MiddleOuter: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    MiddleInner: {
        width: "90%",
        height: "80%",
        // backgroundColor: "blue"
    },
    SignUpView: {
        width: "100%",
        height: "10%",
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    SignUpText: {
        fontWeight: "bold",
        fontSize: 19
    },
    textInputView: {
        width: "100%",
        height: "80%",
        // backgroundColor: "green",
        alignItems: "center"
    },
    textInputViewStyle: {
        width: 280,
        height: 50,
        // backgroundColor: "blue",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5,
        flexDirection: "row",
        marginVertical: "5%"
    },
    iconView: {
        width: "20%",
        height: "100%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },

    textInputViewStyletextInputView: {
        width: "80%",
        height: "100%",
        // backgroundColor: "brown"
    },
    textInputViewStyletextInputViewForPassword: {
        width: "60%",
        height: "100%",
        // backgroundColor: "brown"
    },

    TextkliyeView: {
        justifyContent: "center",
        alignContent: "center",
        height: 30,
        width: "100%",
        //    backgroundColor:"orange"
    },
    TextkliyeView2: {
        justifyContent: "center",
        alignContent: "center",
        height: 30,
        width: "100%",
        // backgroundColor:"orange",
        marginTop: 5
    },

    AlreadySignInView: {
        width: "100%",
        height: "10%",
        // backgroundColor: "orange"
    },

})


export default LoginDesign