import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Searchtodo from './components/Searchtodo';
import Navbar from './components/Navbar';
import Viewtodo from './components/Viewtodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addtodo/>}/>
        <Route path="/search" element={<Searchtodo/>}/>
        <Route path="/viewall" element={<Viewtodo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
