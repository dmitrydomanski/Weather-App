import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';
import ItemCard from '../ItemCard';


const itemsList = ({ items, loading }) => {
    const loadingMessage = (
        <Message icon info>
            <Icon name="circle notched" loading />
            <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
            </Message.Content>
        </Message>
    );

    const itemCards = () => items.map((item, index) => (
        <ItemCard
            key={parseInt(index.toString(), 10)}
            item={item}
        />));

    const itemList = (
        <div>
            {itemCards()}
        </div>
    );

    return (
        <div>
            {loading && loadingMessage}
            {items.length === 0 && !loading }
            {items.length > 0 && itemList}
        </div>
    );
};

itemsList.propTypes = {
    items: PropTypes.arrayOf(Object),
    loading: PropTypes.bool,
};

itemsList.defaultProps = {
    items: null,
    loading: false,
};

export default itemsList;
