import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { store } from './Root';
import { HomePage, LoginPage } from './Pages';
import { GridProvider, PrivateRoute } from './components';
import { getHomePageData, setCurrentUser, logoutUser, updateCards } from './actions';

const App = () => {
  const dispatch = useDispatch();

  const { homePageData } = useSelector((state) => state.home);
  const user = JSON.parse(localStorage.user_data_cats_app_user);
  const userSettings = JSON.parse(user.settings);
  // Check for tokens
  if (localStorage.user_data_cats_app_token && localStorage.user_data_cats_app_user) {
    setAuthToken(localStorage.user_data_cats_app_token);
    const decoded = jwt_decode(localStorage.user_data_cats_app_token);
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user_data_cats_app_user)));

    const currentTime = Date.now() / 1000;
    if (decoded.expires < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    }
  }

  const updateCardsData = (data) => {
    dispatch(updateCards(user.id, data));
  }

  useEffect(() => {
    dispatch(getHomePageData(user.id));
  }, []);

  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <DndProvider backend={HTML5Backend}>
        {homePageData && (
          <GridProvider homePageData={homePageData} updateCardsData={updateCardsData}>
            <PrivateRoute exact path="/" component={HomePage} />
          </GridProvider>
        )}
      </DndProvider>
    </Switch>
  );
};

export default App;
