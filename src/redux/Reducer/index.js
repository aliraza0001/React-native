const iState ={name:''}
export default (state=iState,action) => {
    switch(action.type) {
        case "CHANGENAME":
        return{
            ...state,
            name:action.payload
        }
        default :
        return state
    }
}