
import './App.css';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';

import AddContact from './Components/AddContact/AddContact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import EditContact from './Components/EditContact/EditContact';
import News from './Components/News/News';


function App() {
  return (
    <div className="App">
   
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/" component={()=>localStorage.getItem('token')?<ContactList/>:<Redirect to="/login"/>}/>
   <Route exact path="/addcontact" component={()=>localStorage.getItem('token')?<AddContact/>:<Redirect to="/login"/>}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/news" component={News}/>
   <Route exact path="/login" component={Login}/>
   <Route exact path="/register" component={Register}/>
   <Route exact path="/edit/:id" component={()=>localStorage.getItem('token')?<EditContact/>:<Redirect to="/login"/>}/>
   <Route path="*" component={NotFound}/>
   </Switch>
    </Router>
    
    </div>
  );
}

export default App;
