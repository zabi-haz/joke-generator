export const jokesReducers = (state = {jokes:{}}, {type , payload })=>{
    switch(type){
        case "JOKES":
            return {...state , jokes:payload}
        default:
            return state
    }
}