import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="app-container">
     {/* navbar */}
    <Navbar/>
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/social' element={<h3>Social</h3>}/>
        <Route path='/library' element={<h3>Library</h3>}/>
        <Route path='/login' element={<h3>Login</h3>}/>
        <Route path='/signup' element={<h3>Signup</h3>}/>
        <Route path='*' element={<h3>Page not Found !!</h3>}/>
     </Routes>
    </div>
  );
}

export default App;
