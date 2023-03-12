import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Book from './pages/Book';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  const [status, setStatus] = useState("Round");
  const [lang, setLang]=useState("eng");
  const [placeOne, setPlaceOne] = useState("");
  const [placeTwo, setPlaceTwo] = useState("");
  return (
    <div>
      <Navbar lang={lang} setLang={setLang}/>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
            <Home lang={lang} 
            placeOne={placeOne} 
            setPlaceOne={setPlaceOne} 
            placeTwo={placeTwo} 
            setPlaceTwo={setPlaceTwo}
            status={status}
            setStatus={setStatus}
            />
            }
            />
          <Route path='/booking' element={<Book lang={lang} placeOne={placeOne} placeTwo={placeTwo} status={status}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer lang={lang}/>
    </div>
  )
}
