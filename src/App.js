import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import NotFound from "./Component/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/allusers" component={AllUsers}/>
          <Route exact path="/addusers" component={AddUser}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
