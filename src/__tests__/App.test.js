import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import BookingForm from '../component/BookingForm';

ddescribe("BookingForm Component", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockSetAvailableTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );
  });

  // Test for the date input field
  test("renders the date input field with correct attributes", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min", new Date().toISOString().split("T")[0]);
  });

  // Test for the time dropdown
  test("renders the time dropdown with correct attributes", () => {
    const timeDropdown = screen.getByLabelText(/Choose time/i);
    expect(timeDropdown).toBeInTheDocument();
    expect(timeDropdown).toHaveAttribute("required");
    expect(timeDropdown.children.length).toBe(mockAvailableTimes.length);
  });

  // Test for the guests input field
  test("renders the guests input field with correct attributes", () => {
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("placeholder", "1");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  // Test for the occasion dropdown
  test("renders the occasion dropdown with correct attributes", () => {
    const occasionDropdown = screen.getByLabelText(/Occasion/i);
    expect(occasionDropdown).toBeInTheDocument();
    expect(occasionDropdown).toHaveAttribute("required");
    const placeholderOption = screen.getByText("-- Select an occasion --");
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toHaveAttribute("disabled");
  });

  // Test for the submit button
  test("renders the submit button with correct attributes", () => {
    const submitButton = screen.getByRole("button", { name: /Make Your reservation/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});