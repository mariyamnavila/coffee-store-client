import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Users from './Components/Users.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './Components/Users2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-theta-three.vercel.app/coffees'),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'coffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-theta-three.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-theta-three.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: 'signIn',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-theta-three.vercel.app/users'),
        Component: Users,
      },
      {
        path: 'users2',
        Component: Users2,
      },
    ]
  },
]);

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
