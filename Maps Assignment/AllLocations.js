import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AllLocationList from "../Components/MapsCompnents/allLocatinsList";
import { useSelector, useDispatch } from 'react-redux'



const AllLocations = () => {


    const LocationReduxSayData = useSelector((state) => state.ReducerForMaps.arrayofData)


    return (
        <View style={styles.container}>
            <View style={{ height: 80, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 23, fontWeight: "bold" }} >Your Locations</Text>
            </View>


            <View style={{ backgroundColor: "#E7C8A6", width: "100%", height: 700, borderTopRightRadius: 70, borderTopLeftRadius: 70, justifyContent: "center", alignItems: "center" }}>


                <View style={{ height: 600, width: "85%" }}>

                   {LocationReduxSayData.map((val,index)=>{
                       return(
                           <AllLocationList key={index} data={val.locationAllData} />
                       )
                   })}

                </View>




            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default AllLocations