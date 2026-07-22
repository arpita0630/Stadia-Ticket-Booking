import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react'

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Fallback if state is missing
    if (!location.state) {
        return (
            <div className='min-h-screen bg-primary flex flex-col items-center justify-center text-white'>
                <p className='text-xl mb-6'>No booking data found.</p>
                <button onClick={() => navigate('/')} className='bg-accent text-black px-6 py-2 rounded-lg font-bold'>
                    Go to Home
                </button>
            </div>
        );
    }

    const { match, selectedSeat, movie, selectedSeats, total } = location.state;

    return (
        <div className='min-h-screen bg-primary flex items-center justify-center text-white p-4'>
            <div className='bg-secondary p-10 rounded-2xl w-full max-w-[450px] text-center flex flex-col items-center justify-center border border-border shadow-2xl'>
                <div className='bg-green-500/20 p-4 rounded-full mb-4'>
                    <CircleCheckBig size={60} className='text-green-500' />
                </div>
                
                <h1 className='text-3xl font-extrabold mt-4'>
                    Booking Confirmed!
                </h1>
                <p className='text-text-secondary mt-3'>
                    Your tickets have been reserved successfully.
                </p>
                
                <div className='bg-primary rounded-2xl p-6 mt-8 text-left w-full border border-border'>
                    <h2 className='font-bold text-xl text-accent'>
                        {movie ? movie.title : `${match.team1} vs ${match.team2}`}
                    </h2>
                    
                    <div className='mt-4 space-y-2 text-sm text-gray-300'>
                        <p className='flex justify-between'>
                            <span className='text-text-secondary'>Date:</span>
                            <span className='font-medium text-white'>{movie ? movie.date : match.date}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='text-text-secondary'>Venue:</span>
                           <span className='font-medium text-white'>{match ? match.venue:movie?movie.venue : movie.theatre}</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='text-text-secondary'>Seats:</span>
                            <span className='font-medium text-white'>
                                {movie ? `${selectedSeats.length} Seats` : selectedSeat.type}
                            </span>
                        </p>
                    </div>
                    
                    
                    <div className='mt-6 pt-4 border-t border-border flex justify-between items-center'>
                        <span className='text-text-secondary font-medium'>Total Paid:</span>
                        <span className='text-2xl font-bold text-white'>₹{total || (selectedSeat ? selectedSeat.price : '0')}</span>
                    </div>
                </div>

                <button 
                    onClick={() => navigate('/')}
                    className='mt-10 w-full bg-accent text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-all duration-200'
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}

export default SuccessPage