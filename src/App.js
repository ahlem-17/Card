import { Route, Switch } from "react-router-dom";
import CardList from "./components/CardList";
import User from "./components/User";

function App() {
  return (
    
    <Switch>
     
    <Route exact path="/" component={CardList} />
    <Route path="/user/:id" component={User} />
  </Switch>
  );
}

export default App;
