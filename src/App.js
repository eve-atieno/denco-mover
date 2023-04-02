import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GettingStarted from './components/GettingStarted';
import AuthProvider from './components/AuthContext';
import ViewQuotes from './components/ViewQuotes.js';
import Footer from './components/Footer';

function App() {
  const [contService, setContService] = useState([]);
  const [quote, setQuote] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceSelection = (service) => {
    setSelectedServices((prevServices) => [...prevServices, service]);
  };

  useEffect(() => {
    fetch('https://denco.onrender.com/services')
      .then((res) => res.json())
      .then((data) => {
        setContService(data);
        console.log(("data", data))
      });
  }, []);
  console.log(contService)
  useEffect(() => {
    fetch('https://denco.onrender.com/books')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navbar quotes={quote} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/GettingStarted" element={<GettingStarted />} />
            <Route
              path="/services"
              element={
                <Services
                  contService={contService}
                  handleServiceSelection={handleServiceSelection}
                />
              }
            />
            <Route
              path="/contact/:id"
              element={
                <ContactForm
                  contService={contService}
                  setQuote={setQuote}
                  selectedServices={selectedServices}
                />
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/viewQuotes"
              element={<ViewQuotes services={selectedServices} />}
            />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
