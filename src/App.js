import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataContextProvider } from './context/DataContext';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import './http';
import './App.css';

const App = () => {
  return (
    <DataContextProvider>
      <Router>
        <Switch>
          <Route path="/users" component={UsersPage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </Router>
    </DataContextProvider>
  );
};

export default App;
