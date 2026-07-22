import React from "react";

const Seat = ({ seat, selectedSeats, setSelectedSeats }) => {
  const isSelected = selectedSeats.includes(seat.id);
  const handleSeatClick = () => {
    if (seat.booked) return;

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };
  return (
    <div>
      <div
        onClick={handleSeatClick}
        className={`w-8 h-8 text-white rounded cursor-pointer transition ${
          seat.booked
            ? "bg-gray-400 cursor-not-allowed"
            : isSelected
              ? "bg-yellow-400"
              : "bg-green-500 hover:scale-105"
        }`}
      />
    </div>
  );
};

export default Seat;