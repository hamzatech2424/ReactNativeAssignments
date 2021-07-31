import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import GradientBtnTab from "../Components/gradientBtnTab"




const CustomTabBar = (props) => {


    const [activeChat, setActiveChat] = useState(false)
    const [activeNoti, setActiveNoti] = useState(false)
    const [activeHome, setActiveHome] = useState(false)
    const [activeRate, setActiveRate] = useState(false)
    const [activeUser, setActiveUser] = useState(false)



    const navigateToFirstScreen = () => {
        props.navigation.navigate('ChatScreen');
    }

    const navigateToSecondScreen = () => {
        props.navigation.navigate('NotificationsScreen');
    }

    const navigateToThirdScreen = () => {
        props.navigation.navigate('HomeScreen');
    }


    const navigateToFourthScreen = () => {
        props.navigation.navigate('RateScreen');
    }


    const navigateToFifthScreen = () => {
        props.navigation.navigate('UserScreen');
    }





    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => {
                    navigateToFirstScreen()
                    setActiveChat(true)
                    setActiveNoti(false)
                    setActiveHome(false)
                    setActiveRate(false)
                    setActiveUser(false)

                }}
                activeOpacity={1} style={styles.TouchableView}
            >
                <GradientBtnTab
                    iconName={"chat-outline"}

                    active={activeChat}

                />
            </TouchableOpacity>




            <TouchableOpacity
                onPress={() => {
                    navigateToSecondScreen()
                    setActiveChat(false)
                    setActiveNoti(true)
                    setActiveHome(false)
                    setActiveRate(false)
                    setActiveUser(false)

                }}

                activeOpacity={1} style={styles.TouchableView}
            >
                <GradientBtnTab
                    iconName={"bell-outline"}

                    active={activeNoti}

                />
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    navigateToThirdScreen()
                    setActiveChat(false)
                    setActiveNoti(false)
                    setActiveHome(true)
                    setActiveRate(false)
                    setActiveUser(false)

                }}

                activeOpacity={1} style={styles.TouchableView}
            >
                <GradientBtnTab
                    iconName={"beaker"}

                    active={activeHome}

                />
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    navigateToFourthScreen()
                    setActiveChat(false)
                    setActiveNoti(false)
                    setActiveHome(false)
                    setActiveRate(true)
                    setActiveUser(false)

                }}

                activeOpacity={1} style={styles.TouchableView}
            >
                <GradientBtnTab
                    iconName={"signal-cellular-outline"}

                    active={activeRate}

                />
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    navigateToFifthScreen()
                    setActiveChat(false)
                    setActiveNoti(false)
                    setActiveHome(false)
                    setActiveRate(false)
                    setActiveUser(true)

                }}
                activeOpacity={1} style={styles.TouchableView}
            >
                <GradientBtnTab
                    iconName={"user"}
                    active={activeUser}

                />
            </TouchableOpacity>


        </View>
    )
}

export default CustomTabBar


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        height: 50,
        flexDirection: "row"
    },
    TouchableView: {
        width: "20%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },


})