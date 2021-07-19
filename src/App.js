import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";

import Navbar from "./components/navbar/Navbar";
import CoursesMainSection from "./components/courses/CoursesMainSection";

import {urls} from './urls';
import {store} from "./store/store";

import './App.scss';

const App = () => {
  return (
      <Provider store={store}>
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
      </Provider>
  );
}

export default App;
