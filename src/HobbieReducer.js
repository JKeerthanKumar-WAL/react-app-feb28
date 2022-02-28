const HobbieReducer = (state,action) => {
    if(action.type == "add"){
        return  [...state, action.payload];
    }
    if(action.type == "delete"){
        let modifiedState = state.filter((val,index)=>{
            if(index == action.payload){
                return false;
            }
            return true;
        })
        return modifiedState;
    }
    if(action.type == "clear"){
        return [];
    }
}
export default HobbieReducer;