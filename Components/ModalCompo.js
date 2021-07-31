import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { AddtoCart, increase, decrease, removeFromCart,adjustQty } from "../Redux/Actions/Actions"
import { useSelector, useDispatch } from 'react-redux'



const ModalCart = (props) => {

  // console.log(props.data,"CartModelPage")
//   const dispatch = useDispatch()




  return (

    // <Text>Hamza</Text>


    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
    >


      <TouchableWithoutFeedback
        onPress={() => { props.setModalVisiblity() }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>


            <View style={{ width: "80%", height: "55%", justifyContent: "center", alignItems: "center"}}>
              {/* <Text>{props.data.sc_name}<Text>({props.data.s_name})</Text></Text> */}

              {/* <Text numberOfLines={3} style={{fontSize:12,color:"grey"}} >{props.data.sc_detail}</Text> */}

            </View>





            <View style={{ width: "70%", height: "45%", }}>



              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", height: "80%", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "grey", width: 30, borderRadius: 5, height: 30, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <Icon
                    name="add"
                    size={25}
                    style={{ color: "white", }}
                //    onPress={() => {
               
                //     if(props.data.sc_qty >= 0){
                //        dispatch(increase(props.data.sc_id, props.data.sc_qty))
                //     }

                //    }}
                  />
                </TouchableOpacity>


                <View style={{ height: "50%", width: "30%", alignSelf: "center", marginHorizontal: "10%" , justifyContent:"center",alignItems:"center"}}>
                  {/* <Text
                  style={{fontSize:16}}
                  >{props.data.sc_qty}</Text> */}

                </View>



                <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "#03B8F7", width: 30, borderRadius: 5, height: 30, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <Icon1
                    name="minus"
                    size={25}
                    style={{ color: "white" }}
                //    onPress={() => {

                //     if(!props.data.sc_qty <= 0){
                //        dispatch(decrease(props.data.sc_id, props.data.sc_qty))
                //     }
                //    }}
                  />
                </TouchableOpacity>
              </View>

            </View>



           


          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>


  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent"
    // marginTop: 22
  },
  modalView: {
    margin: 20,
    height: 150,
    width: 180,
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalCart;