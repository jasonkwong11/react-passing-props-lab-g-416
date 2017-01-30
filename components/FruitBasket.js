const React = require('react');
const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) =>{
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        items={props.fruit}
        filter={props.selectedFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
  fruit: 'pome'
};

module.exports = FruitBasket;
