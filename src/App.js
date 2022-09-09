import React from "react";
import { Header, Sidebar, Main, Watch, Previewchannel, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  //http://localhost:3000/watch

  return (
    <Router>
      <Switch>

      <Route exact path="/login">
            <Login />
          </Route>

        <div className="Home">
          <Route path="/watch">
            <Header />
            <Watch />
          </Route>

          <Route path="/Previewchannel">
            <Header />

            <div className="App">
              <Sidebar changeWidth />
              <Previewchannel />
            </div>
          </Route>

         

          <Route exact path="/">
            <Header />

            <div className="App">
              <Sidebar />
              <Main />
            </div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
