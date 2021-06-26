import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthContext'
import ParcelProvider from './context/ParcelContext';
ReactDOM.render(
 
  <AuthProvider>
    <ParcelProvider>
     <App />
    </ParcelProvider>
  </AuthProvider>,
     
  
  document.getElementById('root')
);

