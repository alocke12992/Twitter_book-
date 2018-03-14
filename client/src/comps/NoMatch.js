import React from 'react'
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';
import Home from './Home';

const NoMatch = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='warning sign' circular size='massive' color='red' />
      <Header.Content>
        <Link to="/">Home</Link>
      </Header.Content>
    </Header>
  </div>
)

export default Home;