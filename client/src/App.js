import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './comps/Home';
import Posts from './comps/Posts';
import ViewPost from './comps/ViewPost';
import NewPost from './comps/NewPost';
import NoMatch from './comps/NoMatch';
import image from './comps/image.png'

const styles = {
  width: '100%',
  height: '1200px',
  background: 'url(' + image + ')',
  backgroundSize: 'cover',
}

const App = () => (
  <section style={ styles }>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/posts" component={ Posts } />
      <Route path='/posts/new' component={ NewPost } />
      <Route component={ NoMatch } />
    </Switch>
  </section>
)

export default App;
