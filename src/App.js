import './App.css';
import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Appbar from './components/Appbar'
// import HomePagina from './PakketjesPaginas/HomePagina'
// import ErrorPage from './components/ErrorPage'
// import PakketjeAanmaken from './PakketjesPaginas/PakketjeAanmaken'
// import RegistratiePagina from './AccountPaginas/RegistratiePagina';
// import PakketjeUpdaten from './PakketjesPaginas/PakketjeUpdaten';
// import HerinneringPagina from './PakketjesPaginas/HerinneringPagina';
// import PostzegelAanmaken from './PostzegelPaginas/PostzegelAanmaken';
// import PostzegelUpdaten from './PostzegelPaginas/PostzegelUpdaten';
// import AllePostzegels from './PostzegelPaginas/AllePostzegels';
// import ObjectToevoegen from './ObjectenPaginas/ObjectToevoegen';
// import ObjectenBekijken from './ObjectenPaginas/ObjectenBekijken';

const Appbar = lazy(() => import('./components/Appbar'));
const HomePagina = lazy(() => import('./PakketjesPaginas/HomePagina'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));
const PakketjeAanmaken = lazy(() => import('./PakketjesPaginas/PakketjeAanmaken'));
const RegistratiePagina = lazy(() => import('./AccountPaginas/RegistratiePagina'));
const PakketjeUpdaten = lazy(() => import('./PakketjesPaginas/PakketjeUpdaten'));
const HerinneringPagina = lazy(() => import('./PakketjesPaginas/HerinneringPagina'));
const PostzegelAanmaken = lazy(() => import('./PostzegelPaginas/PostzegelAanmaken'));
const PostzegelUpdaten = lazy(() => import('./PostzegelPaginas/PostzegelUpdaten'));
const AllePostzegels = lazy(() => import('./PostzegelPaginas/AllePostzegels'));
const ObjectToevoegen = lazy(() => import('./ObjectenPaginas/ObjectToevoegen'));
const ObjectenBekijken = lazy(() => import('./ObjectenPaginas/ObjectenBekijken'));

function App() {
  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePagina />} />
        <Route path="/allePostzegels" element={<AllePostzegels />} />
        <Route path="/herinneringen" element={<HerinneringPagina />} />
        <Route path="/pakketjeAanmaken" element={<PakketjeAanmaken />} />
        <Route path="/postzegelAanmaken" element={<PostzegelAanmaken />} />
        <Route path="/registreren" element={<RegistratiePagina />} />
        <Route exact path="/pakketjeUpdaten/:id" element={<PakketjeUpdaten />} />
        <Route exact path="/postzegelUpdaten/:id" element={<PostzegelUpdaten/>} />
        <Route exact path="/objectToevoegen/:id" element={<ObjectToevoegen/>} />
        <Route exact path="/objectenBekijken/:id" element={<ObjectenBekijken/>} />
        <Route path="/appBar" element={<Appbar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
