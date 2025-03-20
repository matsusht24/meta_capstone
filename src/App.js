import "./App.css";
import Header from "./semantics/Header";
import Footer from "./semantics/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";

function App() {
  const updateAvailableTimes = (selectedTime) => {
    // This function removes the selected time from the available times
    const newTimes = availableTimes.filter((time) => time !== selectedTime);
    return newTimes;
  };
  const initializeAvailableTimes = () => {
    // This function resets the available times to the original list
    const intialTimes = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
    ];
   dispatch({ type: "SET_TIMES", payload: intialTimes });
    return intialTimes;
  };
  const [availableTimes, dispatch] = useReducer(
    initializeAvailableTimes,
    updateAvailableTimes
  );
  
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                setAvailableTimes={dispatch}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
