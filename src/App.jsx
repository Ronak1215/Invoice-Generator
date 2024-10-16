import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import Invoices from './components/Invoices';
import Newinvoices from './components/Newinvoices';
import Setting from './components/Setting';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path='main' element={<Main />}/>
          <Route path='invoices' element={<Invoices />}/>
          <Route path='new-invoice' element={<Newinvoices />}/>
          <Route path='setting' element={<Setting />}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
