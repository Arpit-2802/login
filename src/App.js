//import Register from './Register';
//import { Routes, Route } from 'react-router-dom';
//import Login from './Login';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Search from './components/Search';
import Delete from './components/Delete';
import Unauthorized from './components/Unauthorized';
import Update from './components/Update';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
const ROLES={
  'User':2001,
  'Editor':1984,
  'Admin':5150
}
//import Unauthorized from './components/Unauthorized';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Search />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Delete />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Update />} />
        </Route>

        {/* catch all */}
  
      </Route>
    </Routes>
  );
}

export default App;
