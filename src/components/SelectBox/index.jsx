import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectContainer = styled.div`
    height: 30px;
    border: 1px solid #aaa;
    width: 100%;
    margin: 0px;
    padding: 0 0 0 10px;
    display: inline-flex;
    justify-content: space-between;
`;

const SelBox = styled.div`
    width: 180px;
    margin-bottom: 20px;
`;

const SelectArrow = styled.div`
    width: 30px;
    height: 30px;
    margin: 0px;
    padding: 0px;
    display: inline-block;
    background: #aaa;
`;

const SelectedItem = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 4px 12px;
    vertical-align: middle;
`;

const ItemsList = styled.div`
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 6px;
    background-color: lightgrey;
    padding-left: 20px;
    position: absolute;
    z-index: 100;
`;

export default class SelectBox extends Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        selectedItem: this.props.items[0] || this.props.selectedItem,
        showItems: false,
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }));
    }

    selectItem = (item) => {
        this.setState({
            selectedItem: item,
            showItems: false,
        });
    }

    render() {
        const { selectedItem, showItems, name, items } = this.state;
        return (
            <div>
                <SelBox>
                    <SelectContainer>
                        <SelectedItem>
                            {selectedItem.value}
                        </SelectedItem>
                        <SelectArrow
                            onClick={this.dropDown}
                        />
                    </SelectContainer>
                    <ItemsList
                        style={{
                            display: showItems ? 'block' : 'none',
                        }}
                    >
                        {
                            items.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}
                                >
                                    {item.value}
                                </div>))
                        }
                    </ItemsList>
                </SelBox>
                <input type="hidden" name={name} value={selectedItem.id} />
            </div>
        );
    }
}

SelectBox.propTypes = {
    items: PropTypes.arrayOf(Object),
    selectedItem: PropTypes.string,
};

SelectBox.defaultProps = {
    items: null,
    selectedItem: null,
};
