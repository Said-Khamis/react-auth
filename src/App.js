import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import ManageUser from './components/pages/ManageUser';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/'  element={ <Login />}/>
          <Route path='/signup'  element={ <SignUp /> }/>
          <Route path='/' element={ <Layout/> }>
            <Route path='/home' element={ <Home /> }/>
            <Route path='/manageusers' element={ <ManageUser /> }/>
            <Route path='/settings' element={ <SignUp /> }/>
          </Route>
      </Routes>
   </Router>
  );
}

export default App;
