const initialState={
    langCode:localStorage.getItem('lang')||'en'
}


const langReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LANG':
            return {
                ...state,
                langCode: action.langCode
            };
        default:
            return state;
    }
};


export default langReducer