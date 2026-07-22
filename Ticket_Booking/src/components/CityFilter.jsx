import React from 'react';

export default function CityFilter({
  selectedCity,
  setSelectedCity,
}) {

  const cities = [
    "All cities",
    "Mumbai",
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Kolkata",
  ];

  return (
    <div className="flex gap-4 px-10 py-4 text-sm overflow-x-auto no-scrollbar">
      {cities.map((city, index) => (
        <button
          key={index}
          onClick={() => setSelectedCity(city)}
          className={`px-4 py-1 rounded-full transition whitespace-nowrap ${
            selectedCity === city
              ? "bg-accent text-black font-semibold"
              : "text-text-secondary hover:text-white border border-transparent hover:border-border"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
