import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { store } from "./Root";
import { HomePage, LoginPage } from './Pages';
import { GridProvider, PrivateRoute } from "./components";
import { getHomePageData, setCurrentUser } from "./actions";

const App = () => {
  const dispatch = useDispatch();

  const { homePageData } = useSelector(state => state.home);

  // Check for tokens
  if (localStorage.user_data_cats_app) {
    const user_data_cats_app = JSON.parse(localStorage.user_data_cats_app);
    store.dispatch(setCurrentUser(user_data_cats_app));
  }

  useEffect(() => {
    dispatch(getHomePageData());
  }, []);

  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <DndProvider backend={HTML5Backend}>
        {homePageData && (
          <GridProvider homePageData={homePageData}>
            <PrivateRoute exact path="/" component={HomePage} />
          </GridProvider>
        )}
      </DndProvider>
    </Switch>
  );
};

export default App;
