import React from "react";

function BookingForm({availableTimes, setAvailableTimes, submitForm}) {
  // This function is used to handle the form submission
  // This component renders a booking form with fields for date, time, number of guests, and occasion.
  // The form fields are stored within useState variables
  // and can be submitted to handle the reservation process.
  // The form includes a submit button to finalize the reservation.
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("17:00");
  const [guests, setGuests] = React.useState(1);
  const [occasion, setOccasion] = React.useState("Birthday");
  // connect each state variable with their corresponding input field
  const handleDateChange = (e) => {

    // Update available times based on the selected date
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setAvailableTimes({type: "CHANGE_DATE", date: selectedDate}); // Dispatch action to update available times

    
  };
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Gather all form data into an object
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Call the submitForm function with the form data
    submitForm(formData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={(e) => handleDateChange(e)} />
      <label for="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => handleTimeChange(e)}>
        {availableTimes.map((time, index) => (
          <option key={index} value={time} className="time-option">
            {time}
          </option>
        ))}
      </select>
      <label for="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => handleGuestsChange(e)}
      />
      <label for="occasion">Occasion</label>
      <select id="occasion" onChange={(e) => handleOccasionChange(e)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation"/>
    </form>
  );
}

export default BookingForm;
