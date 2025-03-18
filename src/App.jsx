import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Platforms from './pages/Platforms';
import Residents from './pages/Residents';
import Vacancies from './pages/Vacancies';
import Partners from './pages/Partners';
import News from './pages/News';
import Contacts from './pages/Contacts';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="residents" element={<Residents />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="partners" element={<Partners />} />
          <Route path="news" element={<News />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="account" element={<Account />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
