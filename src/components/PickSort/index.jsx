import React from 'react';
import sortMode from '../SortMode';

const pickSort = (pickSort) => {
    const clickHandler = (type) => () => pickSort(type);
    return (
       // map through sort types here
    );
}

export default pickSort;
