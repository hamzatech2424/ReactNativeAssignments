
const initialState = {
    arrayofData : []
}


const ReducerForMaps = (state = initialState, action) => {


switch(action.type) {

      case "ADD_LOCATION" :
     
      const {dataAgya,autoIncreid} = action.payload
    //   console.log(dataAgya,autoIncreid,"reducersay")

      return {
          ...state,
          arrayofData:[
              ...state.arrayofData,
              {
                id: autoIncreid,
                locationAllData: dataAgya,
              }
          ]
      }




    default :return state
}


}


export default ReducerForMaps