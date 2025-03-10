export function getToken(state){
    return state.Login.token;
}

export function getOrders(state) {
    return state.ordersReducer;
}


export function getAuthState(state) {
    return state.authReducer;
}