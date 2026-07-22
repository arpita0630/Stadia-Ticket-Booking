import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ match }) {
  const demandLabel = match.demand || "All";
  const isHighDemand = demandLabel.toLowerCase() === "high demand";
  const isAvailable = demandLabel.toLowerCase() === "available";

  const navigate = useNavigate();

  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:border-accent transition cursor-pointer shadow-lg">
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
          isHighDemand
            ? "border-error text-error"
            : isAvailable
              ? "border-green-400 text-green-400"
              : "border-text-secondary text-text-secondary"
        }`}
      >
        {demandLabel}
      </span>

      <div className="flex justify-between items-center mt-4">
        <div className="text-center">
          <div className="bg-button w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white">
            {match.team1}
          </div>
          <p className="text-xs mt-1 text-text-secondary">
            {match.city1}
          </p>
        </div>

        <span className="text-text-secondary text-sm">vs</span>

        <div className="text-center">
          <div className="bg-accent text-black w-10 h-10 rounded-full flex items-center justify-center font-semibold">
            {match.team2}
          </div>
          <p className="text-xs mt-1 text-text-secondary">
            {match.city2}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-5 text-sm">
        <span className="text-text-secondary">
          {match.date}
        </span>
        <span className="text-white font-semibold">
          {match.price}
        </span>
      </div>
      <button
        onClick={()=>
          navigate('/bookings',{
            state:{
              match
            }
          })
        }
        className='w-full mt-5 bg-accent text-black py-2 rounded-lg font-semibold cursor-pointer'
      >
        Book Now
      </button>
    </div>
  );
}