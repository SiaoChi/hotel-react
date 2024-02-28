import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, QA, Contact ,Rooms } from'./pages/Home'
import  { PageRoom1,PageRoom2,PageRoom3,PageRoom4,PageRoom5,PageRoom6 } from './pages/Room'
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
          <Route path="/rooms/1" element={<PageRoom1 />} />
          <Route path="/rooms/2" element={<PageRoom2 />} />
          <Route path="/rooms/3" element={<PageRoom3 />} />
          <Route path="/rooms/4" element={<PageRoom4 />} />
          <Route path="/rooms/5" element={<PageRoom5 />} />
          <Route path="/rooms/6" element={<PageRoom6 />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qa" element={<QA />} />
        </Route>
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}
