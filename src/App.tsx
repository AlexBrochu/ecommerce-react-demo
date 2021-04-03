import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage.component";

function App() {
  return (
    <div>
      {/* Switch when first match render first component  */}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
