import React from 'react'
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        <Link to="/posts">Twitter Book</Link>
      </Header.Content>
    </Header>
  </div>
)

export default Home;
