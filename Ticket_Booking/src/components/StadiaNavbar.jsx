import React from 'react';
import Logo from "./Logo";
import { Link } from 'react-router-dom';

export default function StadiaNavbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-secondary">
      <Logo />

      <div className="flex gap-6 text-text-secondary items-center">
        <span className="text-accent cursor-pointer hover:text-white transition">IPL 2026</span>
        <Link to="/movies" className="cursor-pointer hover:text-white transition">Movies</Link>
        <Link to="/Events" className="cursor-pointer hover:text-white transition">Events</Link>
        <Link to="/dining" className="cursor-pointer hover:text-white transition">Dining</Link>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-1 border border-border rounded text-white hover:bg-border transition">
          Log in
        </button>
        <button className="px-4 py-1 bg-accent text-black rounded font-semibold hover:opacity-90 transition">
          Sign up
        </button>
      </div>
    </div>
  );
}