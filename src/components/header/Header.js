import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted vertical>
        <Menu className="navHeader" fixed="top" inverted>
          <Container>
            <Menu.Item
              as={NavLink}
              exact
              to="/"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to="/weather"
              name="weather"
              active={activeItem === 'weather'}
              onClick={this.handleItemClick}
            />
          </Container>
        </Menu>
      </Segment>
    );
  }
}
