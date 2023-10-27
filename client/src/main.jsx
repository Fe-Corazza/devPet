import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from "recoil";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loja from './routes/loja/loja.jsx';
import Homes from './routes/home.jsx';
import Error from './routes/error.jsx';
import Banho from './routes/banho/banho.jsx';

import Contatos from './routes/Contatos/Contatos.jsx';
import Finaliz from './routes/finaliz/finaliz.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <Homes/> },
      { path: "loja", element: <Loja /> },
      { path: "banho", element: <Banho/> },
      { path: "finaliz", element: <Finaliz /> },
      { path: "contato", element: <Contatos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RecoilRoot>
    <RouterProvider router={router} />
    {/* coloque isso para dar a rota */}
    </RecoilRoot>
  </React.StrictMode>
)
