import { render, screen } from '@testing-library/react';
import App from '../App';
import BookingForm from '../component/BookingForm';


test('validates update of available times when date is changed', () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} setAvailableTimes={() => {}} />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toBeInTheDocument();
  // Simulate changing the date
  fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
  // Check if the available times are updated
  expect(timeSelect).toHaveValue(["17:00", "18:00", "19:00", "20:00", "21:00"]); 
});

test('validates initial available times', () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} setAvailableTimes={() => {}} />);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toBeInTheDocument();
  // Check if the initial available times are rendered correctly
  expect(timeSelect).toHaveValue("17:00");
}
);