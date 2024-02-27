import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Room from './pages/Room'
import NoPage from './pages/NoPage';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

export default function App() {
  const scrollToIdSection = ({ id }) => {
    const aboutSection = document.getElementById(id);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuBar scrollToIdSection={scrollToIdSection} />}>
          <Route index element={<Home />} />
          <Route path="/rooms1" element={<Room />} />
        </Route>
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}
