const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: [fruit]}));
  }

  render() {
    const {fruit, filters, currentFilter} = this.state
    return (
      <FruitBasket
        items={fruit}
        filters={filters}
        selectedFilter={currentFilter}
        handleFilterChange={this.handleFilterChange}
      />
    );
  }
}

module.exports = App;
