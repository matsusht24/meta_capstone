import "./App.css";
import Header from "./semantics/Header";
import Footer from "./semantics/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";
import ConfirmedBooking from "./component/ConfirmedBooking";

function App() {
  const updateAvailableTimes = (state, action) => {
    // This takes the updated date and returns the new available times
    // based on the selected date
    switch(action.type) {
      case "CHANGE_DATE":
        return window.fetchAPI(new Date(action.date)); // Reset to default times for simplicity
      default:
        return state;
    }

  };
  const initializeTimes = () => {
    const currentDate = new Date();
    console.log("Fetching available times for: ", currentDate);
    // Fetch available times for the current date
    return window.fetchAPI(currentDate);
  };
  
  //Function that accepts form data as a parameter and will submit it to the API
  // if the sumission is successful, it will navigate to the success page
  const submitForm = (formData) => {
    console.log("Submitting form data: ", formData);
    const isSuccess = window.submitAPI(formData);
    if (isSuccess) {
      console.log("Form submission successful");
      // Navigate to the success page
      window.location.href = "/confirmed";
    } else {
      console.error("Form submission failed");
    }
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
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
