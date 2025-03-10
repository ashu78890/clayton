import { HISTORY_USER_FETCH,HISTORY_USER_SUCCES,HISTORY_USER_FAIL } from "../Action/HistoryAction";

const INITIAL_STATE=  {
    data: undefined,
    fetching: false,
    loading: false

}
const History= (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
     switch(type){
         case HISTORY_USER_FETCH:
             return{...INITIAL_STATE, fetching:true, loading:true}
             case HISTORY_USER_SUCCES:
                return { ...state, fetching: false, ...payload}
            case HISTORY_USER_FAIL:
                return { ...state, fetching: false, ...payload }
            default: return state;
     }
}
export default History;