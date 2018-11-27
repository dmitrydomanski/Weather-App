import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemsList from '../../components/ItemsList';
import fetchItems from '../../actions/item-actions';
import SelectBox from '../../components/SelectBox';
// import PickSort from '../../components/PickSort';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { items, loading } = this.props;
        return (
            <div>
                <h1>Weather forecast</h1>
                <br />
                <SelectBox
                    items={[
                        {
                            value: 'Jerusalem', id: 1,
                        },
                        {
                            value: 'New York', id: 21,
                        },
                        {
                            value: 'London', id: 43,
                        },
                        {
                            value: 'Paris', id: 27,
                        },
                        {
                            value: 'Prague', id: 112,
                        },
                    ]}
                />
                <ItemsList
                    items={items}
                    loading={loading}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemStore.items,
    };
};

export default connect(mapStateToProps, {
    fetchItems,
})(HomePage);

HomePage.propTypes = {
    items: PropTypes.arrayOf(Object),
    loading: PropTypes.bool,
    fetchItems: PropTypes.func,
};

HomePage.defaultProps = {
    items: null,
    loading: false,
    fetchItems: null,
};
