'use client';
import React from "react";
import IndoorMap from "./IndoorMap";

export default function Map() {
  return (
    <div className="h-screen w-full relative bg-gray-50">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0  backdrop-blur-sm  p-4 z-[5] flex justify-center items-center">
        <h1 className="text-xl font-semibold text-[rgb(4,105,177)] flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Indoor Navigation
        </h1>
      </div>

      {/* Map View */}
      <div className="w-full h-full pt-16">
        <IndoorMap />
      </div>

    </div>
  );
}
