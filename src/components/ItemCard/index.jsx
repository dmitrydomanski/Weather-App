import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherCard = styled.div`
display: inline-block;
border-right: solid 1px lightgray;
border-left: solid 1px lightgray;
text-align: center;
min-width: 120px;

`;

const WeatherHeader = styled.div`
border-bottom: solid 1px lightgray;
border-top: solid 1px lightgray;
padding: 3px 5px;
font-weight: bold;
color: dimgray;
`;

const WeatherBody = styled.div`
padding-top: 10px;
`;

const itemCard = ({ item }) => {
    const { weekday_short, month, day } = item.date;
    return (
        <WeatherCard>
            <WeatherHeader>
                {weekday_short} {month}/{day}
            </WeatherHeader>
            <WeatherBody>
                <div>{item.high.celsius}&deg; | {item.low.celsius}&deg; C</div>
                <img src={item.icon_url} alt="conditions" />
                <div>{item.conditions}</div>
            </WeatherBody>
        </WeatherCard>
    );
};

itemCard.propTypes = {
    item: PropTypes.instanceOf(Object),
};

itemCard.defaultProps = {
    item: null,
};

export default itemCard;
