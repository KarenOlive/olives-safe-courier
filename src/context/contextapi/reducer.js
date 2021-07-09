export const initialState = {
    update: false,
};

export const actionTypes = {
    SET_UPDATE: "SET_UPDATE",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_UPDATE:
            return{
                ...state,
                update: action.update,
            };
    
        default:
            return state;
    }
};
export default reducer;