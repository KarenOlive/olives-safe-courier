import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthContext'
import ParcelProvider from './context/ParcelContext';
import reducer, {initialState} from './context/contextapi/reducer';
import {StateProvider} from "./context/contextapi/StateProvider";

ReactDOM.render(
 
 <StateProvider initialState={initialState} reducer={reducer}>
    <AuthProvider>
    <ParcelProvider>
       <App />
    </ParcelProvider>
    </AuthProvider>
 </StateProvider>,
 
     
  
  document.getElementById('root')
);

