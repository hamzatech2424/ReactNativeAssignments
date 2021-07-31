import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native"
import ImagesFiles from "../Constants/images"

const Assignmaent2 = () => {
    return (

        <View style={styles.container}>

            <View style={styles.Header}>



                <View style={{ height: 250, width: "100%", backgroundColor: "#1877F2", position: "relative", justifyContent: "center", alignItems: "center" }}>



                    <View style={styles.parent}>
                    </View>

                    <View style={styles.whiteCurve}>
                    </View>


                    <View style={styles.Circle} >
                        <Image source={ImagesFiles.image1} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
                        <View style={styles.dot}>
                            <View style={styles.greenDot}></View>
                        </View>
                    </View>

                </View>

            </View>




           <ScrollView contentContainerStyle={styles.Middle} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            {/* <View style={styles.Middle}> */}

                <View style={styles.textView}>
                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ color: "#1877F2" }} >Company Name</Text>
                        <Text style={{ fontSize: 13 }} >M&J Systematic Machine Co.</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ color: "#1877F2" }} >Company Registration No.</Text>
                        <Text style={{ fontSize: 13 }} >UAN 3452245677</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ color: "#1877F2" }} >Company Address</Text>
                        <Text style={{ fontSize: 13, color: "grey" }} >Wellington 234 Ban,New Zealand</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ color: "#1877F2" }} >Company Contact No</Text>
                        <Text style={{ fontSize: 13, color: "grey" }} >+44 765432111</Text>
                    </View>
                </View>


                <View style={styles.textView1}>
                    <View style={{ width: "90%", height: "100%", alignItems:"center" }}>

                        <View style={{width:"90%",height:"25%",flexDirection:"row"}}>
                            <View style={{width:"10%",height:"100%",justifyContent:"center",alignItems:"center"}} >
                                <View style={{width:10,height:10,borderRadius:5,backgroundColor:"#1877F2",}}></View>
                            </View>
                            <View style={{width:"90%",height:"100%",justifyContent:"center"}} >
                                <Text style={{fontSize:10}} >Does your Company Supplies machines/equiipments?</Text>
                            </View>
                            
                        </View>


                     <View style={{width:"90%",height:"75%",flexDirection:"row"}}>

                         <View style={{width:"10%",height:"100%"}} >
                             <View style={{backgroundColor:"grey",height:"100%",width:"8%",alignSelf:"center"}}>

                             </View>
                             
                         </View>




                         <View style={{width:"90%",height:"100%",flexDirection:"column"}} >



                             
                         <View style={{width:"100%",height:"30%",flexDirection:"row"}} >

                         <View style={{width:"10%",height:"100%",justifyContent:"center",alignItems:"center"}} >
                                <View style={{width:10,height:10,borderRadius:5,backgroundColor:"#1877F2",}}></View>
                            </View>
                            <View style={{width:"90%",height:"100%",justifyContent:"center"}} >
                                <Text style={{fontSize:10}} >Same as above address</Text>
                            </View>
                             
                             </View>








                             <View style={{width:"100%",height:"70%",flexDirection:"column",justifyContent:"center",paddingLeft:"10%"}} >
                             <Text style={{fontSize:10}} >Company Billing address</Text>
                             <Text style={{fontSize:10}} >UAN 2345679</Text>
                             
                             </View>

                         </View>

                         

                     </View>



                    </View>
                </View>





                <View style={styles.textView}>
                    <View style={{ width: "80%", height: "100%", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ color: "#1877F2" }} >Position</Text>
                        <Text style={{ fontSize: 13 }} >Supervisor</Text>
                    </View>
                </View>





            {/* </View> */}
            </ScrollView>

            <View style={styles.Footer}>
                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.ButtonEdit} >
                        <Text style={{color:"grey"}}>EDIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSave} >
                        <Text style={{color:"white"}}>SAVE CHANGES</Text>
                    </TouchableOpacity>


                </View>

            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        width: "100%",
        height: "30%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        overflow:"hidden"
        // transform : [ { scaleX : 2 } ],
    },
    Middle: {
        width: "100%",
        height: 340,
        backgroundColor: "white"
    },
    Footer: {
        width: "100%",
        height: "15%",
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    parent: {
     // height:250,
        // width:470,
        height:"40%",
        width:"30%",
        // borderRadius:200,
        // borderTopWidth:20,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        // borderBottomLeftRadius: 150,
        // borderBottomRightRadius: 150,
        // borderTopEndRadius:100,
        // borderTopStartRadius:50,
        transform : 
        [ 
            { scaleX : 4.6 },  
            // { scaleY : 2 },  
            // {translateY: 50},
          
            //  { rotateX: "25deg" },
             {rotateZ:"7deg"} 
            ],
        overflow: 'hidden',
        backgroundColor: "skyblue",
        position: "absolute",
        bottom:20
        // top:85
    },
    whiteCurve: {
      // height:250,
        // width:470,
      height:"40%",
        width:"30%",
        // borderRadius:200,
        // borderTopWidth:20,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        // borderBottomLeftRadius: 150,
        // borderBottomRightRadius: 150,
        // borderTopEndRadius:100,
        // borderTopStartRadius:50,
        transform : 
        [ 
            { scaleX : 4.2 },  
            {rotateZ:"-7deg"} 
            // { scaleY : 1.8 },  
            // {translateY: 50},
          
            //  { rotateX: "5deg" },
            
            ],
        overflow: 'hidden',
        backgroundColor: "white",
        position: "absolute",
        bottom:20
        // top:85
       
    },
    Circle: {
        // backgroundColor: 'yellow',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 1
    },
    dot: {
        backgroundColor: '#3B579D',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: "absolute",
        top: "15%",
        right: "1%",
        justifyContent: "center",
        alignItems: "center"
    },
    greenDot: {
        // backgroundColor : '#09D85D',
        backgroundColor: "white",
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    textView: {
        width: "100%",
        height: 50,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: "1%"

    },
    textView1: {
        width: "100%",
        height: 75,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom:"1%"

    },
    ButtonsView: {
        width: "80%",
        height: "80%",
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ButtonEdit: {
        width: "45%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonSave:{
        width: "45%",
        height: 40,
        backgroundColor: "#1877F2",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center"  
    }
})



export default Assignmaent2









// parent: {
//     // height:250,
//     // width:470,
//     height:"67%",
//     width:"70%",
//     borderTopLeftRadius: 275,
//     borderTopRightRadius: 290,
//     transform : 
//     [ { scale : 2 },  
//         //  { rotateX: "25deg" },
//          {rotateZ:"5deg"} 
//         ],

//     overflow: 'hidden',
//     backgroundColor: "skyblue",
//     position: "absolute",
//     bottom: "-56%",
//     justifyContent: "flex-end",
//     alignItems: "center",
 
// },







// parent1: {
//     // height:250,
//       // width:470,
//       height:"66.5%",
//       width:"70%",
//       borderTopLeftRadius: 280,
//       borderTopRightRadius: 275,
//       transform : 
//       [ { scale : 2 },  
//           //  { rotateX: "25deg" },
//            {rotateZ:"-6deg"} 
//           ],
//       overflow: 'hidden',
//       backgroundColor: "white",
//       position: "absolute",
//       bottom: "-54%",
//       justifyContent: "flex-end",
//       alignItems: "center",
    
//   },





// parent: {
//     // height:250,
//     // width:470,
//     height:330,
//     width:"140%",
//     borderTopLeftRadius: 265,
//     borderTopRightRadius: 320,
  
//     // transform : 
//     // [ { scale : 2 },  
//     //     //  { rotateX: "25deg" },
//     //      {rotateZ:"5deg"} 
//     //     ],

//     overflow: 'hidden',
//     backgroundColor: "skyblue",
//     position: "absolute",
//     bottom:-245,
//     justifyContent: "flex-end",
//     alignItems: "center",
 
// },
// parent1: {
//   // height:250,
//     // width:470,
//     height:332,
//     width:"140%",
//     borderTopLeftRadius: 270,
//     borderTopRightRadius: 230,
//     // borderTopEndRadius:-50,
//     // borderTopStartRadius:-50,
//     // transform : 
//     // [ { scale : 2 },  
//     //     //  { rotateX: "25deg" },
//     //      {rotateZ:"-6deg"} 
//     //     ],
//     overflow: 'hidden',
//     backgroundColor: "white",
//     position: "absolute",
//     bottom:-245,
//     justifyContent: "flex-end",
//     alignItems: "center",

  
// },