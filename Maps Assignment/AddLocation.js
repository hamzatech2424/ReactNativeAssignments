import React,{useState} from "react"
import {View,StyleSheet,Text,TouchableOpacity,TextInput,Image} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector, useDispatch } from 'react-redux'
import {LocationAddKrni} from "../Redux/Actions"




const AddLocation = () => {
    
    const [id,setid] = useState(0)
    const [dataFromForm,setdataFromForm] = useState({
        imageUrl:"",
        lat:"",
        long:"",
        title:"",
        descrip:""
    })

    // const [arrayForShow,setarrayForShow] = useState([])
    const dispatch = useDispatch()

    // console.log(arrayForShow)




  const UploadImageFung = () =>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        setdataFromForm({...dataFromForm,imageUrl:image.path})
      });
  }




    return(
        <View style={styles.Container}>
             
             <View style={{height:80,width:"100%",justifyContent:"center",alignItems:"center"}}>
             <Text style={{fontSize:23,fontWeight:"bold",color:"#5A5047"}} >Location Update</Text>
             </View>
           

            <View style={{backgroundColor:"#E7C8A6",width:"100%",height:700,borderTopRightRadius:70,borderTopLeftRadius:70,justifyContent:"center",alignItems:"center"}}>


             <View style={{height:600,width:"85%"}}>


         { dataFromForm.imageUrl ?  
         
         <View style={{width:"50%",height:150,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                   <Image source={{uri:`${dataFromForm.imageUrl}`}}  style={{width:"100%",height:"100%"}} />
                 </View>
                  :
                 
                 <View style={{width:"50%",height:150,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                     <TouchableOpacity 
                     style={{backgroundColor:"#F2B389",height:90,width:90,borderRadius:45,justifyContent:"center",alignItems:"center"}}
                     onPress={UploadImageFung}
                     >
                     <MaterialCommunityIcons name="image-plus" color="#5A5047"  size={40} />
                    
                     </TouchableOpacity>
                     <Text style={{paddingTop:10,fontSize:16,color:"#5A5047"}}>Upload Your image</Text>
                 </View>
                
                }
                



    

                 <View style={{height:350,width:"100%",marginTop:40}}>

                     <View style={{height:80,width:"100%",marginBottom:10,marginTop:15}}>
                     <Text style={{fontSize:16,color:"#5A5047",paddingBottom:5}}>Title</Text>
                     <TextInput 
                     placeholder="Enter your title"
                      style={{padding:0,paddingLeft:10,width:"100%",borderColor:"#5A5047",borderWidth:1,height:50,borderRadius:10,}}
                       value={dataFromForm.title}
                       onChangeText={(txt)=>setdataFromForm({...dataFromForm,title:txt})}
                      />
                     </View>

                     <View style={{height:120,width:"100%"}}>
                     <Text style={{fontSize:16,color:"#5A5047",paddingBottom:5}}>Description</Text>
                     <TextInput
                      placeholder="Description of the Location"
                        multiline={true}
                         numberOfLines={5}
                          style={{padding:0,paddingLeft:10,width:"100%",borderColor:"#5A5047",borderWidth:1,borderRadius:10,}}
                            value={dataFromForm.descrip}
                            onChangeText={(txt)=>setdataFromForm({...dataFromForm,descrip:txt})}
                           />
                     </View>

                     <View style={{width:"100%",height:60,justifyContent:"center",alignItems:"center",marginTop:30}}>
                         <TouchableOpacity
                          style={{width:"80%",height:50,backgroundColor:"#F2B389",justifyContent:"center",alignItems:"center",borderRadius:10}}
                          onPress={()=>{
                              setid(id+1)
                              dispatch(LocationAddKrni(dataFromForm,id))
                            //   setarrayForShow([dataFromForm,...arrayForShow])
                              setdataFromForm("")
                          }}
                          >
                             <Text style={{fontSize:17,color:"#5A5047"}}>Update</Text>
                         </TouchableOpacity>

                     </View>
                   
                     

                 </View>

             </View>




            </View>

       

        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        // backgroundColor:"#A3CFF1"
        // justifyContent:"center",
        // alignItems:"center"
    },
 
    
})



export default AddLocation