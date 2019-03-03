import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddProductPage from '../components/addProduct'

const AppRouter = () => (
  <BrowserRouter>
    <div>
    
      <Switch>
      
        <Route path="/" component={AddProductPage} />
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
