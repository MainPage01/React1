import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';

import Main from './pages/Main'
import Second from './pages/Second'
import Third from './pages/Third'
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter> 
        <Header/>

    <Routes>

    <Route path='/' element={<Main/>}/>
    <Route path='/second' element={<Second/>}/>
    <Route path='/third' element={<Third/>}/>

    </Routes>
    <Footer/>

    
    
    
    </BrowserRouter>
  );
}

export default App;
