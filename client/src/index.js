import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {app} from "./firebse.config"
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/Store";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider app={app} store={store}>
  <PersistGate loading={"loading"} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
  
);


