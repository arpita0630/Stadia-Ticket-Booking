import React, { useState } from "react";
import StadiaNavbar from "../components/StadiaNavbar";
import CityFilter from "../components/CityFilter";
import Card from "../components/Card";
import { matches } from "../data/matches";

export default function MatchPage() {
  const [selectedCity, setSelectedCity] = useState("All cities");

  const filteredMatches =
    selectedCity === "All cities"
      ? matches
      : matches.filter(
          (match) =>
            match.city1 === selectedCity ||
            match.city2 === selectedCity
        );

  return (
    <div className="bg-primary min-h-screen text-white pb-20">
      <StadiaNavbar />

      <div className="max-w-7xl mx-auto">
        <CityFilter
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <div className="px-10 mt-8">
          <h2 className="text-2xl font-bold border-l-4 border-accent pl-4">
            All IPL 2026 Matches
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mt-8">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match, index) => (
              <Card key={index} match={match} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-text-secondary">
              <p className="text-lg">No matches found for {selectedCity}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}