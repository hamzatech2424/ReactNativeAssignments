import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import moment from 'moment';
import TaskCompo from "../Components/TaskCompo";
import { useSelector, useDispatch } from 'react-redux'
import {AddTask,DeleteTask,increasePersons,decreasePersons,ResetPersons,EditTask,AfterEditSaveTask} from "../Redux/Actions"



const Assignment8 = () => {

    const [date, setdate] = useState(moment(new Date()).format("YYYY-MM-DD HH:mm"))
    const [inputTxt, setInputTxt] = useState("")
    const [id, setidd] = useState(0)
    const [updateVal,setupdateVal] = useState("")
    const dispatch = useDispatch()
    const ReduxSayData = useSelector((state) => state.ReducerForAssignment.arrayForData)
 

    // console.log(ReduxSayData)




    // const deleteFunction = (index) => {

    //     //new Array bnae us mae state wali array per filter methd laga jis ki id match

    //     let newArray = addtask.filter((element) => {
    //         return element.id != index
    //     })

    //     setaddtask(newArray)

    // }



    // const editFunction = (index) => {

    //     let objIndex = addtask.findIndex((obj => obj.id == index))

    //     let newArray = [...addtask]

    //     newArray[objIndex].tasktoPerform = onpressUpdateVal

    //     setaddtask(newArray)
    //     seteditforActive(true)
     

    // }



    // const increasePersons = (index) => {

    //     let objIndex = addtask.findIndex((obj => obj.id == index))

    //     let newArray = [...addtask]
         
    //     if(newArray[objIndex].persons >= 0){
    //     newArray[objIndex].persons = newArray[objIndex].persons + 1
    //     }

    //     setaddtask(newArray)

    // }



    // const decreasePersons = (index) => {

    //     let objIndex = addtask.findIndex((obj => obj.id == index))

        
    //     let newArray = [...addtask]


    //     if(!newArray[objIndex].persons <= 0){
    //     newArray[objIndex].persons = newArray[objIndex].persons - 1
    //     }

    //     setaddtask(newArray)

    // }





    // const reset = () => {
    //     let newArray = [...addtask]

    //     for (var i = 0; i < addtask.length; i++) {

    //         newArray[i].persons = "Zero"

    //         setaddtask(newArray)

    //     }
    // }








    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textStyle} >Enter Task</Text>
                <View style={styles.DateView}>
                    <Text style={{ color: "white" }} >{date}</Text>
                </View>

                <View style={styles.inputStyle}>

                    <TextInput placeholder="Enter Task"
                        style={{ width: "70%", height: "80%" }}
                        value={inputTxt}
                        onChangeText={(txt) => { setInputTxt(txt) }}
                    />

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => {
                            setidd(id + 1)
                            // setaddtask([...addtask, { tasktoPerform: inputTxt, id: id, persons: 0 }])
                            dispatch(AddTask(inputTxt,id))
                            setInputTxt("")
                        }}
                    >
                        <Text style={styles.btnTextStyle}>Add Task</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.ResetBtnView}>

                    <TouchableOpacity
                        style={[styles.btnStyle, { width: "55%", backgroundColor: "red" }]}
                        onPress={() => dispatch(ResetPersons())}
                    >
                        <Text style={styles.btnTextStyle}>Reset Number of Persons</Text>
                    </TouchableOpacity>

                </View>

            </View>


            <View style={styles.Bottom}>

                {
                    ReduxSayData.map((val, index) => {
                        return (
                            <TaskCompo
                                key={index}
                                data={val}
                                dele={DeleteTask}
                                edi={EditTask}
                                inc={increasePersons}
                                dec={decreasePersons}
                                save={AfterEditSaveTask}
                                activeforEdit={val.isActive}
                                updValue={updateVal}
                                updateChangeText={(upd)=>setupdateVal(upd)}
                                AfterBtnSave={updateVal}
                                
                            />
                        )
                    })
                }


            </View>











        </View>

    )
}


export default Assignment8

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        width: "100%",
        height: 150,
        backgroundColor: "#FEC9AA",
        alignItems: "center"
    },
    textStyle: {
        color: "black"
    },
    DateView: {
        width: "55%",
        backgroundColor: "brown",
        height: 20,
        marginBottom: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    inputStyle: {
        width: "100%",
        height: 50,
        // backgroundColor:"grey",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btnStyle: {
        backgroundColor: "skyblue",
        width: 65,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnTextStyle: {
        color: "white"
    },
    ResetBtnView: {
        width: "100%",
        height: 35,
        // backgroundColor:"blue",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    Bottom: {
        width: "100%",
        backgroundColor: "#EEDFB4",
        height: "80%"
    },

})