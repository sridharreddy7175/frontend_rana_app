import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/custom.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesPage } from './Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  return (
    <div className='App'>
        <ToastContainer />
      <RoutesPage/>
    </div>
  );
}

export default App;
