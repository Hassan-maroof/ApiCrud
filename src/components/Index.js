
import LandingPage from "./ProductPages/landingPage";
import ProductPage from "./ProductPages/productPage";
import { AppBar, Toolbar } from "@material-ui/core"
import {Switch , Route} from 'react-router-dom'
import DeletePost from "./ProductPages/deletePostPage";
import { useEffect } from "react";
function Index() {
  return (
    <div>
      <header >
        
          <AppBar position="Sticky">
          <h1>Mock-Up</h1>
            </AppBar>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/Delete/:id" component={DeletePost} />
      </Switch>
      </header>
    </div>
  );
}

export default Index;
