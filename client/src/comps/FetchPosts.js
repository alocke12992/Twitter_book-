import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import ViewPost from './ViewPost';
import { getPosts } from '../actions/posts';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchPosts extends React.Component
{
  state = { loaded: false };

  componentDidMount()
  {
    this.props.dispatch( getPosts( this.setLoaded ) );
  }

  setLoaded = () =>
  {
    this.setState( { loaded: true } );
  };

  render()
  {
    const { loaded } = this.state;
    if ( loaded )
    {
      return (
        <div>
          <Route exact path="/posts" component={ Posts } />
          <Route
            exact
            path="/posts/:id"
            component={ ViewPost }
          />
        </div>
      );
    } else
    {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()( FetchPosts );