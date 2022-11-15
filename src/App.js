import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar'
import HomePagina from './pagina/HomePagina'
import ErrorPage from './components/ErrorPage'
import PakketjeAanmaken from './pakketje/PakketjeAanmaken'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePagina />} />
    <Route path="/pakketjeAanmaken" element={<PakketjeAanmaken />} />
    <Route path="/appBar" element={<Appbar />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
