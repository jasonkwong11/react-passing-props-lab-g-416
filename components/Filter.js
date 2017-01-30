const React = require('react');
const { Component } = require('react');
const App = require('../components/App');

const Filter = (props) => {

  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
  
}

Filter.defaultProps = {
  filters: 'all',
  handleChange: App.handleChange
}

module.exports = Filter;
