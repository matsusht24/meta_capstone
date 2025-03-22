import React from 'react'
import BookingForm from '../component/BookingForm'

function BookingPage(props) {
  return (
    <>
      <BookingForm  {...props} />
    </>
  )
}

export default BookingPage;