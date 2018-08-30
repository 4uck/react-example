import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import ThemeSwitcher from './components/ThemeSwitcher';
import TableBootstrap from './components/TableBootstrap'
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ThemeSwitcher} />
            <Route path="/table" component={TableBootstrap} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'))