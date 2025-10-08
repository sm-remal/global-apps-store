import React, { Suspense } from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import Spinner from '../components/Spinner/Spinner';



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
        element: <Suspense fallback={<Spinner></Spinner>}>
          <Home fetchPromise={fetchPromise}></Home>
        </Suspense>
      },
      {
        path: "apps",
        element: <Suspense fallback={<Spinner></Spinner>}>
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