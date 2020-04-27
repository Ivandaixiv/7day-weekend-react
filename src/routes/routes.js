import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../navigation";
import Home from "../screens/Home";
import Podcasts from "../screens/Podcasts";
import Events from "../screens/Events";
import Medias from "../screens/Medias";
import Vlogs from "../screens/Vlogs";
import Webinars from "../screens/Webinars";

const Routes = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/podcasts" component={Podcasts} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/vlogs" component={Vlogs} />
        <Route exact path="/webinars" component={Webinars} />
        <Route exact path="/medias" component={Medias} />
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  );
};

export default Routes;
