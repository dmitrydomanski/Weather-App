import client from './index';

const city = 'New York';
const state = 'NY';

const fetchItems = () => (dispatch) => {
    dispatch({
        type: 'FETCH_ITEMS',
        payload: client.get(`/${state}/${city}.json`),
    });
};

export default fetchItems;
