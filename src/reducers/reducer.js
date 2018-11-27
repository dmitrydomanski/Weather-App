const defaultState = {
    items: [],
    item: {
        name: {

        },
    },
    loading: false,
    errors: {

    },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case 'FETCH_ITEMS_FULFILLED':
        return {
            ...state,
            items: action.payload.data.forecast.simpleforecast.forecastday.slice(0, 7),
            loading: false,
        };

    case 'FETCH_ITEMS_PENDING':
        return {
            ...state,
            loading: true,
        };

    case 'FETCH_ITEMS_REJECTED':
        return {
            ...state,
            loading: false,
        };

    default:
        return state;
    }
};

export default reducer;
