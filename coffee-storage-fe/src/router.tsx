import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ModalLayout } from 'app/layouts/modal-layout';
import { Coffee } from 'app/pages/coffee';
import { CoffeeModal } from 'app/pages/coffee-modal';
import { Favorites } from 'app/pages/favorites';
import { Main } from 'app/pages/main';
import { MakeCoffee } from 'app/pages/make-coffee';
import { Practice } from 'app/pages/practice';
import { Registration } from 'app/pages/registration';
import { Statistics } from 'app/pages/statistics';
import { Test } from 'app/pages/test';
import { UpdateUser } from 'app/pages/update-user';
import { AuthLayout, MainLayout } from './app/layouts';
import { Login } from './app/pages';

export const router = createBrowserRouter([
  {
    path: 'main',
    element: <MainLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'coffee', element: <Coffee /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'practice', element: <Practice /> },
      { path: 'make', element: <MakeCoffee /> },
      { path: 'update', element: <UpdateUser /> },
      { path: 'statistics', element: <Statistics /> },
    ],
  },
  {
    path: '/modal',
    element: <ModalLayout />,
    children: [
      { path: ':coffeeId', element: <CoffeeModal /> },
      { path: 'test', element: <Test /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Registration /> },
    ],
  },
]);
