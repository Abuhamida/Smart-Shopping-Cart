import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Smart Shopping Cart. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
