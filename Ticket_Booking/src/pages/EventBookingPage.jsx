import React, { useState } from 'react'
import StadiaNavbar from '../components/StadiaNavbar'
import Seat from '../components/Seat'
import BookingSummary from '../components/BookingSummary'

const EventBookingPage = () => {
    const events = { 
        title:"Ipl Fanfest 2026 Mumbai",
        date:"Sun,18 may 2026",
        venue:"Mumbai",
        price: 799,
    }

    const [selectedSeats,setSelectedSeats] = useState([])
    const seats = Array.from(
        {length:100},
        (_,index)=>({
            id: index+1,
            booked:
                index === 1 || index === 5 || index === 20,
        })
    );
    const seatType = [
        {
            type:"All access",
            price:"₹1,299"
        },
        {
            type:"General",
            price:"₹799"
        }
    ]

  return (
     <div>
            <StadiaNavbar/>
            <div className='flex gap-10 p-10'>
                {/* Left side */}
                <div className='flex-1'>
                    {/* Event Details */}
                    <div className='bg-card p-6 rounded-xl'>
                        <h1 className='text-3xl font-bold'>
                            {events.title}
                        </h1>
                        <p className='text-text-secondary mt-2'>
                            {events.date}
                        </p>
                        <p className='mt-4 font-semibold'>
                            From ₹{events.price}
                        </p>
                        <p className='text-text-secondary mt-2'>
                            {events.venue}
                        </p>
                    </div>
                    {/* Screen */}
                    <div className='mt-8'>
                        <div className='bg-button text-center py-2 rounded-xl'>
                            Main Section
                        </div>
                    </div>
                    {/* Seat type */}
                    <div className='flex gap-4'>
                        {seatType.map((seat,index)=>{
                            return <div key={index} className='bg-yellow-500/20 border border-yellow-500 rounded-xl p-4 w-[180px] mt-6'>
                                <p className='font-semibold'>
                                    {seat.type}
                                </p>
                                <p className='text-sm mt-1'>
                                    {seat.price}
                                </p>
                            </div>
                        })}
                    </div>
                    {/* Seat Grid */}
                    <div className='bg-secondary p-6 rounded-xl mt-8'>
                        <p className='text-center text-sm text-text-secondary mb-6'>
                            Standard section Main Section
                        </p>
                        <div className='grid grid-cols-10 gap-1'>
                            {
                                seats.map((seat)=>(
                                    <Seat
                                        key={seat.id}
                                        seat={seat}
                                        selectedSeats={selectedSeats}
                                        setSelectedSeats={setSelectedSeats}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <BookingSummary
                    movie ={events}
                    selectedSeats={selectedSeats}
                    ticketprice={events.price}
                />
            </div>
        </div>
  )
}

export default EventBookingPage