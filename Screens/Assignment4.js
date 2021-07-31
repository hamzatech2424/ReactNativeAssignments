import React, { useState } from "react"
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, FlatList } from "react-native"
import ButtonWhatsapp from "../Components/ButtonWhatsapp"
import SendMessageView from "../Components/SendMessageView"
import ReceiveMessageView from "../Components/ReceiveMessageView"


const Assignment4 = () => {


    const [messageInput, setMessageInput] = useState("")
    const [SendBtnPress, setSendBtnPress] = useState([])


    // console.log(SendBtnPress)




    return (
        <View style={styles.container}>
        
            <ImageBackground resizeMode={"cover"} source={require("../Constants/whats2.jpg")} style={{ width: '100%', height: '100%' }}>



                {/* <ScrollView contentContainerStyle={{width:"100%",position:"relative",flexDirection:"column"}} showsVerticalScrollIndicator={false}> */}


              

                <View style={{width:"100%",height:"89%",marginTop:5}}>
                    <ScrollView contentContainerStyle={{ width: "100%", flexDirection: "column" }} showsVerticalScrollIndicator={false}>

               

                        {SendBtnPress.map((item, index) => {
                            return (

                                <View key={index}>
                                    {(item.code == "s") ?
                                        <SendMessageView tetDikhana={item} /> :

                                        <ReceiveMessageView tetDikhana={item} />}

                                </View>
                            )
                        })

                        }

                    </ScrollView>
                </View>

   

                <View style={{ width: "100%", height: 60, position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#128C7E" }}>

                    <TextInput
                        placeholder="Type a message"
                        style={{ width: "58%", height: "70%", borderColor: "red", backgroundColor: "#ECE5DD", borderRadius: 20, paddingLeft: 10 }}
                        value={messageInput}
                        onChangeText={(txt) => setMessageInput(txt)}
                    />





                    <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <ButtonWhatsapp
                            btntxt={"Send"}
                            btnColor={"#ECE5DD"}
                            btnTxtColor={"black"}
                            onSubmit={() => {
                                setSendBtnPress([...SendBtnPress, { code: "s", message: messageInput }])
                                setMessageInput("")
                            }}
                        />
                    </View>



                    <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <ButtonWhatsapp
                            btntxt={"Receive"}
                            btnColor={"#DCF8C6"}
                            btnTxtColor={"black"}
                            onSubmit={() => {
                                setSendBtnPress([...SendBtnPress, { code: "r", message: messageInput }])
                                setMessageInput("")
                            }}
                        />
                    </View>

                </View>







            </ImageBackground>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },

})

export default Assignment4