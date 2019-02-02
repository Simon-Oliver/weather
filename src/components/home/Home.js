import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as data from '../../city.list.min.json';

class Home extends Component {
  state = {
    query: '',
    result: []
  };

  handleInputChange = () => {
    const filteredList = data.default.filter(e =>
      e.name.toLocaleLowerCase().includes(this.search.value.toLocaleLowerCase())
    );

    const listItems = filteredList.reduce((acc, item) => {
      acc.push(
        <li key={item.id}>
          <Link to={`/weather/${item.id}`}>{item.name}</Link>
        </li>
      );
      return acc;
    }, []);

    this.setState({
      query: this.search.value,
      result: this.search.value.length > 2 ? listItems : []
    });
  };

  render() {
    return (
      <Container>
        <Segment>
          <form>
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
            <p>{this.state.result}</p>
          </form>
        </Segment>
      </Container>
    );
  }
}

export default Home;
