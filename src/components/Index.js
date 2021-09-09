
import LandingPage from "./ProductPages/landingPage";
import ProductPage from "./ProductPages/productPage";
import { AppBar, Button, Toolbar } from "@material-ui/core"
import { Switch, Route , Link } from 'react-router-dom'

import CreatePost from "./ProductPages/CreatePost";
import './Index.css'
import { useEffect } from "react";
function Index() {
  return (
    <div>
        <AppBar position="Sticky" >
            <div className="App-bar">
            <h1>Air-Mail</h1>
            <div className='App-button'>
            <Link to = {`/createPost`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button fullWidth= {false} size="small" variant="contained" >
              Create Post
            </Button>
            </Link>
            </div>
            </div>
        </AppBar>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/createPost" component={CreatePost} />
        </Switch>
    </div>
  );
}

export default Index;
