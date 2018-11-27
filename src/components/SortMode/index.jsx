import React from 'react';

const sortMode = onClick => (
    <input
        type="radio"
        name="sortModes"
        onClick={onClick}
    />
);

export default sortMode;
