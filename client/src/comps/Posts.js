import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Card, Image, Button, Icon } from 'semantic-ui-react';
import NewPost from './NewPost'
import { Link } from 'react-router-dom';
import ViewPost from './ViewPost'

class Posts extends React.Component
{
  state = { showForm: false }

  toggleForm = () =>
  {
    this.setState( state => 
    {
      return { showForm: !state.showForm }
    } )
  }

  render()
  {
    const { showForm } = this.state;
    return (
      <Container>
        <Header as='h5'>
          <Header.Content icon textAlign='left'>
            <Icon name='users' circular />
            Twitter Book
            <Link to="/posts/new">New Post</Link>
          </Header.Content>
        </Header>
        <Card.Group itemsPerRow={ 1 }>
          <ViewPost />
        </Card.Group>
      </Container>
    )
  }

}
const mapStateToProps = state =>
{
  const { posts } = state;
}


export default connect( mapStateToProps )( Posts );