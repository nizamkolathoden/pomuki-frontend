import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home'


import Register from './components/register'



function App() {
  return (
   <div>


<BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home} />
        <Route  path="/register" component={Register} />

        </Switch>
      </BrowserRouter>

            

   </div>
  );
}

export default App;
