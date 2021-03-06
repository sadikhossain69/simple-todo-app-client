import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
