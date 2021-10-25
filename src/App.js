import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/">
            <Header score={score} />
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Header score={score} />
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
