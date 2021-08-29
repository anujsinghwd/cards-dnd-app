import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomePage } from './Pages';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { GridProvider } from "./components";
import { getHomePageData } from "./actions";

const App = () => {
  const dispatch = useDispatch();

  const { homePageData } = useSelector(state => state.home);

  useEffect(() => {
    dispatch(getHomePageData());
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      {homePageData && (
        <GridProvider homePageData={homePageData}>
          <HomePage />
        </GridProvider>
      )}
    </DndProvider>
  );
};

export default App;
