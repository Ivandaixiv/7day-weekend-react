import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../navigation";

function Home() {
  return <h2>Home</h2>;
}
function Podcast() {
  return <h2>Podcast</h2>;
}
function Events() {
  return <h2>Events</h2>;
}
function Vlog() {
  return <h2>Vlog</h2>;
}
function Webinar() {
  return <h2>Webinar</h2>;
}
function Media() {
  return <h2>Media</h2>;
}
const Routes = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/vlog" component={Vlog} />
        <Route exact path="/webinar" component={Webinar} />
        <Route exact path="/media" component={Media} />
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  );
};

export default Routes;
