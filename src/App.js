
import './App.css';
import Header from './semantics/Header';
import Footer from './semantics/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from 'react';

function App() {
  const [availableTimes, dispatch] = useReducer(initializeAvailableTimes, updateAvailableTimes);
  const updateAvailableTimes = (selectedTime) => {
    // This function removes the selected time from the available times
    const newTimes = availableTimes.filter(time => time !== selectedTime);
    setAvailableTimes(newTimes);
  }
  const initializeAvailableTimes = () => {
    // This function resets the available times to the original list
    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  }
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch}/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
