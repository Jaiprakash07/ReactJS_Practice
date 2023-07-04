import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './component/Layout';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
import { About } from './component/About';
import { Login } from './component/Login';
import { Nopage } from './component/Nopage';
import { Userparams } from "./component/userParams";
import { Usersearchparams } from './component/Usersearchparams';
import { Protected } from './component/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Protected Component={Home} />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/About/userParams/:name/:lname' element={<Userparams />} />
          <Route path='/About/UsersearchParams' element={<Usersearchparams />} />
          <Route path='*' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;