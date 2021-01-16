import React from 'react';
import './App.scss';
import './styles/scan.scss'
import './styles/home.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserHome from './Pages/User/UserHome';
import Scan from './Pages/User/Scan';
import UserAccountDetails from './Pages/User/UserAccountDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <div className='wrapper' style={{ width: '100%' }}>
          <Switch>
            <Route path='/user/home' component={UserHome} />
            <Route path='/scan' component={Scan} />
            <Route path='/userAccountDetails' component={UserAccountDetails} />
            <Redirect to='/user/home' component={UserHome}></Redirect>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
