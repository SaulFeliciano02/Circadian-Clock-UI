import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route path='/home' component={Sidebar}></Route>
          <Route path='/signup' component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
