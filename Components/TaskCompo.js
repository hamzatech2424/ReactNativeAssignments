import React from "react"
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from 'react-redux'




const TaskCompo = ({ data, dele, edi, inc, dec, activeforEdit, save, activeforEditChangeFalse ,updValue, AfterBtnSave, updateChangeText, savBtnFun }) => {

    const dispatch = useDispatch()

    // console.log(activeforEdit)
    // const ReduxSayData = useSelector((state) => state.ReducerForAssignment.arrayForData)

    // let objIndex = ReduxSayData.findIndex((obj => obj.isActive === true))

    // console.log(objIndex)

    

    return (

        <View style={styles.TaskKaView} >

            <TouchableOpacity
                style={[styles.btnStyle, { width: "8%", backgroundColor: "grey", marginRight: 4 }]}
                onPress={() => {
                    if (data.persons >= 0) {
                        dispatch(inc(data.id))
                    }
                }}
            >
                <Text style={[styles.btnTextStyle, { color: "white" }]}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btnStyle, { width: "8%", backgroundColor: "grey", marginRight: 4 }]}
                onPress={() => {
                    if (!data.persons <= 0) {
                        dispatch(dec(data.id))
                    }
                }}
            >
                <Text style={[styles.btnTextStyle, { color: "white" }]}>-</Text>
            </TouchableOpacity>

            <Text style={styles.PersonsZero} >Persons {data.persons}</Text>







             <View style={styles.TaskText}>
                     
             {activeforEdit?
                        <TextInput
                        style={{ width: "100%", height: "100%", padding: 0, borderColor:"black", borderWidth:1}} placeholder="Write Update Value"
                        onChangeText={updateChangeText}
                        value={updValue}
                         />:
                        
                      
                     <Text>{data.tasksToPerform}</Text>}
               
            </View> 




            {activeforEdit?
            
                    <TouchableOpacity
                    style={[styles.btnStyle, { width: "10%", backgroundColor: "blue", marginRight: 2 }]}
                    onPress={() => {
                        dispatch(save(data.id,AfterBtnSave))
                    }}

                >
                    <Text style={[styles.btnTextStyle, { color: "white" }]}>Save</Text>
                </TouchableOpacity>:
                
                
                
                <TouchableOpacity
                    style={[styles.btnStyle, { width: "10%", backgroundColor: "green", marginRight: 2 }]}
                    onPress={() => {
                        dispatch(edi(data.id,AfterBtnSave))

                    }}
                >
                    <Text style={[styles.btnTextStyle, { color: "white" }]}>Edit</Text>
                </TouchableOpacity>
                
                }

                 
            






            <TouchableOpacity style={[styles.btnStyle, { width: "13%", backgroundColor: "red" }]}
                // onPress={()=>{del(data.id)}}
                onPress={() => dispatch(dele(data.id))}
            >
                <Text style={[styles.btnTextStyle, { color: "white" }]}>Delete</Text>
            </TouchableOpacity>


        </View>

    )
}

export default TaskCompo

const styles = StyleSheet.create({
    TaskKaView: {
        backgroundColor: "lightgrey",
        height: 50,
        width: "100%",
        marginVertical: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    PersonsZero: {
        width: "21%",
        height: "40%",
        backgroundColor: "yellow"
    },
    TaskText: {
        width: "34%",
        height: "40%",
        // backgroundColor:"skyblue",
        marginRight: 1,
        paddingLeft: 4
    },
    btnStyle: {
        backgroundColor: "skyblue",
        width: 65,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
})
