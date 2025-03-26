import "./App.css";
import Header from "./semantics/Header";
import Footer from "./semantics/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";

function App() {
  const updateAvailableTimes = (state, action) => {
    // This takes the updated date and returns the new available times
    // based on the selected date
    switch(action.type) {
      case "CHANGE_DATE":
        return initializeTimes // Reset to default times for simplicity
      default:
        return state;
    }

  };
  const initializeTimes = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    //return window.fetchAPI(currentDate);
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ];

  };

  const [state, dispatch] = useReducer(
    updateAvailableTimes, initializeTimes()
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
                availableTimes={state}
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
