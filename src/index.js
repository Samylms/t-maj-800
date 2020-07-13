import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dashboard from './views/Dashboard/Dashboard';
import CostumerService from './views/CostumerService/CostumerService';
import Farm from './views/Farming/Farm';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Appbar from './views/Sidebar/Appbar';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
 

  <BrowserRouter>
       <ThemeProvider theme={theme}>

  <Appbar/>
             <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/CostumerService" component={CostumerService} />
              <Route path="/Farm" component={Farm} />
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />

            </Switch>
            </ThemeProvider>

 
</BrowserRouter>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
