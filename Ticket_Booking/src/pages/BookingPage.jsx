import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import PaymentMethod from '../components/PaymentMethod';

const BookingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {match} = location.state;

    const [selectedSeat,setSelectedSeat] = useState(null);
    const [paymentMethod,setPaymentMethod] = useState("");

    const seats = [
        {
            type:"Platinum",
            price:"₹4,999"
        },
        {
            type:"Gold",
            price:"₹2,999"
        },
        {
            type:"Silver",
            price:"₹1,499"
        },
        {
            type:"General",
            price:"₹899"
        }
    ]

    const handleBooking = () => {
        //validation
        if(!selectedSeat || !paymentMethod){
            alert("Please select a seat and a payment method")
        }

        navigate("/success",{
            state:{
                match,
                selectedSeat,
                paymentMethod
            }
        })
    }
    
  return (
    <div className='min-h-screen bg-primary text-white p-10'>
        {/* Match Details */}
        <div className='bg-secondary p-6 rounded-xl'>
            <h1 className='text-3xl font-bold'>
                {match.team1} vs {match.team2}
            </h1>
            <p className='text-text-secondary mt-2'>
                {match.date} - {match.venue}
            </p>
        </div>

        {/* Seats */}
        <h2 className='text-2xl font-semibold mt-10 mb-4'>
            Select Seats
        </h2>
        <div className='grid grid-cols-4 gap-4'>
            {seats.map((seat,index)=>(
                <div
                    key={index}
                    onClick={()=>setSelectedSeat(seat)}
                    className={`p-5 border rounded-xl cursor-pointer transition ${
                        selectedSeat?.type === seat.type ? "border-accent" : "border-border"
                    }`}
                >
                    <h3 className='font-semibold'>
                        {seat.type}
                    </h3>
                    <p className='text-text-secondary'>
                        {seat.price}
                    </p>
                </div>
            ))
            }
        </div>

        {/* Payment Method */}
        <h1 className='text-2xl font-semibold mt-10 mb-4'>
            Select Payment Method
        </h1>
        <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
        />

        {/* Booking summary */}
        <div className='bg-secondary p-5 rouned-xl mt-10'>
            <h2 className='text-xl font-semibold'>
                Booking Summary
            </h2>
            <div className='mt-4 space-y-2'>
                <p>
                    Match:
                    {" "}
                    {match.team1} vs {match.team2}
                </p>
                <p>
                    Seat:
                    {" "}
                    {selectedSeat?selectedSeat.type:"Not Selected"}
                </p>
                <p>
                    Payment:
                    {" "}
                    {paymentMethod || "Not Selected"}
                </p>
            </div>
        </div>

        {/* Proceed To Payment Page */}
        <button
            onClick={handleBooking}
            className='mt-10 mg-button hover:bg-button-hover transition px-6 py-3 rounded-lg'
        >
            Proceed to Payment
        </button>
    </div>
  )
}

export default BookingPage