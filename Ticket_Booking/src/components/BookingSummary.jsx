import { useNavigate } from 'react-router-dom'

const BookingSummary = ({movie,selectedSeats,ticketprice}) => {
    const navigate = useNavigate();
    const subtotal = selectedSeats.length * ticketprice
    const platformFee = selectedSeats.length > 0 ? 99 : 0;
    const gst = Math.floor(subtotal*0.18)
    const total = subtotal+platformFee+gst

    const handlePayment = () => {
        if (selectedSeats.length === 0) return;
        
        navigate("/success", {
            state: {
                movie,
                selectedSeats,
                total
            }
        })
    }


  return (
    <div className="w-[350px] bg-secondary p-6 rounded-2xl border border-border shadow-xl h-fit sticky top-24">
        <h2 className="text-xl font-bold mb-6 border-b border-border pb-4 text-white">
            Booking Summary
        </h2>
        
        <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
                <span className="text-text-secondary">{movie.title} ({selectedSeats.length} Seats)</span>
                <span className="font-semibold text-white">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Platform Fee</span>
                <span className="font-semibold text-white">₹{platformFee}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-text-secondary">GST (18%)</span>
                <span className="font-semibold text-white">₹{gst}</span>
            </div>
            
            <div className="flex justify-between text-lg font-bold border-t border-border pt-4 mt-4">
                <span className="text-accent">Total Amount</span>
                <span className="text-accent">₹{total}</span>
            </div>
        </div>

        <button 
            onClick={handlePayment}
            disabled={selectedSeats.length === 0}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${
                selectedSeats.length > 0 
                ? "bg-accent text-black hover:scale-[1.02] cursor-pointer shadow-lg shadow-accent/20" 
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
        >
            Proceed to Payment
        </button>
        
        {selectedSeats.length === 0 && (
            <p className="text-xs text-center text-red-500 mt-3 font-medium">Please select at least one seat</p>
        )}
    </div>
  )
}

export default BookingSummary
