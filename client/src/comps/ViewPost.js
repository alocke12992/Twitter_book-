import React from 'react';
import { connect } from 'react-redux';
import
{
  Divider,
  Header,
  Image,
  Container,
  Card,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NewPost from './NewPost';
import { deletePost } from '../actions/posts';


class ViewPost extends React.Component
{

  render()
  {
    const { post = {} } = this.props
    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={ post.img } />
          <Card.Header>
            { post.username }
          </Card.Header>
          <Card.Description>
            { post.post }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = ( state, props ) => 
{
  const post = state.props.find(
    a => a.id === parseInt( props.match.params.id ),
  )
  return { post };
}

export default connect( mapStateToProps )( ViewPost );