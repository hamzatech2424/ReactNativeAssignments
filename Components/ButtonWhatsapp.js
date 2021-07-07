import React from "react"
import { View,Text,StyleSheet,TouchableOpacity} from "react-native"



const ButtonWhatsapp = ({btntxt,btnColor,btnTxtColor,onSubmit}) => {

// console.log(btntxt,btnColor,btnTxtColor)

    return (
        <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.8}
        style={{ 
            backgroundColor: btnColor, 
            width: "80%",
             height: "60%",
              justifyContent: "center", 
              alignItems: "center", 
              borderRadius: 20 ,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 5,
              },
              shadowOpacity: 1.25,
              shadowRadius: 3.84,
              elevation: 2.5,
            }}>
        <Text style={{color:btnTxtColor}}>{btntxt}</Text>
        </TouchableOpacity>
    )
}


export default ButtonWhatsapp