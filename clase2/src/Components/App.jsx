import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Courses from "./Organisms/Courses";
import Form from "./Pages/Form";
import Header from "./Organisms/Header";
import Users from "./Pages/Users";
import "../styles/styles.scss";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/course/:id" component={Course}></Route>
          <Route path="/users" component={Users}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
