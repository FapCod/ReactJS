import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import BadgeNew from "../pages/badgeNew.js";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
