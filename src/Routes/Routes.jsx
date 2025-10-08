import React, { Suspense } from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppsDetails from '../pages/AppsDetails/AppsDetails';



const fetchPromise = fetch("../mobileApps.json").then(res => res.json())

// console.log(fetchPromise)


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Home fetchPromise={fetchPromise}></Home>
        </Suspense>
      },
      {
        path: "apps",
        element: <Suspense>
          <Apps fetchPromise={fetchPromise}></Apps>
        </Suspense>
      },
      {
        path: "apps/:id",
        element: <Suspense>
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