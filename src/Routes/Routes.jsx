import React, { Suspense } from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import Spinner from '../components/Spinner/Spinner';
import ErrorAppPage from '../pages/ErrorAppPage/ErrorAppPage';

// Data fetch 
const fetchPromise = fetch("../mobileApps.json").then(res => res.json())


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:id",
        errorElement: <ErrorAppPage></ErrorAppPage>,
        element: <Suspense fallback={<Spinner></Spinner>}>
          <AppsDetails fetchPromise={fetchPromise}></AppsDetails>
        </Suspense>
      },
      {
        path: "installation",
        Component: Installation,
      }
     
    ]
  },
]);