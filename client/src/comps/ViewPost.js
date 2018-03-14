import React from 'react';
import { connect } from 'react-redux';
import
{
  Divider,
  Header,
  Image,
  Container,
  Table,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NewPost from './NewPost';
import { deletePost } from '../actions/posts';


const ViewPost = () => (
  <div> These are all of the posts </div>
)

export default ViewPost;