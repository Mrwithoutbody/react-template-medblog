import 'styles/output.css';
import 'App.css'; 

import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Home, SearchResults, Article, Single, Questions,Login, Register } from './pages'

function App() {

  return (
     <Router>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/ask-question" component={Questions} />
        <Route exact path="/single/:category/:slug/:tab" render={(props) => (
          <Single 
            category={props.match.params.category} 
            slug={props.match.params.slug} 
            tab={props.match.params.tab} />
        )} />
        <Route exact path="/article/:slug" render={(props) => (
          <Article slug={props.match.params.slug}/>
        )} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  
  );
}
export default App;
