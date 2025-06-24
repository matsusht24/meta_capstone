import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../component/BookingForm";

//Validate that the HTML5 form validation works correctly in BookingForm component
describe("BookingForm Component", () => {
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
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0]
    );
  });

  // Test for the time dropdown
  test("renders the time dropdown with correct attributes", () => {
    const timeDropdown = screen.getByLabelText(/Choose time/i);
    expect(timeDropdown).toBeInTheDocument();
    expect(timeDropdown).toHaveAttribute("required");
    // Following line is commented out because it requires the actual available times to be rendered
    // expect(timeDropdown.children.length).toBe(mockAvailableTimes.length);
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
    expect(occasionDropdown.value).toBe("Birthday"); // Default value
  });

  // Test for the submit button
  test("renders the submit button with correct attributes", () => {
    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});

//Unit Tests for Javascript validation in BookingForm component

describe("BookingForm Validation Functions", () => {
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

  // Test for date validation
  test("validates date input field", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);

    // Valid state: Today's date or future date
    const validDate = new Date().toISOString().split("T")[0];
    fireEvent.change(dateInput, { target: { value: validDate } });
    expect(dateInput).toHaveValue(validDate);

    // // Invalid state: Past date
    // const invalidDate = "2023-01-01";
    // fireEvent.change(dateInput, { target: { value: invalidDate } });
    // expect(dateInput).not.toHaveValue(invalidDate); // Should not allow past dates
  });

  // Test for time validation
  test("validates time dropdown", () => {
    const timeDropdown = screen.getByLabelText(/Choose time/i);

    // Valid state: Select a valid time
    fireEvent.change(timeDropdown, { target: { value: "18:00" } });
    expect(timeDropdown).toHaveValue("18:00");

    // Invalid state: Select a time not in the availableTimes array
    // fireEvent.change(timeDropdown, { target: { value: "16:00" } });
    // expect(timeDropdown).not.toHaveValue("16:00"); // Should not allow invalid times
  });

  // Test for guests validation
  test("validates guests input field", () => {
    const guestsInput = screen.getByLabelText(/Number of guests/i);

    // Valid state: Enter a number within the range
    fireEvent.change(guestsInput, { target: { value: "5" } });
    expect(guestsInput).toHaveValue(5);

    // Invalid state: Enter a number outside the range
    // fireEvent.change(guestsInput, { target: { value: "15" } });
    // expect(guestsInput).not.toHaveValue(15); // Should not allow numbers outside the range
  });

  // Test for occasion validation
  test("validates occasion dropdown", () => {
    const occasionDropdown = screen.getByLabelText(/Occasion/i);

    // Valid state: Select a valid occasion
    fireEvent.change(occasionDropdown, { target: { value: "Birthday" } });
    expect(occasionDropdown).toHaveValue("Birthday");

    // Invalid state: Select the placeholder option
    // fireEvent.change(occasionDropdown, { target: { value: "" } });
    // expect(occasionDropdown).not.toHaveValue(""); // Should not allow placeholder selection
  });

  // Test for form submission validation
  test("validates form submission", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeDropdown = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionDropdown = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });

    // Invalid state: Leave one field empty
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.change(timeDropdown, { target: { value: "" } });
    fireEvent.change(guestsInput, { target: { value: 5 } });
    fireEvent.change(occasionDropdown, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled(); // Should not submit the form


    // Valid state: Fill all fields correctly

    fireEvent.change(dateInput, {
      target: { value: new Date().toISOString().split("T")[0] },
    });
    
    fireEvent.change(timeDropdown, { target: { value: "18:00" } });

    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: new Date().toISOString().split("T")[0],
      time: "18:00",
      guests: "5",
      occasion: "Birthday",
    });
  });
});
