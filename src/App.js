import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';
import Navbar from "./components/navbar/Navbar";
import CoursesMainSection from "./components/CoursesMainSection";
import {urls} from './urls';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route
                component={CoursesMainSection}
                path={urls.COURSE_CATEGORY_PAGE.path + ":categoryId"}
            />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
