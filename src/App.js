import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home'
import Love from './components/Love'
import Login from './components/Login'
import Register from './components/register'
import ForgotPassword from './components/forgotPassword'
import ChangePassword from './components/ChangePassword';
import Fool from './components/fool';

function App() {
  return (
   <div>


<BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home} />
        <Route  path="/lovecalculator/:id" component={Love} />

        <Route  path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <Route  path="/forgot-password" component={ForgotPassword} />
        <Route  path="/change-password/:id/:token" component={ChangePassword} />
        <Route  path="/fool" component={Fool} />

        </Switch>
      </BrowserRouter>

            

   </div>
  );
}

export default App;
