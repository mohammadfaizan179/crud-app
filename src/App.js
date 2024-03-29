import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AllUsers from "./Component/AllUsers";
import AddUsers from "./Component/AddUsers";
import NotFound from "./Component/NotFound";
import EditUser from "./Component/EditUser";

import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/all" component={AllUsers}/>
          <Route exact path="/add" component={AddUsers}/>
          <Route exact path="/edit/:id" component={EditUser}/>
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
