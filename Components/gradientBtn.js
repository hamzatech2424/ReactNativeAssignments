import React from "react"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"



const LinearGradientBtn = ({ active, linearCon1style, iconName, text, rotation, g1, g2, g3,angle,angleCenterX,angleCenterY }) => {

    // console.log(g1, g2, g3)

    return (

        <LinearGradient

            colors={active ? [g1, g2, g3] : ['white', 'white', 'white']}

            start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
            useAngle={true}
            angle={angle}
            angleCenter={{x: angleCenterX,y:angleCenterY}}

            style={active?{...linearCon1style,elevation:6}:linearCon1style}
        >

            {active ?

                <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center", position: "absolute", top: 25, left: 45, transform: [{ rotateZ: `${rotation}deg` }] }}>

                    {iconName == "image" ?
                        <FontAwesome name={iconName} color={active ? "white" : "grey"} size={23} />
                        : iconName == "user" ?
                            <FontAwesome name={iconName} color={active ? "white" : "grey"} size={23} />
                            : iconName == "badge" ?
                                <SimpleLineIcons name={iconName} color={active ? "white" : "grey"} size={23} />
                                : iconName == "star-circle-outline" ?
                                    <MaterialCommunityIcons name={iconName} color={active ? "white" : "grey"} size={23} />
                                    : null}

                </View>:
                
                
                <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center", position: "absolute", top: 25, left: 45, transform: [{ rotateZ: `${rotation}deg` }] }}>

                {iconName == "image" ?
                    <FontAwesome name={iconName} color={active ? "white" : "grey"} size={23} />
                    : iconName == "user" ?
                        <FontAwesome name={iconName} color={active ? "white" : "grey"} size={23} />
                        : iconName == "badge" ?
                            <SimpleLineIcons name={iconName} color={active ? "white" : "grey"} size={23} />
                            : iconName == "star-circle-outline" ?
                                <MaterialCommunityIcons name={iconName} color={active ? "white" : "grey"} size={23} />
                                : null}
                <Text style={{ fontSize: 10, paddingTop: 3, color: active ? "white" : "grey" }}>{text}</Text>

            </View> 
            
                
                }



            </LinearGradient >

    )
}


export default LinearGradientBtn
