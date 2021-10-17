import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const AllLocationList = ({data}) => {






    return(

        <View style={{ width: "100%", height: 50, flexDirection: "row",marginVertical:5 }}>
        <View style={{ width: "60%", height: "100%",flexDirection: "row" }}>

            <View style={{ height: "100%", width: "20%",justifyContent:"center",alignItems:"center" }}>
            <MaterialIcons name="location-on" color="#D24F43" size={25} />
            </View>


            <View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
                <Text style={{fontSize:16}}>{data.title}</Text>
            </View>



        </View>

        <View style={{ width: "40%", height: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
            <TouchableOpacity style={{ backgroundColor: "green", height: 30, width: "48%", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ color: "white" }}>Go to</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "red", height: 30, width: "48%", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>

        </View>

    </View>
        
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default AllLocationList