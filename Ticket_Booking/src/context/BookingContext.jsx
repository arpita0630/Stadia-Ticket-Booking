import React from 'react'
import { createContext,useContext,useState } from 'react'

// Create Context
const BookingContext = createContext();

const BookingProvider = ({children}) => {
    const [paymentMethod,setPaymentMethod] = useState("");

  return (
    <BookingContext.Provider
        value={{
            paymentMethod,
            setPaymentMethod
        }}
    >
        {children}
    </BookingContext.Provider>
  )
}

// Custom Hooks
export function useBooking(){
    return useContext(
        BookingContext
    )
}
export default BookingProvider