import React from "react";
import MainAppRouter from './components/AppRouters/MainAppRouter'
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Route exact path="/posts/:id" component={Post}></Route>
      </BrowserRouter>
    </>
  );
}
function Post(props) {
  return <h2>ID is {props.match.params.id}</h2>;
}

