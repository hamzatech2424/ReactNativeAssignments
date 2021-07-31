import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Assignment5 = () => {


    const [hideBigC, setHideBigC] = useState(false)
    const toggleSwitch = () => setHideBigC(previousState => !previousState);



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: "relative"
        },
        Top: {
            backgroundColor: "#8389b2",
            width: "100%",
            height: "25%",
            alignItems: "center",
            justifyContent: "center"
        },
        triangleCorner: {
            width: 0,
            height: 0,
            backgroundColor: "yellow",
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderRightWidth: 100,
            borderTopWidth: 100,
            borderRightColor: "transparent",
            borderTopColor: "#8389b2",
            transform: [
                { scaleX: 6.2 },

                { rotateZ: "90deg" }
            ],
            position: "relative"

        },
        smallCircle: {
            //    display:"none",   
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: hideBigC ? "#cc4069" : "#e23f73",
            position: "absolute",
            right: 18,
            top: 60,
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        bigCircle: {
            //    display:"none",   
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: "#EA3F70",
            position: "absolute",
            right: -55,
            top: -10,
            
        },
        Bottom: {
            backgroundColor: "white",
            height: "75%",
            width: "100%",
            position: "relative",
            flexDirection: "row"

        }
    })



    return (
        <View style={styles.container}>
            <View style={styles.Top}>

                <View style={{ width: "90%", height: "90%", justifyContent: "flex-end", alignItems: "center" }}>

                    <View style={{ width: "98%", height: 80, flexDirection: "row" }}>

                        <View style={{ width: "25%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "red" }}>
                                <Image source={require("../Constants/images/men.jpg")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                            </View>
                        </View>

                        <View style={{ width: "75%", height: "100%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 21, color: "white" }}>Ryan Barnes</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>Product Designer</Text>
                        </View>

                    </View>



                </View>


            </View>





            <View style={styles.Bottom}>

                <View style={styles.triangleCorner}></View>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={toggleSwitch}
                    style={styles.smallCircle}>

                    <Icon name={hideBigC ? "close" : "menu"} size={25} color="white" />

                </TouchableOpacity>

                {hideBigC ? <View style={styles.bigCircle}>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => alert("hai")}
                        style={{ width: 40, height: 40, borderRadius: 20, position: "absolute", left: 80, top: 15, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="arrow-right-bold-circle-outline" size={25} color="white" />
                    </TouchableOpacity

                    >

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => alert("how are you")}
                        style={{ width: 40, height: 40, borderRadius: 20, position: "absolute", left: 25, top: 50, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="copyright" size={25} color="white" />
                    </TouchableOpacity

                    >

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => alert("kiya hal hai")}
                        style={{ width: 40, height: 40, borderRadius: 20, position: "absolute", left: 26, top: 110, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="arrow-right-drop-circle-outline" size={25} color="white" />
                    </TouchableOpacity

                    >

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => alert("or sunao")}
                        style={{ width: 40, height: 40, borderRadius: 20, position: "absolute", left: 80, top: 145, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="arrow-right-circle-outline" size={25} color="white" />
                    </TouchableOpacity

                    >

                </View> : null}


                <View style={{ height: "100%", width: "5%", position: "absolute", left: 25, top: 47, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 2, height: "100%", backgroundColor: "lightgrey" }}>
                      
                    </View>
                </View>

                <View style={{ height: 350, width: "100%", position: "absolute", left: 0, top: 99 }}>


                    <View style={{ width: 150, height: 50,position: "absolute", left: 70 }}>
                        <Text style={{ fontSize: 19, color: "black",paddingBottom:"2%" }}>My Tasks</Text>
                        <Text style={{ fontSize: 13, color: "grey" }}>February 8, 2015</Text>
                    </View>


<View style={{width:"100%",height:280,position:"absolute",top:70}}>
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{width:"100%",alignItems:"center"}}>
                       

{/* //list Component */}
                     <View style={{width:"85.2%",height:45,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"red"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"50%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Catch up with Brian</Text>
                             </View>
                             <View style={{height:"50%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Mobile Project</Text>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>1pm</Text>
                         </View>

                     </View>








                     <View style={{width:"85.2%",height:45,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"green"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"50%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Make new Icons</Text>
                             </View>
                             <View style={{height:"50%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Web App</Text>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>2pm</Text>
                         </View>

                     </View>








                     <View style={{width:"85.2%",height:45,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"black"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"50%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Design Explorations</Text>
                             </View>
                             <View style={{height:"50%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Company Websites</Text>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>3pm</Text>
                         </View>

                     </View>






                     <View style={{width:"85.2%",height:45,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"orange"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"50%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Lunch with Marry</Text>
                             </View>
                             <View style={{height:"50%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Grill House</Text>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>5pm</Text>
                         </View>

                     </View>







                     <View style={{width:"85.2%",height:45,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"pink"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"50%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Make new Icons</Text>
                             </View>
                             <View style={{height:"50%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Web App</Text>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>6pm</Text>
                         </View>

                     </View>





                     <View style={{width:"85.2%",height:70,flexDirection:"row",marginBottom:10}}>
                         <View style={{width:"5%",height:15,justifyContent:"center",alignItems:"center"}}>
                         <View style={{width:10,height:10,borderRadius:5,backgroundColor:"green"}}></View>
                         </View>

                         <View style={{width:"85%",height:"100%",flexDirection:"column"}}>
                             <View style={{height:"30%",width:"100%"}}>
                                 <Text style={{paddingLeft:"10.5%",color:"black"}}>Team Meetings</Text>
                             </View>
                             <View style={{height:"30%",width:"100%"}}>
                             <Text style={{paddingLeft:"10%",color:"grey"}}>Hangouts</Text>
                             </View>

                             <View style={{height:"40%",width:"100%",flexDirection:"row",alignItems:"center",paddingLeft:25.5}}>

                               <View style={{backgroundColor:"blue",width:20,height:20,borderRadius:10,marginRight:"2%"}}>
                               <Image source={require("../Constants/images/men.jpg")} style={{ width: 20, height: 20, borderRadius: 10 }} />
                               </View>

                               <View style={{backgroundColor:"blue",width:20,height:20,borderRadius:10,marginRight:"2%"}}>
                               <Image source={require("../Constants/images/men.jpg")} style={{ width: 20, height: 20, borderRadius: 10 }} />
                               </View>

                               <View style={{backgroundColor:"blue",width:20,height:20,borderRadius:10,marginRight:"2%"}}>
                               <Image source={require("../Constants/images/men.jpg")} style={{ width: 20, height: 20, borderRadius: 10 }} />
                               </View>

                               <View style={{backgroundColor:"blue",width:20,height:20,borderRadius:10,marginRight:"2%"}}>
                               <Image source={require("../Constants/images/men.jpg")} style={{ width: 20, height: 20, borderRadius: 10 }} />
                               </View>
                             </View>
                         </View>


                         <View style={{height:"60%",width:"10%"}}>
                         <Text style={{color:"grey"}}>9pm</Text>
                         </View>

                     </View>








                    </ScrollView>
</View>



                </View>









            </View>
        </View>
    )
}



export default Assignment5