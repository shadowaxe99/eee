```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import BrandList from './components/BrandList';
import Proposal from './components/Proposal';
import Contract from './components/Contract';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/brands" component={BrandList} />
        <Route path="/proposal" component={Proposal} />
        <Route path="/contract" component={Contract} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </Router>
  );
}

export default App;
```