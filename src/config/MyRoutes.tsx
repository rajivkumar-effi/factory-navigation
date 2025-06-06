import { createBrowserRouter } from 'react-router-dom';
import IndoorMap from '../IndoorMap';
import StorePathfinderMap from '../StorePathFinder';
import { useState } from 'react';

function GridStateWrapper({ children }) {
  const [dynamicGrid, setDynamicGrid] = useState(null);
  return children({ dynamicGrid, setDynamicGrid });
}

const MyRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <GridStateWrapper>
        {({ setDynamicGrid }) => <IndoorMap setDynamicGrid={setDynamicGrid} />}
      </GridStateWrapper>
    ),
  },
  {
    path: '/pathfinder',
    element: (
      <GridStateWrapper>
        {({ dynamicGrid }) => <StorePathfinderMap dynamicGrid={dynamicGrid} />}
      </GridStateWrapper>
    ),
  },
]);

export default MyRoutes;
