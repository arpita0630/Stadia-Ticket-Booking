import React from 'react'
import { useBooking } from '../context/BookingContext'

const PaymentMethod = () => {
    const methods = [
        "UPI",
        "Credit Card",
        "Debit Card"
    ]

    const {paymentMethod,setPaymentMethod} = useBooking();

  return (
    <div className='space-y-4'>
        {methods.map((method,index)=>(
            <div
                key={index}
                onClick={()=>setPaymentMethod(method)}
                className={`p-5 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === method ? "border-accent bg-secondary" : "border-border hover:border-accent"
                }`}
            >
                <p>{method}</p>
            </div>
        ))}
    </div>
  )
}

export default PaymentMethod